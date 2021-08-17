import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { ApiService } from '../services/api.service';
import { catchError } from 'rxjs/operators';

import { ToastController } from '@ionic/angular';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    // Used for queued API calls while refreshing tokens
    tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

    constructor(private apiService: ApiService, private toastCtrl: ToastController) { }

    // Intercept every HTTP call
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // Check if we need additional token logic or not
        if (this.isInBlockedList(request.url)) {
            return next.handle(request);
        } else {
            return next.handle(this.addToken(request)).pipe(
                catchError(err => {
                    if (err instanceof HttpErrorResponse) {
                        switch (err.status) {
                            case 400 || 401:
                                return this.handleError(err);
                            default:
                                return throwError(err);
                        }
                    } else {
                        return throwError(err);
                    }
                })
            );
        }
    }

    // Filter out URLs where you don't want to add the token!
    private isInBlockedList(url: string): Boolean {
        // Example: Filter out our login and logout API call
        if (url == `${environment.api_url}/login` ||
            url == `${environment.api_url}/register`) {
            return true;
        } else {
            return false;
        }
    }

    // Add our current access token from the service if present
    private addToken(req: HttpRequest<any>) {
        if (this.apiService.currentAccessToken) {
            return req.clone({
                headers: new HttpHeaders({
                    Authorization: `Bearer ${this.apiService.currentAccessToken}`
                })
            });
        } else {
            return req;
        }
    }

    // We are not just authorized, we couldn't refresh token
    // or something else along the caching went wrong!
    private handleError(err): Observable<any> {
        this.toastCtrl.create({
            message: 'Ihre Session ist abgelaufen, bitte erneut einloggen',
            duration: 2000
        }).then(toast => {
            toast.present();
        }).finally(() => {
            this.apiService.logout();
        });
        return of(null);
    }
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials: FormGroup;
  loginUrl = '';
  redirectText = '';

  constructor(
    private fb: FormBuilder,
    private authService: ApiService,
    private alertController: AlertController,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loadingController: LoadingController,
    public menu: MenuController
  ) { }

  ionViewWillEnter() {
    this.menu.enable(false);
    this.menu.get().then((menu: HTMLIonMenuElement) => {
      menu.swipeGesture = false;
    });
  }
  ionViewDidLeave() {
    this.menu.enable(true);
  }
  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['peter.widmer2@web.de', [Validators.required, Validators.email]],
      password: ['test1', [Validators.required, Validators.minLength(5)]],
    });

    this.loginUrl = this.activatedRoute.snapshot.queryParamMap.get('navigateto') || '/home';
    this.redirectText = this.activatedRoute.snapshot.queryParamMap.get('redirect') || '';
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.login(this.credentials.value).subscribe(
      async (res) => {
        await loading.dismiss();
        this.router.navigateByUrl(this.loginUrl, { replaceUrl: true });
      },
      async (res) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Login fehlgeschlagen',
          message: res.error.msg.message,
          buttons: ['OK'],
        });

        await alert.present();
      }
    );
  }

  // Easy access for form fields
  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }
}
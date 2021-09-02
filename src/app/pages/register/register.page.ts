import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  credentials: FormGroup;
  loginUrl = '/home';
  isExistingUser = true;

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
  async ngOnInit() {
    this.credentials = this.fb.group({
      email: [this.activatedRoute.snapshot.queryParamMap.get('email') || '', [Validators.required, Validators.email]],
      confirmationCode: [this.activatedRoute.snapshot.queryParamMap.get('confirmationCode'), [Validators.required]],
      clubId: [this.activatedRoute.snapshot.queryParamMap.get('club'), [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      name: ['', [Validators.required, Validators.minLength(5)]],
    });

    if (this.credentials.get('clubId').value || this.credentials.get('confirmationCode').value) {
      this.checkPlayerData() //this.register()
    } else {
      const alert = await this.alertController.create({
        header: 'Daten fehlen',
        message: '<center>Um dich einem Verein zuzuordnen, brauchen wir den Registrierungscode. Folge der Bestätigungsmail in deinem E-Mail Postfach um das automatisch zu vervollständigen.</center>',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  async checkPlayerData() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.authService.checkPlayerData(this.credentials.value).subscribe(
      async (user: any) => {
        if (user.email && user.name && user.clubs.length >= 1) {
          await loading.dismiss();
          return this.register();
        } else {
          await loading.dismiss();
          this.promtForRegistration();
        }
      },
      async (res) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Registrierung fehlgeschlagen',
          message: res.error.msg.message,
          buttons: [{
            text: 'Zum Login',
            handler: () => { this.navToLogin() }
          }],
        });

        await alert.present();
      }
    );
  }

  async promtForRegistration() {
    const alert = await this.alertController.create({
      header: 'Registrierung abschliessen',
      message: '</center>Fast fertig! Um deinen Benutzeraccount zu vervollständigen brauchen wir noch ein paar Informationen. Bitte fülle diese aus.</center>',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async register() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.authService.register(this.credentials.value).subscribe(
      async (user: any) => {
        await loading.dismiss();
        if (user.email && user.name && user.clubs.length >= 1) {
          const alert = await this.alertController.create({
            header: 'Neuer Verein hinzugefügt!',
            message: 'Du wurdest erfolgreich zu deinem neuen Verein hinzugefügt.',
            buttons: [{
              text: 'Zum Login',
              handler: () => { this.router.navigateByUrl(this.loginUrl, { replaceUrl: true }); }
            }],
          });
          await alert.present();
        } else {
          this.isExistingUser = false;
        }
      },
      async (res) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Registrierung fehlgeschlagen',
          message: res.error.msg.message,
          buttons: [{
            text: 'Zum Login',
            handler: () => { this.navToLogin() }
          }],
        });

        await alert.present();
      }
    );
  }

  navToLogin() {
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

  // Easy access for form fields
  get email() {
    return this.credentials.get('email');
  }

  get name() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }
}
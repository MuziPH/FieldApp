import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email = '';
  password = '';

  constructor(public afAuth: AngularFireAuth, public router: Router, public alert: AlertController) { }

  ngOnInit() {
  }

  async login() {
    const {email, password} = this;

      try {
          const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
          console.log(res);
          this.showAlert('Login Success', 'Welcome to Ghubani Field App');
          this.router.navigateByUrl('/tabs');

      } catch (err) {
          console.dir(err);
          this.showAlert('Incorrect login details', 'Email or Password incorrect');
      }
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
        header,
        message,
        buttons: ['Ok']
    });

    await alert.present();
  }

}

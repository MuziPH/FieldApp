import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email = '';
  password = '';
  cpassword = '';

  constructor(public afAuth: AngularFireAuth, public router: Router, public alert: AlertController) { }

  ngOnInit() {
  }

  async register() {

    const  { email, password, cpassword } = this;
    if (password !== cpassword) {
        this.showAlert('Error', 'Password mismatch');
      return console.error('Passwords dont match');
    }

    try {
        const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
        this.showAlert('Success', 'Registration successful!! Now login');
        this.router.navigateByUrl('login');
    } catch (err) {
        this.showAlert('Error', err.message);
        console.dir(err);
    }
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

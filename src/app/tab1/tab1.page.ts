import {Component} from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {DieselReport} from '../models/DieselReport';
import {AlertController, LoadingController} from '@ionic/angular';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    public dieselReport: DieselReport = {
        reportDate: '',
        bakkieNumber: '',
        startKilos: null,
        endKilos: null,
        dayTotalKilos: null,
        dieselFilled: null,
        notableTravel: ''
    };

    constructor(private firebaseService: FirebaseService, private alert: AlertController, public loadingController: LoadingController) {
    }

    submitReport(dieselForm) {
        this.dieselReport.dayTotalKilos = this.dieselReport.endKilos - this.dieselReport.startKilos;
        console.log(dieselForm.value);
        return this.firebaseService.addDieselReport(this.dieselReport).then(() => {
            this.presentAlert();
            dieselForm.reset();
        });
    }


    async presentAlert() {
        const alert = await this.alert.create({
            header: 'Alert',
            subHeader: 'Diesel Report',
            message: 'Your Diesel Report has been saved succesfully',
            buttons: ['OK']
        });

        await alert.present();
    }

}

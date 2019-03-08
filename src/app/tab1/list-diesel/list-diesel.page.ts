import {Component, OnInit} from '@angular/core';
import {DieselReport} from '../../models/DieselReport';
import {FirebaseService} from '../../services/firebase.service';
import {LoadingController} from '@ionic/angular';

@Component({
    selector: 'app-list-diesel',
    templateUrl: './list-diesel.page.html',
    styleUrls: ['./list-diesel.page.scss'],
})
export class ListDieselPage implements OnInit {
    rows: DieselReport[];

    tableColumns: string[] = ['Bakkie', 'Report_Date', 'Start_Kilos', 'End_Kilos', 'Total_Kilos', 'Diesel', 'Travel'];

    constructor(private fireService: FirebaseService, public loadingController: LoadingController) {
    }

    ngOnInit() {
        this.presentLoading();
        this.fireService.getAll().subscribe(res => {
            this.rows = res;
            console.log(res);

        });
    }

    async presentLoading() {
        const loading = await this.loadingController.create({
            message: 'Loading your data...',
            duration: 1000
        });
        await loading.present();
    }

}

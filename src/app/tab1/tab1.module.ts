import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Tab1Page} from './tab1.page';
import {ListDieselPage} from './list-diesel/list-diesel.page';
import {ListDieselPageModule} from './list-diesel/list-diesel.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ListDieselPageModule,
        RouterModule.forChild([{path: '', component: Tab1Page}, {path: 'list', component: ListDieselPage}])
    ],
    declarations: [Tab1Page]
})
export class Tab1PageModule {
}

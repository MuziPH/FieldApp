import {Component} from '@angular/core';
import { faGasPump } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  faGasPump = faGasPump;

  constructor() {}

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MyTeamsPage} from '../pages';

@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})
export class TournamentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  navigate(){
    this.navCtrl.pop(); //manually go backwards
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');
  }

}

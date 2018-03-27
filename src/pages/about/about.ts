import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  public clickDisable:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.clickDelay();
  }



  clickDelay(){
    let self = this
    setInterval(function () {
      self.clickDisable=true;
      console.log(self.clickDisable)
    },2000)
  }

  clickInterval(){
    console.log(this.clickDisable)
    if(this.clickDisable){
      console.log("clicked");
      this.clickDisable=false;
    }else {
      console.log("not clicked")
    }
  }
}

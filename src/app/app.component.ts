import { Component } from '@angular/core';
import {AlertController, Platform, ToastController, } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Network} from "@ionic-native/network";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = "TabsPage";
  isConnected = true;
  private refreshShown = false;

  constructor(
    platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private network: Network,private toastCtrl: ToastController,
    private alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });






    this.network.onDisconnect().subscribe(() => {
      this.isConnected = false;
      setTimeout(() => {
        this.toastCtrl.create({
          message: 'yes gone network',
          duration: 3000
        }).present();
      }, 2000);
    });

    this.network.onConnect().subscribe(() => {
      this.isConnected = true;





      //setTimeout(() => {
        //if (this.network.type) {
          this.toastCtrl.create({
            message: 'yes got network',
            duration: 3000
          }).present();
        //}
      //}, 2000);

    });






    setInterval(() => {
      if ((!this.isConnected) && (!this.refreshShown)) {
        this.refreshShown = true;
        this.alertCtrl.create({
          enableBackdropDismiss: false,
          title: 'No Internet Connection',
          message: 'You are offline. Please check your internet connection and retry',
          buttons: [
            {
              text: 'RETRY',
              handler: () => {
                this.refreshShown = false;
                console.log('Refresh clicked');
              }
            }
          ]
        }).present();
      }
    }, 1000)


  }
}

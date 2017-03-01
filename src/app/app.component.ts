import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Splashscreen } from '@ionic-native/splashscreen';
import { StatusBar } from '@ionic-native/statusbar';

import { HomePage } from '../pages/home/home';

import firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    firebase.initializeApp({
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      storageBucket: "",
      messagingSenderId: ""
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}

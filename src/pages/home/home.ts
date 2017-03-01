import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userProfile: any = null;
  zone: NgZone;
  
  constructor(public navCtrl: NavController) {
    this.zone = new NgZone({});
    firebase.auth().onAuthStateChanged( user => {
      this.zone.run( () => {
        if (user){
          this.userProfile = user;
        } else { 
          this.userProfile = null; 
        }
      });
    });
  }

  loginUser(): void {
    GooglePlus.login({
      'webClientId': '478496039280-qdu8j619ndmt3t8un8a9m7qejhignrsh.apps.googleusercontent.com',
      'offline': true
    }).then( res => {
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
        .then( success => {
          console.log("Firebase success: " + JSON.stringify(success));
        })
        .catch( error => console.log("Firebase failure: " + JSON.stringify(error)));
      }).catch(err => console.error("Error: ", err));
  }

}


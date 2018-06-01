import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Stripe } from "@ionic-native/stripe";

/**
 * Generated class for the StripePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-stripe',
  templateUrl: 'stripe.html',
})
export class StripePage {
  public token:String='';
  public data:any={
    number: '4242424242424242',
    expMonth: 12,
    expYear: 2020,
    cvc: '220'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,public stripe:Stripe) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StripePage');
  }

  public pagar():void{
    this.stripe.setPublishableKey('pk_test_qi7eMFqnQoa6yV6bzumSVNNw');
    this.stripe.createCardToken(this.data).then((token)=>{
      this.token=token.id;
      //alert("El token es "+token.id);
    }).catch((error)=>{
      alert(error);
    });
  }

}

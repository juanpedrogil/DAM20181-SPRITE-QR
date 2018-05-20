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
    numero:'4242424242424242',
    mes: 10,
    year:2019,
    cvc:'234'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,public stripe:Stripe) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StripePage');
  }

  public pagar():void{
    this.stripe.setPublishableKey('pk_test');
    this.stripe.createBankAccountToken(this.data).then((token)=>{
      this.token=token;
    });
  }

}

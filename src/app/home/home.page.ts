import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private detail:NavController) {}

  Gotodetail(i:any){
    this.detail.navigateForward ('/detail',{state:{i}}) ;
  }

  items=[
    {
      id:1,
      name:"iPhone 14 Pro Max",
      price:"39,000",
      detail:"This is a iPhone 14 Pro Max by Apple",
      image:"assets/img/product/i15promax 1.png"

    },
    {
      id:2,
      name:"Sumsung S 24 Ultra",
      price:"49,000",
      detail:"This is a Sumsung S 24 Ultra by Sumsung",
      image:"assets/img/product/s24u 1.png"

    },
    {
      id:3,
      name:"Sumsung A 54 5G",
      price:"29,000",
      detail:"This is a Sumsung A 54 5G by Sumsung",
      image:"assets/img/product/A54 1.png"

    },
    {
      id:4,
      name:"Xiaomi 14 T Pro",
      price:"19,000",
      detail:"This is a Xiaomi 14 T Pro by Xiaomi",
      image:"assets/img/product/mi14tpro 1.png"

    },
  ]

}

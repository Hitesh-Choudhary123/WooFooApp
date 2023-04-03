import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(public ls:LoginService,private rs:RegisterService,private router:Router) { }
  @Input()
  restaurantDetails!:any[];
 
  deleteRes(restaurantName:any){
    this.rs.deleteRestaurant(restaurantName).subscribe(()=>alert("restaurant deleted"));
  }

  ngOnInit(): void {
    // console.log(this.restaurantDetails);
  }

  checkout(a:string,b:string){
    this.router.navigateByUrl("/checkout/"+a+"/"+b)
  }

}

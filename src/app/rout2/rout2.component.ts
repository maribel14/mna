import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rout2',
  templateUrl: './rout2.component.html',
  styleUrls: ['./rout2.component.css']
})
export class Rout2Component implements OnInit {

  constructor( private router: Router, ) {
    
   }

  ngOnInit(): void {
  }

  gotoRout(){
    this.router.navigateByUrl('/rout');
  }
}

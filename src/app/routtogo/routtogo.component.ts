import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routtogo',
  templateUrl: './routtogo.component.html',
  styleUrls: ['./routtogo.component.css']
})
export class RouttogoComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  gotoRout2(){
    this.router.navigateByUrl('/rout2');
  }

}

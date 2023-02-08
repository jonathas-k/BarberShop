import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { User } from 'model/user';

ServiceService

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  user = [];
  segId = "overview";

  constructor(private Service: ServiceService, private router:Router, private route:ActivatedRoute) {}


  ngOnInit(): void {
  }
  signUp(data:User): void {
    console.warn(data)
    this.Service.userSignUp(data);
    this.router.navigate(['/home'], {relativeTo: this.route});
  }
}

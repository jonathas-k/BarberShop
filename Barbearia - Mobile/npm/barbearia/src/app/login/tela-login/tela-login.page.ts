import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/cadastro';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.page.html',
  styleUrls: ['./tela-login.page.scss'],
})
export class TelaLoginPage implements OnInit {
  dados: Observable<User[]>

  constructor(private db: ServicesService, private router:Router) { 
  }


  ngOnInit() {
  }

}

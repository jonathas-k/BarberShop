import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/service/services.service';
import { User } from 'src/app/models/cadastro';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-tela-cadas',
  templateUrl: './tela-cadas.page.html',
  styleUrls: ['./tela-cadas.page.scss'],
})
export class TelaCadasPage implements OnInit {
  user = [];
  segId = "overview";

  constructor(private service:ServicesService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
  }

  signUp(data:User): void {
    console.warn(data)
    this.service.userSignUp(data);
  }
}

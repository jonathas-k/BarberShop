import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-hidratacao',
  templateUrl: './tela-hidratacao.page.html',
  styleUrls: ['./tela-hidratacao.page.scss'],
})
export class TelaHidratacaoPage implements OnInit {
  public editMode = false

  constructor() { }

  edit(){
    switch (this.editMode){
      case false:
        this.editMode = true;
        break;

      case true:
        this.editMode = false;
        break;
    }
  }

  ngOnInit() {
  }

}

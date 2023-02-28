import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-depilacao',
  templateUrl: './tela-depilacao.page.html',
  styleUrls: ['./tela-depilacao.page.scss'],
})
export class TelaDepilacaoPage implements OnInit {
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

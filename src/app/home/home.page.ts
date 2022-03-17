import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  hotdog= 0;
  bala= 0;
  refri= 0;
  chocolate= 0;
  soma = 0;
  produtos = "";

  produto = this.produtos;

  constructor() {}

  total(){
    this.soma = 0;
    this.soma += this.hotdog * 5;
    this.soma += this.bala * 0.25;
    this.soma += this.refri * 3.50;
    this.soma += this.chocolate * 2;

    if(this.soma < 0){
      this.soma = 0;
    }
  }

  reset(){
    this.soma = 0;
    this.hotdog = 0;
    this.bala = 0;
    this.refri = 0;
    this.chocolate = 0;
  }

  addHotDog(){
    this.hotdog ++;

    this.total();
  }

  delHotDog(){
    this.hotdog --;

    this.total();
    if(this.hotdog < 0){
      this.hotdog = 0;
    }
  }

  addRefri(){
    this.refri ++;

    this.total();
  }

  delRefri(){
    this.refri --;

    this.total();
    if(this.refri < 0){
      this.refri = 0;
    }
  }

  addBala(){
    this.bala ++;

    this.total();
  }

  delBala(){
    this.bala --;

    this.total();
    if(this.bala < 0){
      this.bala = 0;
    }
  }

  addChoco(){
    this.chocolate ++;

    this.total();
  }

  delChoco(){
    this.chocolate --;

    this.total();
    if(this.chocolate < 0){
      this.chocolate = 0;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from '../service/cadastro.service';


@Component({ 
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
finalizado:any;
  constructor(
    public cadastroservice: CadastroService,
    public router: Router
  ) {}
  ngOnInit() {
  this.b();
  }
  a(){
    this.router.navigate(['a']);
  }
  b(){
    this.finalizado = this.cadastroservice.dai();
  }

}

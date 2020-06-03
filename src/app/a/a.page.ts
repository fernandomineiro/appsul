import { Component, OnInit } from '@angular/core';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from '../service/cadastro.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.page.html',
  styleUrls: ['./a.page.scss'],
})
export class APage implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  valor: any;
  constructor(
    public router: Router,
    public cadastroservice: CadastroService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      data: ['', Validators.required],
      categoria: ['', Validators.required],
      aceito: [false, Validators.requiredTrue]
  });

  
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    
  //  this.cadastroservice.pegavalor(this.registerForm.value);
     console.log(this.registerForm.value);
    this.cadastroservice.enviar(this.registerForm.value).subscribe(response=>{
      if(response['0'].length == 0){
        this.cadastroservice.pegavalor(this.registerForm.value);
        this.router.navigate(['b']);
      }else{
        this.valor = true;
        
      }
     });
    // display form values on success
    //this.router.navigate(['b']);
  }
}

import { Component, OnInit } from '@angular/core';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-a',
  templateUrl: './a.page.html',
  styleUrls: ['./a.page.scss'],
})
export class APage implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(
    public router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      data: ['', Validators.required],
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

    // display form values on success
    this.router.navigate(['b']);
  }
}

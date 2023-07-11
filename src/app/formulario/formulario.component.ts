import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

interface UserModel{
  email: FormControl< string | null>,
  password: FormControl< string | null>,
}
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})



export class FormularioComponent {
  
  emailControl = new FormControl('',[Validators.email]);
  passwordControl = new FormControl('',[Validators.required, Validators.minLength(6)]);
  
  
  userModel: FormGroup<UserModel> = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
  })
  constructor(){

    console.log(this.passwordControl)
  }
}

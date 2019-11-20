import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cpf',
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.css']
})
export class CpfComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  formulario = this.fb.group({
    cpf: ['', Validators.required]
  });

  ngOnInit() {
  }

}

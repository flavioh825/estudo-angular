import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  templateUrl: './diretiva.component.html',
  styleUrls: ['./diretiva.component.css']
})
export class DiretivaComponent implements OnInit {

  usuarios: Object[] = [
    { id: 1, nome: 'Alexandre' },
    { id: 2, nome: 'Ana' },
    { id: 3, nome: 'Amadeu' },
    { id: 4, nome: 'Gustavo' },
    { id: 5, nome: 'Jobersom' },
    { id: 6, nome: 'Romeu' },
  ];

  constructor() { }

  ngOnInit() {
  }

}

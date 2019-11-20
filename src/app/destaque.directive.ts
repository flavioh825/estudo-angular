import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDestaque]'
})
export class DestaqueDirective implements OnInit {

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener('mouseover') aoPassarMouse() {
    this.corDeFundo = 'gray';
  }

  @HostListener('mouseout') aoRemoverMouse() {
    this.corDeFundo = 'transparent';
  }

  constructor() { }

  ngOnInit() {
    this.corDeFundo = 'red';
  }

}

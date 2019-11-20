import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appCpf]'
})
export class CpfDirective {

  constructor(private ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event']) onKeyDown(event) {
    let num = event;

    if(num) {
      num = num.toString();
      num = num.replace(/\D/g, "");

      switch (num.length) {
        case 11:
          num = num.replace(/(\d+)(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
          break;
        case 14:
            num = num.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d+)/, "$1.$2.$3/$4-$5");
            break;
      }
    }
    return this.ngControl.valueAccessor.writeValue(num);
  }
}

import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appAddStyleOnClick]'
})
export class AddStyleOnClickDirective {
  isChange: boolean = false;
  size: string = '24px';
  color: string = '#2C535A';

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  @HostListener("click", ['$event']) onMouseEnter(event: MouseEvent) {
    this.isChange = !this.isChange;
    if(this.isChange) {
      this.changeStyle(this.size, this.color);
    }
    if(!this.isChange) {
      this.changeStyle(null, null);
    }
  }

  changeStyle(size, color) {
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'font-size',
      size
    );
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'border-color',
      color
    );
  }

}
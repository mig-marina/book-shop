import { Directive, ElementRef, Renderer2, OnChanges, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appAddStyleOnClick]'
})
export class AddStyleOnClickDirective {
  @Input('appAddStyleOnClick') color: string;
  isChange = false;
  size = '24px';

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  @HostListener('click', ['$event']) onMouseEnter(event: MouseEvent): void {
    this.isChange = !this.isChange;
    this.changeStyle(this.isChange ? this.size : null, this.color);
  }

  changeStyle(size, color): void {
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

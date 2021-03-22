import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCartItemOnHover]'
})
export class CartItemOnHoverDirective {

  colorBackgroundOnHover = '#DDDDDD';
  colorBackground = 'transparent';

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  @HostListener('mouseenter', ['$event']) onMouseEnter(event: MouseEvent): void {
    this.isHover(this.colorBackgroundOnHover);
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(event: MouseEvent): void {
    this.isHover(this.colorBackground);
  }

  isHover(color: string): void {
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      color
    );
  }

}

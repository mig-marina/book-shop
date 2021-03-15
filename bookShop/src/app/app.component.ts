import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  prefixNameShop: string = 'the';
  nameShop: string = 'Book';
  descriptionNameShop: string = "your bookstore";
  color: string = '#2C535A';

  @ViewChild("appTitle", {static: false})
  description: ElementRef;

   ngAfterViewInit() {
     this.description.nativeElement.textContent = this.prefixNameShop + this.nameShop;
   }

}

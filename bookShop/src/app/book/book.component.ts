import { Component, OnInit } from '@angular/core';

import { IBook } from './../ibook';

enum Categories {
  Detective = 'Detective',
  History = 'History',
  Scientific = 'Scientific',
  Fantasy = 'Fantasy',
  Children = 'Children',
  Adventures = 'Adventures',
  Horror = 'Horror'
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  post:IBook =
      {
        name: 'The ABC Murders',
        description: 'Agatha Christie. "Murder by Alphabet" is a novel where Agatha Christie throws a new riddle to her favorite Hercule Poirot - letters and a railway directory, according to the alphabet of which murders take place in different cities. A lover of details, an attentive listener and observer, the great detective removes suspicion from the innocent and unravels a complex matter.',
        price: 23,
        category: Categories.Detective,
        createDate: 2019,
        isAvailable: true,
      }
    count:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onBuy() {
    const comment = document.querySelector('.comment-buy');
    comment.textContent = 'item in cart';
    this.count = 1;
  }

}

import { IBook } from './../../ibook';

enum Categories {
  Detective = 'Detective',
  History = 'History',
  Scientific = 'Scientific',
  Fantasy = 'Fantasy',
  Children = 'Children',
  Adventures = 'Adventures',
  Horror = 'Horror'
}

export let books:IBook[] = [
    {
      name: 'The ABC Murders',
      description: 'Agatha Christie. "Murder by Alphabet" is a novel where Agatha Christie throws a new riddle to her favorite Hercule Poirot - letters and a railway directory, according to the alphabet of which murders take place in different cities. A lover of details, an attentive listener and observer, the great detective removes suspicion from the innocent and unravels a complex matter.',
      price: 23,
      category: Categories.Detective,
      createDate: 2019,
      isAvailable: true,
    },
    {
      name: 'The ABC Murders - 2',
      description: 'Agatha Christie. "Murder by Alphabet" is a novel where Agatha Christie throws a new riddle to her favorite Hercule Poirot - letters and a railway directory, according to the alphabet of which murders take place in different cities. A lover of details, an attentive listener and observer, the great detective removes suspicion from the innocent and unravels a complex matter.',
      price: 23,
      category: Categories.Detective,
      createDate: 2019,
      isAvailable: true,
    },
    {
      name: 'The ABC Murders - 3',
      description: 'Agatha Christie. "Murder by Alphabet" is a novel where Agatha Christie throws a new riddle to her favorite Hercule Poirot - letters and a railway directory, according to the alphabet of which murders take place in different cities. A lover of details, an attentive listener and observer, the great detective removes suspicion from the innocent and unravels a complex matter.',
      price: 23,
      category: Categories.Detective,
      createDate: 2019,
      isAvailable: true,
    },
]

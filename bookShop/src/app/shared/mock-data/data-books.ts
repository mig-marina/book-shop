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
      id: 1,
      name: 'The Golem\'s Eye',
      description: 'Jonathan Stroud. A thrilling sequel to the best-selling Amulet of Samarkand, The Golem’s Eye is a roller-coaster ride of magic, adventure, and political skullduggery, in which the fates of Nathaniel, Bartimaeus, and Kitty explosively collide.',
      price: 37,
      category: Categories.Fantasy,
      createDate: 2019,
      isAvailable: true,
      isShow: true,
    },
    {
      id: 2,
      name: 'The Ring of Solomon',
      description: 'Jonathan Stroud. A spellbinding addition to Jonathan Stroud’s New York Times bestselling Bartimaeus audiobooks, The Ring of Solomon brims with dazzling wit, unforgettable characters, and powerful themes of freedom and slavery, with or without magical bonds.',
      price: 23,
      category: Categories.Fantasy,
      createDate: 2017,
      isAvailable: false,
      isShow: true,
    },
    {
      id: 3,
      name: 'The ABC Murders',
      description: 'Agatha Christie. "Murder by Alphabet" is a novel where Agatha Christie throws a new riddle to her favorite Hercule Poirot - letters and a railway directory, according to the alphabet of which murders take place in different cities. A lover of details, an attentive listener and observer, the great detective removes suspicion from the innocent and unravels a complex matter.',
      price: 23,
      category: Categories.Detective,
      createDate: 2019,
      isAvailable: true,
      isShow: true,
    },
    {
      id: 4,
      name: 'No Ordinary Time: Franklin and Eleanor Roosevelt: The Home Front in World War II',
      description: 'Doris Kearns Goodwin. The Pulitzer Prize-winning History Without Ordinary Time chronicles one of the brightest and most revolutionary periods in US history. With an extraordinary collection of details - Roosevelt\'s marriage and partnership, Eleanor\'s life as First Lady, Roosevelt\'s White House and its impact on America and the world at war.',
      price: 54,
      category: Categories.History,
      createDate: 2017,
      isAvailable: false,
      isShow: true,
    },
    {
      id: 5,
      name: 'Killing Lincoln: The Shocking Assassination that Changed America Forever',
      description: 'Martin Dugard. A gripping historical account of the events surrounding the assassination of Abraham Lincoln. Tells about one of the most dramatic stories in American history - how one shot changed the country forever. In the spring of 1865, the bloody saga of the American Civil War finally comes to an end after a series of increasingly harrowing battles.',
      price: 70,
      category: Categories.History,
      createDate: 2019,
      isAvailable: true,
      isShow: true,
    }
]

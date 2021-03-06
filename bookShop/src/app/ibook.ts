enum Categories {
  Detective = 'Detective',
  History = 'History',
  Scientific = 'Scientific',
  Fantasy = 'Fantasy',
  Children = 'Children',
  Adventures = 'Adventures',
  Horror = 'Horror'
}

export interface IBook {
  id: number;
  name: string;
  author: string;
  description: string;
  price: number;
  category: Categories;
  createDate: number;
  isAvailable: boolean;
  isShow: boolean;
}

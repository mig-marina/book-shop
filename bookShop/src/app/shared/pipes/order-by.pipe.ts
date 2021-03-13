import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(allData: any[], value: string, isDescending: boolean) {
    if(value === '') {
      return allData;
    }
    if(value === 'count' && isDescending) {
      return allData.sort((a, b) => {return b.count - a.count});
    } else if(value === 'count' && !isDescending) {
      return allData.sort((a, b) => {return a.count - b.count});
    }
    if(value === 'price' && isDescending) {
      return allData.sort((a, b) => {return b.item.price * b.count - a.item.price * a.count});
    } else if(value === 'price' && !isDescending) {
      return allData.sort((a, b) => {return a.item.price * a.count - b.item.price * b.count});
    }
    if(value === 'name' && isDescending) {
      return allData.sort((a, b) => a.item.name > b.item.name ? 1 : -1);
    } else if(value === 'name' && !isDescending) {
      return allData.sort((a, b) => b.item.name > a.item.name ? 1 : -1);
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, term: string) {
    if (value.length == 0 || term == ' ' || term == '') return value;
    const foods = [];
    for (const food of value) if (food['name'] == term) foods.push(food);
    return foods;
  }

}

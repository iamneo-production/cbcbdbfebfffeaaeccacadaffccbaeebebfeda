import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchText: string = '';
  list: any[] = [];
  todayFood: any[] = [];
  count: [] = [];
  totalCal: number = 0;
  addItem(item: String, cal: String, imageUrl: String) {
    this.list.push({
      id: this.list.length,
      name: item,
      calories: cal,
      image: imageUrl,
    });
    console.log(this.list);
  }
  addFood(item: string, cal: string, num: string) {
    for (let i = 0; i < +num; i++) {
      this.todayFood.push({ food: item, calories: cal });
      this.totalCal += +cal;
    }
  }

  removeFood(id: number) {
    this.todayFood.splice(id, 1);
  }
}

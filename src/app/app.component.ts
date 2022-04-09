import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  todoData: { userId: number, id: number, title: string, completed: string }[] = [];
  showData: boolean = false;

  public searchText: any;

  async getDataFromAPI() {
    this.showData = true
    var api = "https://jsonplaceholder.typicode.com/todos";
    await axios.get(api)
      .then((data) => {
        const data2: any = data.data
        this.todoData = data2
      })
    console.log("todo", this.todoData)
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.sass'],
})
export class SmartComponent implements OnInit {
  kittyData$ = [];
  kittyArrayOne = [];
  kittyArrayTwo = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getKitty().subscribe((data) => {
      this.kittyData$ = data as any;
      this.splitArr();
    });
  }

  splitArr() {
    let i = 0;
    this.kittyData$.forEach((element) => {
      if (i <= 9) {
        this.kittyArrayOne.push(element);
      } else {
        this.kittyArrayTwo.push(element);
      }
      i++;
    });
    console.log(this.kittyArrayOne);
    console.log(this.kittyArrayTwo);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}

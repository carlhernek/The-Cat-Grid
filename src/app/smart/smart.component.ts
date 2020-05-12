import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.sass'],
})
export class SmartComponent implements OnInit {
  kittyData$ = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getKitty().subscribe((data) => {
      this.kittyData$ = data as any; // Ask yngling about what arguments you can pass here?
      console.log(this.kittyData$);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  Data;
  launchSuccess;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.Init();
  }

  Init() {
    this.getApiData();
  }

  //To get data
  getApiData() {
    this.homeService.getApiData().subscribe(
      data => {
        this.Data = data;
      })
  }
}

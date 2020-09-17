import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { CardComponent } from './card/card.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements AfterViewInit {
  @ViewChild(CardComponent)
  private cardComponent: CardComponent;
  public year: string;
  public launchSuccess: string;
  public landSuccess: string;
  
  launchYears = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];

  success = ["true", "false"];

  constructor(
    private homeService: HomeService,
    private location: Location
  ) { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    //setTimeout(() => this.getApiData = () => this.cardComponent.getApiData, 1000);
  }

  // filter functionality
  filter(year, launchSuccess, landSuccess) {
    if (year) {
      this.year = year;
    }
    if (launchSuccess) {
      this.launchSuccess = launchSuccess;
    }
    if (landSuccess) {
      this.landSuccess = landSuccess;
    }
    this.homeService.getData(this.year, this.launchSuccess, this.landSuccess);
    this.cardComponent.getApiData();
  }
}


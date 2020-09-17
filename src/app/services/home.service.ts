import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  baseUrl = environment.baseUrl;
  url;

  constructor(private http: HttpClient) { }

  getData = async (yearFilter, launch_success, land_success) => {
    this.url = this.baseUrl;
    if (yearFilter) {
      this.url = this.url + `&launch_year=${yearFilter}`;
    }

    if (launch_success) {
      this.url = this.url + `&launch_success=${launch_success}`;
    }

    if (land_success) {
      this.url = this.url + `&land_success=${land_success}`;
    }
  };

  getApiData() {
    const url = this.url || this.baseUrl;
    return this.http.get(url);

  }
  
  getUpdatedUrl() {
    return this.url;
  }
}
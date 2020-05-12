import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // import Http client into the service then add constructor private httpClient: HttpClient

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  public getKitty() {
    return this.httpClient.get(
      `https://api.thecatapi.com/v1/images/search?limit=49`
    );
  }
}

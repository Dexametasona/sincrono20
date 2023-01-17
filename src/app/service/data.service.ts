import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {
  url='https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get<any>(this.url);
  }

  ngOnInit(): void {
    
  }
}

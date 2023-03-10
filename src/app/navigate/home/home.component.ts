import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  datos!:any[]
  constructor(private data:DataService) { }

  mostrar(){
    this.data.getData().subscribe(x=>this.datos=x)
  }
  ngOnInit(): void {
  }
}

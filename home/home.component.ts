import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  photo: String="https://cdn-icons-png.flaticon.com/512/2098/2098402.png";
  constructor() {}
  ngOnInit () {}

}

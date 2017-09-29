import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  slides: Array<any> = [];
  slogan: Array<String> = [];

  ngOnInit() {
  }
}

import {Component} from '@angular/core';

@Component({
  selector: 'sd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  slides: Array<any> = [];
  slogan: Array<String> = [
    '免费简约的问卷系统',
    '简单 好用 在线调查网站',
    '多方式创建编辑问卷'
  ];

  constructor() {
    for (let i = 0; i < 3; i++) {
      this.addSlide(i);
    }
  }

  addSlide(idx: number) {
    this.slides.push({
      image: `../assets/img/home/banner_0${idx + 1}.jpg`,
      text: this.slogan[idx]
    });
  }
}

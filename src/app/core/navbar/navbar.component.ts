import {Component} from '@angular/core';

@Component({
  selector: 'sd-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  navList_left: Array<string> = ['首页', '我的问卷', '帮助'];
  navList_right: Array<string> = ['登录', '注册', '创建新问卷'];
}

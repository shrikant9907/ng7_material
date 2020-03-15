import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuList: any;

  title = 'ngmaterial';

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
    this.menuList = [
      {
        name: 'Home',
        path: '/home'
      },
      {
        name: 'Login',
        path: '/login'
      },
      {
        name: 'Register',
        path: '/register'
      }
    ];
  }

  menuNavigate(item, i) {
    this.router.navigate([item.path]);
  }
}

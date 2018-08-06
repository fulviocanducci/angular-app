
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { User } from '../user/user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>;
  user: User;

  constructor(private userService: UserService, 
    private router: Router) {
    this.user$ = this.userService.getUser();
    this.user$.subscribe(user => {
      this.user = (user as User);
    })
  }

  ngOnInit(): void {

  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}

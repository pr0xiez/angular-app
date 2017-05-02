import { Component, OnInit } from '@angular/core'

import { User } from './shared/user.model'
import { UserService } from './shared/user.service'

@Component({
  selector: 'app-root',
  template: `
  <pre>{{ users | json }}</pre>
  <form>
    <label>
      Username:
      <input type="text" name="name" />
    </label><br><br>
    <label>
      Password:
      <input type="text" name="name" />
    </label><br><br>
    <input type="submit" value="Submit" />
  </form>
  `,
  styleUrls: ['./login.component.css'],
  providers: []
})

export class LoginComponent implements OnInit {
  users: User[] = []

  constructor(private userService: UserService) {}
  
  ngOnInit() {
    this.userService.getUsers()
      .then(users => this.users = users)
  }
}

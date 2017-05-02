import { Component, OnInit } from '@angular/core'

import { User, UserService } from './shared'

@Component({
  selector: 'app-root',
  template: `
  <pre>{{ heroes | json }}</pre>
  <form>
    <label>
      Username:
      <input type="text" name="name" />
    </label>
    <label>
      Password:
      <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />
  </form>
  `,
  styleUrls: ['./login.component.css'],
  providers: []
})

export class LoginComponent {
  
}

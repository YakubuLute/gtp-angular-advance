import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterOutlet } from '@angular/router'
import { UserComponent } from './component/user/user.component'
import { User } from './types/types'
import { UserType } from './enum/user.enum'
import { NgFor } from '@angular/common'
import { AvatarComponent } from "./component/avatar/avatar.component";

const BASE_URL = 'https://api.github.com/users'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, UserComponent, NgFor, AvatarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'advanced-phase'
  show: boolean = true
  profile: User[] = [
    {
      id: 0,
      login: '',
      avatar_url: '',
      url: '',
      type: UserType.user
    }
  ]

  toggleShow (value: boolean): boolean {
    return (this.show = !value)
  }
  ngOnInit () {
    fetch(BASE_URL)
      .then((data: any) => data.json())
      .then((response: User[]) => {
        this.profile = response
        console.log('Profile', this.profile)
      })
      .catch((error: any) => console.log(error.message))
  }
}

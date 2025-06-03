import { Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterOutlet } from '@angular/router'
import { UserComponent } from './component/user/user.component'
import { User } from './Models/types/types'
import { NgFor } from '@angular/common'
import { AvatarComponent } from './component/avatar/avatar.component'
import { UserType } from './Models/enum/user.enum'
import { ProductFormComponent } from './component/product-form/product-form.component'
import { ProductComponent } from './component/product/product.component'

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    UserComponent,
    NgFor,
    AvatarComponent,
    ProductComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  readonly BASE_URL = 'https://api.github.com/users'
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
    this.show = !value
    return this.show
  }
  ngOnInit () {
    fetch(this.BASE_URL)
      .then((data: any) => data.json())
      .then((response: User[]) => {
        this.profile = response
        console.log('Profile', this.profile)
      })
      .catch((error: any) => console.log(error.message))
  }
}

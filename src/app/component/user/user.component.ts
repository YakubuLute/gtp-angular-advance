import { Component, Input } from '@angular/core'
import { AvatarComponent } from '../avatar/avatar.component'
import { User } from '../../types/types'
import { UserType } from '../../enum/user.enum'

@Component({
  selector: 'app-user',
  imports: [AvatarComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() profile: User =
    {
      id: 0,
      login: '',
      avatar_url: '',
      url: '',
      type: UserType.user
    }
  
}

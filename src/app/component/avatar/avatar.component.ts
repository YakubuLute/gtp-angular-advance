import { Component, Input } from '@angular/core'
import { User } from '../../Models/types/types'
import { UserType } from '../../Models/enum/user.enum'

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})
export class AvatarComponent {
  @Input() profile: User = {
    id: 0,
    login: '',
    avatar_url: '',
    url: '',
    type: UserType.user
  }
}

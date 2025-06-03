import { Component, Input } from '@angular/core'
import { User } from '../../Models/types/types'
import { UserType } from '../../Models/enum/user.enum'

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() profile!: User
}

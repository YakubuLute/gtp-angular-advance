import { Component, Input } from '@angular/core'
import { User } from '../../Models/types/types'

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() profile!: User
}

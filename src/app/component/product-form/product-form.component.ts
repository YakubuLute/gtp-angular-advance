import { FormsModule } from '@angular/forms'
// child.component.ts
import { Component, Output, EventEmitter } from '@angular/core' // ← Import needed
import { IProducts } from '../../Models/types/types'

@Component({
  selector: 'app-product-form',
  styleUrl: './product-form.component.css',
  imports: [FormsModule], // <- Import FormsModule for ngModel
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent {
  @Output() productAdded = new EventEmitter<IProducts>() // <- Creates custom event
  @Output() formCancelled = new EventEmitter<void>() // <- <void> means no data sent

  productName = ''
  price = 0

  onSubmit () {
    const product: IProducts = {
      name: this.productName,
      price: this.price
    }
    this.productAdded.emit(product) // ← Send data to parent
    this.resetForm()
  }

  onCancel () {
    this.formCancelled.emit() // ← Send event (no data)
    this.resetForm()
  }

  private resetForm () {
    this.productName = ''
    this.price = 0
  }
}

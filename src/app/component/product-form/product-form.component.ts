// child.component.ts
import { Component, Output, EventEmitter } from '@angular/core' // ← Import needed
import { IProducts } from '../../Models/types/types'

@Component({
  selector: 'app-product-form',
  styleUrl: './product-form.component.css',
  templateUrl: './product-form.component.html',
  template: `
    <form (ngSubmit)="onSubmit()">
      <input [(ngModel)]="productName" placeholder="Product Name" required />
      <input [(ngModel)]="price" type="number" placeholder="Price" required />
      <button type="submit">Add Product</button>
      <button type="button" (click)="onCancel()">Cancel</button>
    </form>
  `
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

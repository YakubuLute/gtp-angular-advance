// parent.component.ts

import { Component } from '@angular/core'
import { ProductFormComponent } from '../product-form/product-form.component'
import { IProducts } from '../../Models/types/types'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-product',
  imports: [ProductFormComponent, FormsModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: IProducts[] = []
  showForm = false

  onProductAdded (product: IProducts) {
    console.log('Product added:', product)
    // Add a unique ID to the product
    this.products.push({ ...product, id: Date.now() })
    this.showForm = false
  }

  onFormCancelled () {
    this.showForm = false
  }

  showAddForm () {
    this.showForm = true
  }
}

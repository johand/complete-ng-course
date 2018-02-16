import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
    @Input('product') product: Product;
    @Input('show-actions') showActions = true;
    // @Input('image') image = this.product.value.imageUrl;
    constructor() { }

    ngOnInit() {
    }

}

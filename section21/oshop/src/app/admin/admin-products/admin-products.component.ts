import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../product.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../models/product';

@Component({
    selector: 'app-admin-products',
    templateUrl: './admin-products.component.html',
    styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
    products: Product[];
    filteredProducts: Product[];
    subscription: Subscription;

    constructor(private productService: ProductService) {
        this.subscription = this.productService.getAll()
            .map(actions => {
                return actions.map(action => ({
                    key: action.key, value: action.payload.val()
                }));
            })
            .subscribe(products => this.filteredProducts = this.products = products);
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    filter(query: string) {
        this.filteredProducts = (query) ?
            this.products.filter(p =>
                p.value.title.toLowerCase().includes(query.toLowerCase())) : this.products;
    }
}

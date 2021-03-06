import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import 'rxjs/add/operator/switchMap';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    products: Product[] = [];
    filteredProducts: Product[] = [];
    category: string;
    cart$: Observable<ShoppingCart>;

    constructor(
        private productService: ProductService,
        private route: ActivatedRoute,
        private shoppingCartService: ShoppingCartService) { }

    async ngOnInit() {
        this.cart$ = await this.shoppingCartService.getCart();
        this.populateProducts();
    }

    private populateProducts() {
        this.productService.getAll()
            .map(actions => {
                return actions.map(action => ({
                    key: action.key, ...action.payload.val()
                }));
            })
            .switchMap(products => {
                this.products = products;
                return this.route.queryParamMap;
            })
            .subscribe(params => {
                this.category = params.get('category');
                this.applyFilter();
            });
    }

    private applyFilter() {
        this.filteredProducts = (this.category) ?
            this.products.filter(p => p.category === this.category) :
            this.products;
    }

}

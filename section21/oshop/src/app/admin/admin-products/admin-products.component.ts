import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../product.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../models/product';
import { DataTableResource } from 'angular5-data-table';

@Component({
    selector: 'app-admin-products',
    templateUrl: './admin-products.component.html',
    styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
    products: Product[];
    filteredProducts: Product[];
    subscription: Subscription;
    tableResource: DataTableResource<Product>;
    items: Product[] = [];
    itemCount: number;

    constructor(private productService: ProductService) {
        this.subscription = this.productService.getAll()
            .map(actions => {
                return actions.map(action => ({
                    key: action.key, value: action.payload.val()
                }));
            })
            .subscribe(products => {
                this.filteredProducts = this.products = products;
                this.initializeTable(products);
            });
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private initializeTable(products: Product[]) {
        this.tableResource = new DataTableResource(products);
        this.tableResource.query({ offset: 0 })
            .then(items => this.items = items);
        this.tableResource.count()
            .then(count => this.itemCount = count);
    }

    filter(query: string) {
        this.filteredProducts = (query) ?
            this.products.filter(p =>
                p.value.title.toLowerCase().includes(query.toLowerCase())) : this.products;
    }

    reloadItems(params) {
        if (!this.tableResource) { return; }

        this.tableResource.query(params)
            .then(items => this.items = items);
    }
}

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Product } from './models/product';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { ShoppingCart } from './models/shopping-cart';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShoppingCartService {

    constructor(private db: AngularFireDatabase) { }

    private create() {
        return this.db.list('/shopping-carts').push({
            dateCreated: new Date().getTime()
        });
    }

    async getCart(): Promise<Observable<ShoppingCart>> {
        let cartId = await this.getOrCreateCartId();
        return this.db.object('/shopping-carts/' + cartId)
            .snapshotChanges()
            .map(x => {
                const key = x.key;
                const items = x.payload.val().items;
                return new ShoppingCart(items);
            });
    }

    private getItem(cartId: string, productId: string) {
        return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
    }

    private async getOrCreateCartId(): Promise<string> {
        let cartId = localStorage.getItem('cartId');
        if (cartId) { return cartId; }

        let result = await this.create();
        localStorage.setItem('cartId', result.key);
        return result.key;
    }

    async addToCart(product: Product) {
        this.updateItemQuantity(product, 1);
    }

    async removeFromCart(product: Product) {
        this.updateItemQuantity(product, -1);
    }

    private async updateItemQuantity(product: Product, change: number) {
        let cartId = await this.getOrCreateCartId();
        let item$ = this.getItem(cartId, product.key);

        item$.snapshotChanges().take(1)
            .subscribe(item => {
                item$.update({
                    product: {
                        title: product.title,
                        category: product.category,
                        price: product.price,
                        imageUrl: product.imageUrl
                    }, quantity: (item.payload.val() ? item.payload.val().quantity : 0) + change

                });

            });
    }
}

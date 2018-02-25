import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from './models/product';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Injectable()
export class ShoppingCartService {

    constructor(private db: AngularFireDatabase) { }

    private create() {
        return this.db.list('/shopping-carts').push({
            dateCreated: new Date().getTime()
        });
    }

    private getCart(cartId: string) {
        return this.db.object('/shopping-carts/' + cartId);
    }

    private getItem(cartId: string, productId: string) {
        return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
    }

    private async getOrCreateCartId() {
        let cartId = localStorage.getItem('cartId');
        if (cartId) { return cartId; }

        let result = await this.create();
        localStorage.setItem('cartId', result.key);
        return result.key;
    }

    async addToCart(product: Product) {
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
                    }, quantity: (item.payload.val().quantity || 0) + 1

                });

            });
    }
}

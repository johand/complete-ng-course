import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
    selector: 'bs-navbar',
    templateUrl: './bs-navbar.component.html',
    styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
    appUser: AppUser;
    shoppingCartItemCount: number;

    constructor(private auth: AuthService,
        private shoppingCartService: ShoppingCartService) {

    }

    async ngOnInit() {
        this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
        let cart$ = await this.shoppingCartService.getCart();

        cart$
            .snapshotChanges()
            .subscribe(cart => {
                const itemsPayload = cart.payload.val().items;
                this.shoppingCartItemCount = 0;

                for (let productId in itemsPayload) {
                    this.shoppingCartItemCount += itemsPayload[productId].quantity;
                }
            });

    }

    logout() {
        this.auth.logout();
    }

}

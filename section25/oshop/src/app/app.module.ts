import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular5-data-table';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CustomFormsModule } from 'ng2-validation';
import { SharedModule } from 'shared/shared.module';

import { environment } from '../environments/environment';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingModule } from './shopping/shopping.module';


@NgModule({
    declarations: [
        AppComponent,
        BsNavbarComponent,
        HomeComponent,
        LoginComponent
    ],
    imports: [
        AdminModule,
        SharedModule,
        ShoppingModule,
        CustomFormsModule,
        BrowserModule,
        DataTableModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        NgbModule.forRoot(),
        RouterModule.forRoot([
            { path: '', component: ProductsComponent },
            { path: 'login', component: LoginComponent },
        ])
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

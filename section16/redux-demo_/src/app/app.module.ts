import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from 'app/store';

@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent,
        TodoDashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgReduxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
        var enhancers = isDevMode() ? [devTools.enhancer()] : [];
        ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
    }
}

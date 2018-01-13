import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './store';
import { INCREMENT } from './actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';
    @select('counter') count;
    @select(['messaging', 'newMessages']) newMessages;
    @select((s: IAppState) => s.messaging.newMessages) newMessagesCount;


    constructor(private ngRedux: NgRedux<IAppState>) {
        // ngRedux.subscribe(() => {
        //     const store = ngRedux.getState();
        //     this.counter = store.counter;
        // });
    }

    increment() {
        this.ngRedux.dispatch({ type: INCREMENT });
    }
}

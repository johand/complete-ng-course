import { routes } from './app.routes';
import { UsersComponent } from 'app/users/users.component';

describe('routes', () => {
    it('should cotain a route for /users', () => {
        expect(routes).toContain({ path: 'users', component: UsersComponent });
    });
});

import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NavComponent } from './nav/nav.component';
import { SignUp } from './service/model/signup';
import { SigninComponent } from '../signin/signin.component';

export const routes: Routes = [
    {
        path: 'user', component: UserComponent
    },
    {
        path: 'nav', component: NavComponent
    },
    {
        path: 'signup', component: SigninComponent
    }
];

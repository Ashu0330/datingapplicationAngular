import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { NavComponent } from './nav/nav.component';

export const routes: Routes = [
    {
        path:'user',component:UserComponent
    },
    {
        path:'nav',component:NavComponent
    
    }
];

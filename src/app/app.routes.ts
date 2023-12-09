import { Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'characters',
        component: CharacterListComponent
    },
    {
        path: 'characters/:name',
        component: CharacterListComponent
    },
    {
        path: 'character/:id',
        component: CharacterDetailComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];

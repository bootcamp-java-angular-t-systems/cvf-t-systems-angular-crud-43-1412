import { Routes } from '@angular/router';
import { CharacterListComponent } from './character/character-list/character-list.component';
import { CharacterDetailComponent } from './character/character-detail/character-detail.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AddCharacterComponent } from './character/add-character/add-character.component';
import { UpdateCharacterComponent } from './character/update-character/update-character.component';

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
        path: 'add-character',
        component: AddCharacterComponent
    },
    {
        path: 'update-character/:id',
        component: UpdateCharacterComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];

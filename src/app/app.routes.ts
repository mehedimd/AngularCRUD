import { Routes } from '@angular/router';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';

export const routes: Routes = [
    {path:'', redirectTo: 'categories', pathMatch: 'full'},
    {path:'categories', component: CategoryListComponent},
    {path: 'categories/:id', component: CategoryDetailsComponent},
    {path: 'add',component: AddCategoryComponent}
];

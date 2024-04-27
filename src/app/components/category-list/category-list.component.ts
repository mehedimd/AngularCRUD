import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { FormsModule } from '@angular/forms';
import { CategoryDetailsComponent } from '../category-details/category-details.component';
import { RouterLink } from '@angular/router';





@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [FormsModule,CategoryDetailsComponent,RouterLink],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent  implements OnInit{
  categories?: Category[];
  currentCategory: Category = {};
  currentIndex = -1;
  name = '';
  constructor(private categoryService: CategoryService){}
  ngOnInit(): void {
    this.retriveCategories();
  }
  retriveCategories(): void{
    this.categoryService.getAll()
    .subscribe({
      next: (data) => {
        this.categories = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
  refreshList(): void{
    this.retriveCategories();
    this.currentCategory = {};
    this.currentIndex = -1;
  }
  setActiveCategory(category: Category, index: number): void{
    this.currentCategory = category;
    this.currentIndex = index;
  }
  searchName(): void{
    this.currentCategory = {};
    this.currentIndex = -1
    this.categoryService.findByName(this.name)
    .subscribe({
      next: (data) => {
        this.categories = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}

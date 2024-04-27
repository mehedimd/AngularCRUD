import { Component } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  category : Category = {
    categoryName: ''
  }
  submitted = false;

  constructor(private categoryService: CategoryService){}

  saveCategory(): void{
    const data = {
      categoryName: this.category.categoryName
    }
    this.categoryService.create(data)
    .subscribe({
      next: (res) =>{
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }
  newCategory(): void{
    this.submitted = false;
    this.category = {
      categoryName: ''
    }
  }
}

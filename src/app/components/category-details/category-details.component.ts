import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.css'
})
export class CategoryDetailsComponent implements OnInit{
  @Input() viewMode = false;
  @Input() currentCategory: Category = {
    categoryName: ''
  }
  message = '';
  constructor(
    private categoryService : CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    if(!this.viewMode){
      this.message = '';
      this.getCategory(this.route.snapshot.params["id"]);
    }
  }
  getCategory(id: any):void{
    this.categoryService.get(id)
    .subscribe({
      next: (data) => {
        this.currentCategory = data;
        console.log(data);
      },
      error: (e)=> console.error(e)
    });
  }
  updatePublished(status: boolean): void{
    const data = {
      name : this.currentCategory.categoryName
    };
    this.message = '';
    this.categoryService.update(this.currentCategory.categoryId,data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.message = res.message? res.message: 'The status was updated successfully!'
      },
      error: (e) => console.error(e)
    })
  }
  updateCategory(): void{
    this.message = '';
    this.categoryService.update(this.currentCategory.categoryId, this.currentCategory)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.message = res.message ? res.message: 'This category was updated successfully!'
      },
      error: (e) => console.log(e)
    })
  }
  deleteCategory(): void{
    this.categoryService.delete(this.currentCategory.categoryId)
    .subscribe({
      next: (res) => {
        console.log(res)
        this.router.navigate(['/categories'])
      },
      error: (e) => console.error(e)
    })
  }
}

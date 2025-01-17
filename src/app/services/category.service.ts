import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

const baseUrl = 'https://localhost:7013/api/categories'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }

  getAll(): Observable<Category[]>{
    return this.http.get<Category[]>(baseUrl);
  }
  get(id : any): Observable<Category>{
    return this.http.get<Category>(`${baseUrl}/${id}`)
  }
  create(data : any): Observable<any>{
    return this.http.post(baseUrl,data)
  }
  update(id : any, data: any): Observable<any>{
    return this.http.put(`${baseUrl}/${id}`,data);
  }
  delete(id:any): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }
  findByName(name : any): Observable<Category[]>{
    return this.http.get<Category[]>(`${baseUrl}?name=${name}`);
  }
}

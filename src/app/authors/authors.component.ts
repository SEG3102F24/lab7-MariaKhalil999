import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {
  authorId: string = '';
  authorInfo: any;
  message: string = '';

  constructor(private http: HttpClient) {}

  onSearch() {
    this.http.get(`/api/authors/${this.authorId}`).subscribe(
      (data) => {
        this.authorInfo = data;
        this.message = '';
      },
      (error) => {
        this.authorInfo = null;
        this.message = 'Author not found';
      }
    );
  }

}

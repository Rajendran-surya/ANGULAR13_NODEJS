import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses: Course[] = [];
  course: Partial<Course> = {}; // For creating or updating courses
  file: File | null = null;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  private loadCourses(): void {
    const username = localStorage.getItem('username');
    if (!username) {
      console.error('Username is not available in localStorage');
      return;
    }

    this.userService.getCourses(username).subscribe({
      next: (response: { courses: Course[] }) => {
        this.courses = response.courses;
        console.log('Courses:', this.courses); // Logs the courses array to the console
      },
      error: this.handleError('Failed to load courses'),
    });
  }

  createCourse(): void {
    if (!this.course.class || !this.course.subject || !this.course.board) {
      alert('All fields are required!');
      return;
    }
    console.log('Course Data:', this.course);
    this.userService.createCourse(this.course).subscribe({
      next: () => {
        alert('Course created successfully');
        this.loadCourses();
      },
      error: this.handleError('Failed to create course'),
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      this.file = input.files[0];
    }
  }

  uploadImage(): void {
    if (!this.file) {
      alert('Please select an image file to upload');
      return;
    }
  
    console.log(this.file);
  
    const username = localStorage.getItem('username');
    if (!username) {
      alert('Username not found in localStorage');
      return;
    }
  
    const payload = {
      name: username,
      file_path: this.file.name
    };
    
    console.log(payload); // Logs the payload
    
    this.userService.updateImage(payload).subscribe({
      next: () => {
        alert('Image updated successfully!');
        this.loadCourses();
      },
      error: this.handleError('Failed to update image'),
    });
  }
  

  updateCourse(course: Course): void {
    this.userService.updateCourse(course).subscribe({
      next: () => {
        alert('Course updated successfully!');
        this.loadCourses();
      },
      error: this.handleError('Failed to update course'),
    });
  }

  deleteCourse(courseId: number): void {
    if (confirm('Are you sure you want to delete this course?')) {
      this.userService.deleteCourse(courseId).subscribe({
        next: () => {
          this.courses = this.courses.filter(course => course.id !== courseId);
          alert('Course deleted successfully!');
        },
        error: this.handleError('Failed to delete course'),
      });
    }
  }

  signOut(): void {
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

  private handleError(message: string) {
    return (error: HttpErrorResponse) => {
      const errorMessage = error.error?.message || error.message;
      alert(`${message}: ${errorMessage}`);
    };
  }
}

interface Course {
  id: number;
  name: string;
  subject: string;
  board: string;
  class: string;
  created_by: string;
  latitude: number;
  longitude: number;
}
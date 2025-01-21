import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';
const API_URL_2 = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // Fetch courses by username
  getCourses(username: string): Observable<any> {
    const params = new HttpParams().set('username', username);
    return this.http.get(`${API_URL_2}/course/getCourseList`, { params });
  }

  // Update course
  updateCourse(course: any): Observable<any> {
    return this.http.post(`${API_URL_2}/course/updateCourse`, course);
  }

  // Delete course by ID
  deleteCourse(courseId: number): Observable<any> {
    return this.http.delete(`${API_URL_2}/course/deleteCourse/${courseId}`);
  }
getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
  // Create a new course
  createCourse(courseData: any): Observable<any> {
    return this.http.post(`${API_URL_2}/course/create`, courseData);
  }

  // Update user profile image
  updateImage(payload: any): Observable<any> {
    return this.http.post(`${API_URL_2}/user/uploadprofileimage`, payload);
  }
  
}
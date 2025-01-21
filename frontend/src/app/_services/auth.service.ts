import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3000/api/user/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, httpOptions);
  }

  // register(username: string, email: string, password: string, latitude: string, longitude: string): Observable<any> {
  //   return this.http.post(AUTH_API + 'signup', {
  //     username,
  //     email,
  //     password,
  //     latitude,
  //     longitude
  //   }, httpOptions);
  // }
  // register(username: string, email: string, password: string, latitude: string = '0.0', longitude: string = '0.0'): Observable<any> {
  //   const payload = {
  //     name: username,
  //     email,
  //     password,
  //     latitude,
  //     longitude
  //   };
  
  //   console.log('Sending registration data:', payload);
  
  //   return this.http.post(AUTH_API + 'signup', payload, httpOptions);
  // }
  register(payload: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log('Sending registration data:', payload);
    return this.http.post(AUTH_API + 'signup', payload, httpOptions);
  }
  
}

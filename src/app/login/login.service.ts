import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserInfo } from './userInfo.model';

import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUser: string = null;
  authority: string = null;

  constructor(private httpClient: HttpClient) { }

  login(userName: string, password: string): Observable<any> {
    const body = {
      userName: userName,
      password: password
    }
    return this.httpClient.post('http://localhost:8080/login', body);
  }

  // test(token: string): Observable<any> {
  //   const header = new HttpHeaders().set("a", "token");
  //   const body = {
  //     token: token
  //   }
  //   return this.httpClient.post('http://localhost:8080/test', body, { headers: header , params: body});
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  public getAuthority() {
    return this.authority;
  }

  public setAuthority(authority: string) {
    this.authority = authority;
  }

  public getCurrentUser() {
    return this.currentUser;
  }

  public setCurrentUser(username: string) {
    this.currentUser = username;
  }

}

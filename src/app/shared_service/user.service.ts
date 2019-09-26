import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string='http://localhost:8080/banco';
  private headers = new Headers({'Content-Type':'application/json'})
  private options = new RequestOptions({headers:this.headers});
  private user:User;
  constructor(private _http:Http) { }

  getUsers(){
    return this._http.get(this.baseUrl + '/users', this.options).pipe(map((response: Response) => response.json()));
  }

  getUser(id:Number){
    return this._http.get(this.baseUrl + '/users/' + id, this.options).pipe(map((response: Response) => response.json()));
  }

  deleteUser(id:Number){
    return this._http.delete(this.baseUrl + '/users/' + id, this.options).pipe(map((response: Response) => response.json()));
  }

  createUser(user:User){
    return this._http.post(this.baseUrl + '/users/', JSON.stringify(user), this.options).pipe(map((response: Response) => response.json()));
  }

  updateUser(user:User){
    return this._http.put(this.baseUrl + '/users/', JSON.stringify(user), this.options).pipe(map((response: Response) => response.json()));
  }

  sendInformation(login : Login){
    return this._http.post(this.baseUrl + '/validation/', JSON.stringify(login), this.options).pipe(map((response: Response) => response.json()));
  }

  errorHandler(error:Response){
    return Observable.throw(error || "Conection Error");
  }

  setter(user:User){
    this.user=user;
  }

  getter(){
    return this.user;
  }

}

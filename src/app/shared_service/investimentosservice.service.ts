import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Investimento } from '../investimento';

@Injectable({
  providedIn: 'root'
})
export class InvestimentosserviceService {
  private baseUrl:string='http://localhost:8080/banco';
  private headers = new Headers({'Content-Type':'application/json'})
  private options = new RequestOptions({headers:this.headers});
  private investimento:Investimento;
  constructor(private _http:Http) { }

  getInvestimentos(){
    return this._http.get(this.baseUrl + '/investiment', this.options).pipe(map((response: Response) => response.json()));
  }

  getInvestimento(id:Number){
    return this._http.get(this.baseUrl + '/investiment/' + id, this.options).pipe(map((response: Response) => response.json()));
  }

  deleteInvestimento(id:Number){
    return this._http.delete(this.baseUrl + '/investiment/' + id, this.options).pipe(map((response: Response) => response.json()));
  }

  updateInvestimento(user:Investimento){
    return this._http.put(this.baseUrl + '/investiment/', JSON.stringify(user), this.options).pipe(map((response: Response) => response.json()));
  }

  createInvestimento(investimento:Investimento){
    return this._http.post(this.baseUrl + '/investimentnew/', JSON.stringify(investimento), this.options).pipe(map((response: Response) => response.json()));
  }

  getInvestimentoById(id:Number){
    return this._http.post(this.baseUrl + '/investimentbyid/', JSON.stringify(id), this.options).pipe(map((response: Response) => response.json()));
  }

  getInvestimentoByIdResgatados(id:Number){
    return this._http.post(this.baseUrl + '/investimentbyidresgatados/', JSON.stringify(id), this.options).pipe(map((response: Response) => response.json()));
  }

  resgateInvestimentoById(investimento:Investimento){
    return this._http.post(this.baseUrl + '/resgateinvestimentbyid/', JSON.stringify(investimento), this.options).pipe(map((response: Response) => response.json()));
  }

  errorHandler(error:Response){
    return Observable.throw(error || "Conection Error");
  }

  setter(investimento:Investimento){
    this.investimento=investimento;
  }

  getter(){
    return this.investimento;
  }
}

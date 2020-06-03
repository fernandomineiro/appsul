import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Cadastro } from '../models/cadastro';
import { Images } from '../models/images';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  base_path = 'https://turquinha-com.umbler.net';
  valor:any;
  finaliza:any;
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  enviar(item): Observable<Cadastro> {
    return this.http
      .post<Cadastro>(this.base_path + '/api/pessoa',JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  enviara(item): Observable<Cadastro> {
    return this.http
      .post<Cadastro>(this.base_path + '/api/pessoaa',JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  enviarb(cpf, img): Observable<Images> {
    console.log(img);
    return this.http
      .post<Images>(this.base_path + '/api/pessoab/'+ cpf,JSON.stringify({images: img}), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  pegai(finaliza){
    this.finaliza = finaliza;
  }
  dai(){
    return this.finaliza;
  }  

  pegavalor(valor){
    this.valor = valor;
  }
  davalor(){
    return this.valor;
  }
}

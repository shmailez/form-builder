import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  url:string = 'https://staging.lobsterlab.io/test_task.php'

  constructor(
    private http: HttpClient
  ) { }

  getForm() {
    return this.http.get(this.url)
  }
}



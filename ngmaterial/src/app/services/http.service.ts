import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
  ) {
    console.log(environment.apiUrl);
  }

  getTestMessage() {
    return 'My Test Message';
  }
}

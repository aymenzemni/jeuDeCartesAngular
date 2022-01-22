import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CartesService {

  constructor(private httpClient: HttpClient) {}

  getCartes(): Observable<any> {
    return this.httpClient.get(`${environment.backend_url}/cartesController/getCartes`);
  }

  trieeCartes(cartes): Observable<any> {
    return this.httpClient.post(`${environment.backend_url}/cartesController/trieeCartes`, cartes);
  }
}

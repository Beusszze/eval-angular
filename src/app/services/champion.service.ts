import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Champion } from '../models/champion';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  constructor(private http: HttpClient) { }


  getAll() : Observable<Champion[]> {
    return this.http.get<Champion[]>(`${environment.URL}/champions`);
  }

  create(champion: Champion): Observable<Champion> {
    return this.http.post<Champion>(`${environment.URL}/champions`, champion)
  }

  delete(id: number): Observable<Champion> {
    return this.http.delete<Champion>(`${environment.URL}/champions/${id}`);
  }

  modify(champion: Champion): Observable<Champion> {
    return this.http.put<Champion>(`${environment.URL}/champions/${champion.id}`, champion);
  }


}

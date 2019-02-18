import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Zadatak } from './zadatak.model';

@Injectable()
export class ZadatakService {


    constructor(private http: HttpClient) { }

    public getZadatak(): Observable<Zadatak> {
        return this.http.get<Zadatak>('http://localhost:2136/api/date');
    }
}
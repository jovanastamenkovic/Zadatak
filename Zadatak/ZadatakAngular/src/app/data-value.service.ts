import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class DataValueService {

    constructor(private http: HttpClient) { }
    public getDate(): Observable<string> {
        return this.http.get<string>(`${environment.url}/date`);
    }
}
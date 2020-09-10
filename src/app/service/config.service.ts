import { Injectable } from '@angular/core';

// Observableインポート
import { Observable } from 'rxjs';
// HTTPサービスインポート
import { HttpClient } from '@angular/common/http';
// 設定ファイル読み込み
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  constructor(private http: HttpClient) { }
  
  // API設定
  getAPI(): Observable<any> {
    return this.http.get(environment.apiUrl + '/services/api/BooksBook/Search/20170404?format=json&title=%E5%A4%AA%E9%99%BD&booksGenreId=001004008&applicationId=1053843710327849244');
}
}

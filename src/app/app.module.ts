import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// アニメーションモジュールインポート
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// HTTPサービスインポート
import { HttpClientModule } from '@angular/common/http';
// ボタン・チェックボックス・テーブルモジュールインポート
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox'
import { MatTableModule } from '@angular/material/table';
import { IndexComponent } from './index/index.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     // アニメーションモジュールインポート
     BrowserAnimationsModule,
     // ボタン・チェックボックス・テーブルモジュールインポート
     MatButtonModule,
     MatCheckboxModule,
     MatTableModule,
     // HTTPサービスインポート
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

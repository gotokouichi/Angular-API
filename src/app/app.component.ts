import { Component } from '@angular/core';
// API設定インポート
import { ConfigService } from './service/config.service';

let ApiData: string[];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = '住所検索API';
  displayedColumns: string[] = ['authorKana', 'author', 'title', 'publisherName'];
  dataSource = ApiData;

  constructor(private configService: ConfigService) {}

  ngOnInit() {
      // API読み込み
      // console.log("this.configService.getAPI()", this.configService.getAPI());
      this.configService.getAPI().subscribe(res => {
        console.log("res", res["Items"]);
        this.dataSource = res["Items"];
        // console.log("this.dataSource", this.dataSource);

      });
  }
}

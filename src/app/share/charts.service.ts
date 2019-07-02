import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private http: HttpClient,) { 

  }

   private  ByCountry = [
    {"ByCountry": {"Label": ["es", "en", "nl", "it", "de", "fr", "ru", "pt", "pl", "ca", "zh", "da", "ko", "zh-cn", "ro", "ja", "lt", "nb", "sk", "sl", "zh-hk"], "Data": [365, 278, 194, 141, 60, 58, 25, 21, 12, 8, 7, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1]}}
  ];

  getByCountryList() {  
  
    // this is reading from URL
    //----------------------------
     this.http.get('hhttp://127.0.0.1:8000/bycountry').subscribe((res: any[]) => {
     console.log(res);
     
      return this.ByCountry;
    });
  
  } 
}

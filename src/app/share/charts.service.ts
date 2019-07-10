import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  constructor(private http: HttpClient) { 
  
  }



   getByCountryList() {  
  
    var chartarray = [];
    // this is reading from URL
    //----------------------------
     this.http.get('http://localhost:8000/bycountry').subscribe((res: any[]) => {
       return res;
    });
  

  } 

  private data = [];  

   getOption() {  

    this.http.get('http://localhost:8000/bycountry').subscribe((res: any[]) => {
      
      this.data.push(res);
      return this.data;  
   });
     
   } 

}

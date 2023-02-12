import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  dataURL:string='';

  constructor(private http:HttpClient) {

    this.dataURL="http://localhost:3000/usersDetails";
   }

  additionalDetails:any[]=[];

  addAditionalDetails(data:object)
  {
    this.additionalDetails.push(data);
  }
  postDataFromService(FormData:any) : Observable<any>{
    return this.http.post<any>(this.dataURL,this.additionalDetails);
   }
  

}

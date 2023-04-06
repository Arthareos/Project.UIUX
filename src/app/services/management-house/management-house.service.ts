import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ManagementHouseService {

  private readonly householdurl = '/households';
  private readonly assignURL = '/members?memberId=';
  private readonly allMembers = '/members';

  constructor(private http: HttpClient) { }


  createHousehold(household: any){
    return this.http.post('localhost:8080' + this.householdurl, household);
  }

  assignHousehold(userID: string, householdID: number){
    return this.http.put('localhost:8080' + this.assignURL + `${userID}&houseId=${householdID}`,null);
  }

  getAllMembers(){
    return this.http.get('localhost:8080' + this.allMembers);
  }
}

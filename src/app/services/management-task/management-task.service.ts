import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ManagementTaskService {

  private readonly getTaskURL = '/tasks?householdId='
  private readonly getMembersURL = '/members?householdId='
  private readonly doneTaskURL = '/tasks/finishTask/'
  private readonly assignTaskURL = '/tasks?memberId='
  private readonly createTaskURL = '/tasks'

  constructor(private http: HttpClient) { }

  getTasks(householdID: string){
    var headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
    headers = headers.set('Authorization','Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsdWNpYW4uc3RlcmVAYnRybC5ybyIsImlhdCI6MTY4MDcyNDk5OCwiZXhwIjoxNjgwNzg0OTk4fQ.Ny1d7cbTZNu2qWSUqRN6GoHAt85pCunNCfi3dhGVpIU');
    return this.http.get('http://localhost:8080' + this.getTaskURL + `${householdID}`,{headers: headers});
  }

  getHouseHoldMembers(householdID: string){
    return this.http.get('http://localhost:8080' + this.getMembersURL + `${householdID}`);
  }

  assignTask(taskID: string, userID: string){
    return this.http.put('http://localhost:8080' + this.assignTaskURL + `${userID}&taskId=${taskID}`,'');
  }

  doneTask(taskID: string){
    return this.http.put('http://localhost:8080' + this.doneTaskURL + `${taskID}`,'');
  }

  addTask(task: any){
    return this.http.post('http://localhost:8080' + this.createTaskURL,task);
  }
}

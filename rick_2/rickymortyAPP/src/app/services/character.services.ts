import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Character } from "../interfaces/character";
import { Observable } from "rxjs";
@Injectable({
    providedIn:'root'
})
export class CharacterService{
    constructor(private http: HttpClient){}

    searchCharacters(query = '', page = 1){
        return this.http.get<Character[]>(
        `${environment.baseUrlAPI}/?name=${query}&page=${page}`);
      }
    getDetails(id: number){}
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  getNotes(): {}[] {
    return [
      {id:1,title:"Test note 1",body:"Nothing here yet (1)",author:"Sam Bennett"},
      {id:2,title:"Test note 2",body:"Nothing here yet (2)",author:"Sam Bennett"}
    ]
  }
}

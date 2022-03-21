import { Injectable } from '@angular/core';
import {Note} from './types/note'

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  getNotes(): Note[] {
    return [
      {id:1,title:"Test note 1",body:"Nothing here yet (1)",author:"Sam Bennett"},
      {id:2,title:"Test note 2",body:"Nothing here yet (2)",author:"Sam Bennett"},
      {id:2,title:"Love you!",body:"Best angel in the world",author:"Mommykins"}
    ]
  }
}

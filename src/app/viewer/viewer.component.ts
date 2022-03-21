import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service'
import { Note } from '../types/note';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  notesService:any;
  notesJson:Note[];

  constructor() {
    this.notesService = new NotesService();
    this.notesJson = this.notesService.getNotes();
  }

  ngOnInit(): void {}
}

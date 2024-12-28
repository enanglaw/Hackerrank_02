import { Component, OnInit } from '@angular/core';
import { DataFormComponent } from '../data-form/data-form.component';
import { DataListComponent } from '../data-list/data-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Item } from '../types/item';

@Component({
  selector: 'app-data-info',
  standalone: true,
  imports: [DataFormComponent, DataListComponent, CommonModule],
  templateUrl: './data-info.component.html',
  styleUrl: './data-info.component.scss',
})
export class DataInfoComponent implements OnInit {
  Book: string = 'Book';
  Song: string = 'Song';
  books: any[] = [];
  songs: any[] = [];
  constructor() {}

  ngOnInit() {}

  onItemAdded(item: any) {
    if (item.type === this.Song) {
      this.songs.push(item);
    }
    if (item.type === this.Book) {
      this.books.push(item);
    }
  }

  onItemDelete(item: any) {
    if (item.type === this.Song) {
      this.songs = this.songs.filter(
        (content: Item) =>
          content.name !== item.name && content.genre !== item.genre
      );
    }
    if (item.type === this.Book) {
      this.books = this.books.filter(
        (content: Item) =>
          content.name !== item.name && content.genre !== item.genre
      );
    }
  }
}

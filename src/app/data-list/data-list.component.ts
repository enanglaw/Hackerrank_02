import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../types/item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.scss',
})
export class DataListComponent {
  @Input() dataList: Item[] = [];
  @Input() dataType!: string;
  @Output() onItemDelete: EventEmitter<Item> = new EventEmitter<Item>();

  ngOnInit() {}

  deleteDataList(item: Item) {
    this.onItemDelete.emit(item);
  }
}

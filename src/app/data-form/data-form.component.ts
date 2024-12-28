import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { Item } from '../types/item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.scss',
})
export class DataFormComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<Item> = new EventEmitter<Item>();

  challengeForm!: FormGroup;
  isSong: boolean = false;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.isSong = false;
    this.challengeForm = this.fb.group({
      name: ['', Validators.required],
      genre: ['', Validators.required],
      creator: ['', Validators.required],
      type: ['', Validators.required],
      totalTime: [Number],
    });

    this.challengeForm.get('type')?.valueChanges.subscribe((value) => {
      this.isSong = value === 'Song';
      const totalTimeControl = this.challengeForm.get('totalTime');
      if (this.isSong) {
        totalTimeControl?.setValidators([
          Validators.required,
          Validators.min(1),
        ]);
      } else {
        totalTimeControl?.clearValidators();
      }

      totalTimeControl?.updateValueAndValidity();
    });
  }

  addItem() {
    if (!this.challengeForm.valid) {
      return;
    }
    const challengeFormDetail: Item = {
      name: this.challengeForm.get('name')?.value,
      genre: this.challengeForm.get('genre')?.value,
      creator: this.challengeForm.get('creator')?.value,
      type: this.challengeForm.get('type')?.value,
      totalTime: this.challengeForm.get('totalTime')?.value,
    };
    this.onItemAdded.emit(challengeFormDetail);
    this.challengeForm.reset();
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MatButtonToggleModule, MatInputModule, MatChipsModule, MatIconModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, MatButtonToggleModule, MatFormFieldModule, MatInputModule, MatChipsModule, MatIconModule],
  declarations: [SearchComponent],
  exports: [SearchComponent],
  entryComponents: []
})
export class SearchModule {}

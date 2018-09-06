import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MatButtonToggleModule, MatInputModule, MatChipsModule, MatIconModule, MatSortModule, MatTableModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, MatButtonToggleModule, MatFormFieldModule, MatInputModule, MatChipsModule, MatIconModule, MatSortModule, MatTableModule ],
  declarations: [SearchComponent],
  exports: [SearchComponent],
  entryComponents: []
})
export class SearchModule {}

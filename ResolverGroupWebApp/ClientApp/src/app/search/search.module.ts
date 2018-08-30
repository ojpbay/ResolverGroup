import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MatButtonToggleModule, MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonToggleModule, MatFormFieldModule, MatInputModule],
  declarations: [SearchComponent],
  exports: [SearchComponent],
  entryComponents: []
})
export class SearchModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MatButtonToggleModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonToggleModule],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class SearchModule {}

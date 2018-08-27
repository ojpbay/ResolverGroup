import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MatButtonToggleModule } from '@angular/material';
import { ResolverGroupService } from './resolver-group.service';

@NgModule({
  imports: [CommonModule, MatButtonToggleModule],
  declarations: [SearchComponent],
  exports: [SearchComponent],
  entryComponents: []
})
export class SearchModule {}

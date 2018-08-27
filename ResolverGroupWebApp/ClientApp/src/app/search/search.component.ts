import { Component, OnInit } from '@angular/core';
import { ResolverGroupService } from './resolver-group.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(private resolverSearch: ResolverGroupService) {}

  ngOnInit() {
    debugger;
    const resolverGroups = this.resolverSearch.get();
  }
}

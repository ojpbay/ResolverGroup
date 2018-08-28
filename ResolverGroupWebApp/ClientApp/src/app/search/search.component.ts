import { Component, OnInit } from '@angular/core';
import { ResolverGroupService } from './resolver-group.service';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  resolverGroups: any;
  sortedData: any[];
  constructor(private resolverSearch: ResolverGroupService) {
    this.sortedData = [];
  }

  ngOnInit() {
    this.resolverGroups = this.resolverSearch.get();
    this.sortedData = this.resolverGroups.slice();
  }

  sortData(sort: Sort) {
    const data = this.resolverGroups.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'resolverDescription':
          return compare(a.resolverDescription, b.resolverDescription, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

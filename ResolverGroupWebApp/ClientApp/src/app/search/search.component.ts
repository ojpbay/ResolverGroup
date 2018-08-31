import { Component, OnInit } from '@angular/core';
import { ResolverGroupSearchService } from './resolver-group-search.service';
import { ApplicationSearchService } from './application-search.service';
import { Sort } from '@angular/material';
import { IResolverGroup } from './model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  resolverGroups: any;
  applications: any;
  sortedData: Array<IResolverGroup>;
  displayResolver: boolean;
  displayApplication: boolean;

  constructor(
    private resolverSearch: ResolverGroupSearchService,
    private applicationSearch: ApplicationSearchService
  ) {
    this.sortedData = [];
  }

  ngOnInit() {
    this.resolverGroups = this.resolverSearch.get();
    this.applications = this.applicationSearch.get();

    this.displayResolver = true;
    this.displayApplication = false;
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

  showResolver() {
    this.showGrid(1);
  }

  showApplication() {
    this.showGrid(2);
  }

  onSearchChange(searchValue: string) {
    if (this.displayResolver) {

      var results = this.resolverGroups;

      // todo query and filter contact name also
      const filteredResults = results.filter(grp => grp.resolverGroupName.includes(searchValue) || grp.resolverDescription.includes(searchValue) );

      console.log(filteredResults);
    } else if (this.displayApplication) {
      // todo
    }
  }

  private showGrid(gridType: number) {
    if (gridType === 1) {
      this.displayResolver = true;
      this.displayApplication = false;
    }

    if (gridType === 2) {
      this.displayResolver = false;
      this.displayApplication = true;
    }
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

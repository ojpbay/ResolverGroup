import { Component, OnInit } from '@angular/core';
import { ResolverGroupSearchService } from './resolver-group-search.service';
import { ApplicationSearchService } from './application-search.service';
import { Sort } from '@angular/material';
import { IResolverGroup, IApplication } from './model';
import { Observable } from 'rxjs';
import { filter, map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  resolverGroups: Observable<IResolverGroup[]>;
  filteredResults: Observable<any[]>;
  applications: Observable<IApplication[]>;
  sortedData: Array<IResolverGroup>;
  displayResolver: boolean;
  searchText: string;

  constructor(
    private resolverSearch: ResolverGroupSearchService,
    private applicationSearch: ApplicationSearchService
  ) {
    this.sortedData = [];
  }

  ngOnInit() {
    this.resolverGroups = this.resolverSearch.get();
    this.filteredResults = this.resolverGroups;
    this.applications = this.applicationSearch.get();

    this.displayResolver = true;
  }

  sortData(sort: Sort) {
    // // const data = this.resolverGroups.slice();
    // // if (!sort.active || sort.direction === '') {
    // //  this.sortedData = data;
    // //  return;
    // // }
    // // this.sortedData = data.sort((a, b) => {
    // //  const isAsc = sort.direction === 'asc';
    // //  switch (sort.active) {
    // //    case 'id':
    // //      return compare(a.id, b.id, isAsc);
    // //    case 'resolverDescription':
    // //      return compare(a.resolverDescription, b.resolverDescription, isAsc);
    // //    default:
    // //      return 0;
    // //  }
    // // });
  }

  showResolver() {
    this.showGrid(1);
    this.onSearchChange(this.searchText || '');
  }

  showApplication() {
    this.showGrid(2);
    this.onSearchChange(this.searchText || '');
  }

  onSearchChange(searchValue: string) {
    if (this.displayResolver) {
      this.filteredResults = this.resolverGroups.pipe(
        map(results =>
          results.filter(
            grp =>
              (grp.resolverGroupName &&
                grp.resolverGroupName
                  .toLowerCase()
                  .indexOf(searchValue.toLowerCase()) >= 0) ||
              (grp.resolverDescription &&
                grp.resolverDescription
                  .toLowerCase()
                  .indexOf(searchValue.toLowerCase()) >= 0) ||
              (grp.contactName &&
                grp.contactName
                  .toLowerCase()
                  .indexOf(searchValue.toLowerCase()) >= 0)
          )
        )
      );
    } else {
      this.filteredResults = this.applications.pipe(
        map(results =>
          results.filter(
            app =>
              (app.resolverGroupName &&
                app.resolverGroupName
                  .toLowerCase()
                  .indexOf(searchValue.toLowerCase()) >= 0) ||
              (app.appDescription &&
                app.appDescription
                  .toLowerCase()
                  .indexOf(searchValue.toLowerCase()) >= 0) ||
              (app.appName &&
                app.appName.toLowerCase().indexOf(searchValue.toLowerCase()) >=
                  0) ||
              (app.contactName &&
                app.contactName
                  .toLowerCase()
                  .indexOf(searchValue.toLowerCase()) >= 0)
          )
        )
      );
    }
  }

  private showGrid(gridType: number) {
    if (gridType === 1) {
      this.displayResolver = true;
    }

    if (gridType === 2) {
      this.displayResolver = false;
    }
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/domain/entities/city';
import { SearchCityService } from 'src/domain/services/search-city.service';
import { LoadCachedCitiesService } from 'src/domain/services/load-cached-cities.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cities: City[];
  firstSearch: boolean = true;
  hasError: boolean = false;
  errorMessage: string;

  constructor(
    private readonly searchService: SearchCityService,
    private readonly cachedCities: LoadCachedCitiesService,
    private readonly router: Router
  ) {}

  async ngOnInit() {
    this.cities = await this.cachedCities.loadCache();
  }

  async onSearch(query: string) {
    try {
      this.hasError = false;
      this.firstSearch = false;
      this.cities = await this.searchService.search(query);
    } catch (error) {
      this.hasError = true;
      this.errorMessage = error.message;
    }
  }

  onSelectCity(cityId: string) {
    this.router.navigateByUrl(`/weather/${cityId}`);
  }
}

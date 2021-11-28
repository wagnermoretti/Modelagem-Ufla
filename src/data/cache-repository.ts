import { City } from 'src/domain/entities/city';
import { CacheRepository } from 'src/domain/services/protocols/cache-repository';

export class LocalCacheRepository extends CacheRepository {
  async cacheCity(city: City): Promise<void> {
    let cities = JSON.parse(localStorage.getItem('cities'));
    if (!cities) cities = [];

    if (!cities.some((item: City) => item.name === city.name))
      cities.push(city);

    localStorage.setItem('cities', JSON.stringify(cities));
  }

  async loadCachedCities(): Promise<City[]> {
    let cities = JSON.parse(localStorage.getItem('cities'));
    if (cities) return cities;
    else return [];
  }
}

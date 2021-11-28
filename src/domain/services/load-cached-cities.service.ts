import { City } from '../entities/city';
import { CityNotFoundError } from '../errors/city-not-found.error';
import { CacheRepository } from './protocols/cache-repository';

export class LoadCachedCitiesService {
  constructor(private readonly cacheRepo: CacheRepository) {}

  async loadCache(): Promise<City[]> {
    return this.cacheRepo.loadCachedCities();
  }
}

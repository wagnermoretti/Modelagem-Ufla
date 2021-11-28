import { City } from 'src/domain/entities/city';

export abstract class CacheRepository {
  abstract cacheCity(city: City): Promise<void>;
  abstract loadCachedCities(): Promise<City[]>;
}

import { City } from '../entities/city';
import { Weather } from '../entities/weather';
import { CityNotFoundError } from '../errors/city-not-found.error';
import { UnavailableServiceError } from '../errors/unavailable-service.error';
import { CityRepository } from './protocols/city-repository';
import { WeatherRepository } from './protocols/weather-repository';
import { CacheRepository } from './protocols/cache-repository';

export class LoadWeatherService {
  constructor(
    private readonly cityRepo: CityRepository,
    private readonly weatherRepo: WeatherRepository,
    private readonly cacheRepo: CacheRepository
  ) {}

  async loadByCity(cityId: number): Promise<Weather> {
    const city: City = await this.cityRepo.getById(cityId);
    if (!city) {
      throw new CityNotFoundError();
    }
    this.cacheRepo.cacheCity(city);

    const weather = await this.weatherRepo.load(city.coord);
    weather.city = city;

    return weather;
  }
}

import { api } from '../api';
import { Car } from '../../shared/types';

type ApiCarData = {
  data: {
    id: string;
    attributes: {
      photo: {
        data: {
          attributes: {
            formats: {
              small: {
                url: string;
              };
            };
          };
        }[];
      };
    } & Omit<Car, 'photo'>;
  }[];
};

type UploadPhotosResponse = {
  id: string;
}[];

type SaveCarInput = Omit<Car, 'id' | 'photos' | 'value'> & {
  value: string;
  photo: string[];
};

function mapperCars(carData: ApiCarData): Car[] {
  return carData.data.map(car => ({
    id: car.id,
    brand: car.attributes.brand,
    model: car.attributes.model,
    value: car.attributes.value,
    year: car.attributes.year,
    city: car.attributes.city,
    photos: car.attributes.photo.data.map(
      photo => photo.attributes.formats.small.url
    )
  }));
}

function saveCar(data: SaveCarInput) {
  return api.post('/cars', { data });
}

async function uploadPhotos(data: FormData) {
  const response = await api.post<UploadPhotosResponse>('/upload', data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });

  return response.data.map(photo => photo.id);
}

async function getCars() {
  const response = await api.get<ApiCarData>('/cars?populate=*');

  return mapperCars(response.data);
}

async function getCarById(id: number) {
  const response = await api.get<ApiCarData>(`/cars/${id}?populate=*`);

  return mapperCars(response.data);
}

export { saveCar, getCars, getCarById, uploadPhotos };

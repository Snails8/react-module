import { APIGetFishes } from '../../endpoint';
import { useFetch } from '../../hooks/useFetch';
import FishData from '../../mockData/json/Fishes.json';
import { Fish } from '../../types/fish';

export const useFishes = () => {
  const fishes = process.env.IS_BACKEND
    ? getFishesFromAPI()
    : getFishesFromJson();

  return {
    fishes: fishes,
  };
};

const getFishesFromJson = (): Fish[] => {
  return FishData.fishes;
};

const getFishesFromAPI = (): Fish[] => {
  const [data, loading, error] = useFetch<Fish[]>(APIGetFishes);
  if (data === undefined) return [];

  return data;
};

import { useEffect, useState } from 'react';
import FishData from './Json/Fishes.json';

export enum habitatType {
  River = 'river',
  Sea = 'sea',
}

export enum eatType {
  Omnivorous = 'omnivorous',
  Carnivorous = 'carnivorous',
}

export interface Fish {
  /**
   * @type {number}
   * @memberof Fish
   */
  id: number;

  /**
   *
   * @type {string}
   * @memberof Fish
   */
  name: string;

  /**
   *
   * @type {string}
   * @memberof Fish
   */
  type: string;

  habitat: string;

  endangeredStatus: string;
}

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
  const [fishes, setFishes] = useState<Fish[]>([]);

  useEffect(() => {
    fetch('http://localhost:7001/api/v1/fishes', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then(
        (data) => {
          setFishes(data);
        },
        (error) => {
          console.log(error);
          const errData = {};
        }
      );
  }, []);

  return fishes;
};

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
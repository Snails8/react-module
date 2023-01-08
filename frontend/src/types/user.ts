export interface User {
  /**
   *
   * @type {number}
   * @memberof User
   */
  id: number;

  /**
   *
   * @type {string}
   * @memberof User
   */
  name: string;

  /**
   *
   * @type {string}
   * @memberof User
   */
  email: string;

  role: string;
}

export enum UserRole {
  Manager = 'manager',
  Operator = 'operator',
}
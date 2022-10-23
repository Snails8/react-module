export interface TrainingCalendarData {
  /**
   * @type {number}
   * @memberof TrainingCalendarData
   */
  id: number
  
    /**
   * @type {string}
   * @memberof TrainingCalendarData
   */
  name: string

    /**
   * @type {[key: string]: CalendarPerWeek}
   * @memberof TrainingCalendarData
   */
  calendar: {[key: string]: CalendarPerWeek}
}

export interface CalendarPerWeek {
  hoge: number
  fuga: number
  piyo: number
}
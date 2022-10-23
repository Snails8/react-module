export interface TrainingCalendarData {
  calendar: {[key: string]: CalendarPerWeek}
}

export interface CalendarPerWeek {
  hoge: number
  fuga: number
  piyo: number
}
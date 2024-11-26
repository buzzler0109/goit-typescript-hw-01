enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: keyof typeof DayOfWeek): boolean => {
  const strDay = DayOfWeek[day];
  return strDay === DayOfWeek.Saturday || strDay === DayOfWeek.Sunday;
};

const { DateTime } = require("luxon");
const { specials, happyHour, parties } = require("../js-shared/recurring.js");

function daysOfMonth(start) {
  const end = start.endOf("month");

  const dates = [];
  let date = start;
  while (date < end) {
    dates.push(date);
    date = date.plus({ days: 1 });
  }

  const days = dates.map((date) => {
    const weekday = date.weekday;
    const events = specials
      .filter((special) => special.weekday === weekday)
      .map((special) => special.special);
    const happy = happyHour.weekdays.includes(weekday);
    if (happy) {
      const start = DateTime.fromISO(`${date.toISODate()}T${happyHour.start}`);
      const end = DateTime.fromISO(`${date.toISODate()}T${happyHour.end}`);
      events.push(
        `🍸 Happy Hour ${start.toLocaleString(
          DateTime.TIME_SIMPLE
        )} - ${end.toLocaleString(DateTime.TIME_SIMPLE)}`
      );
    }
    const late = parties
      .filter((event) => event.weekday === weekday)
      .map((event) => {
        const start = DateTime.fromISO(`${date.toISODate()}T${event.start}`);
        return `${event.event} ${start.toLocaleString(DateTime.TIME_SIMPLE)} `;
      });
    return {
      date: date.toJSDate(),
      iso: date.toISODate(),
      events: events.concat(late),
    };
  });
  return {
    start: start.toJSDate(),
    days,
  };
}

module.exports = function (timezone) {
  const start = DateTime.now().setZone(timezone).startOf("month");
  const end = start.endOf("month").plus({ months: 3 });

  const months = [];
  let month = start;

  while (month < end) {
    months.push(daysOfMonth(month));
    month = month.plus({ months: 1 });
  }
  return months;
};

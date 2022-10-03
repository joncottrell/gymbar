const specials = [
  { weekday: 2, special: "🌮 Taco Tuesday" },
  { weekday: 3, special: "🍗 Wings Wednesday" },
  { weekday: 4, special: "🌭 Hot Dog Thursday" },
  { weekday: 5, special: "🐟 Fish 'n Chips Friday" },
  { weekday: 6, special: "🍳 Chilaquiles Saturday" },
];

const happyHour = {
  weekdays: [1, 2, 3, 4, 5],
  start: "16:00",
  end: "20:00",
};

const parties = [
  { weekday: 1, start: "20:00", event: "🎤 Karaoke" },
  { weekday: 5, start: "21:00", event: "🍑 Thicc - Go Go Dancers" },
  { weekday: 6, start: "21:00", event: "🎛️ DJ" },
];

module.exports = {
  specials,
  happyHour,
  parties,
};

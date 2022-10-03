const { DateTime } = require("luxon");

module.exports = (config) => {
  config.addPassthroughCopy("css");
  config.addPassthroughCopy("images");
  config.addFilter("month", function (date) {
    return DateTime.fromJSDate(date).toLocaleString({
      month: "long",
      year: "numeric",
    });
  });
  config.addFilter("day", function (date) {
    return DateTime.fromJSDate(date).toLocaleString({
      day: "numeric",
    });
  });
  config.addFilter("weekday", function (date) {
    return DateTime.fromJSDate(date).toLocaleString({
      weekday: "short",
    });
  });
  config.ignores.add("www.gymsportsbar.com");
  config.ignores.add("js-shared");
};

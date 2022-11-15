const { DateTime } = require("luxon");

module.exports = (config) => {
  config.addPassthroughCopy("css");
  config.addPassthroughCopy("images");
  config.addPassthroughCopy("admin/config.yml");
  config.addCollection("laLeagues", function (collectionApi) {
    return collectionApi.getFilteredByTags("la", "league").map((league) => {
      return {
        name: league.data.name,
        url: league.data.page.url,
      };
    });
  });
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

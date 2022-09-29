module.exports = (config) => {
  config.addPassthroughCopy("css");
  config.addPassthroughCopy("images");
  config.ignores.add("www.gymsportsbar.com");
};

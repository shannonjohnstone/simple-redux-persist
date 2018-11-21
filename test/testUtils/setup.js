  var jsdom = require('jsdom');
  const { JSDOM } = jsdom;

  const dom = new JSDOM('<!doctype html><html><body></body></html>');
  dom.reconfigure({ url: "https://example.com/" });
  global.window = dom.window
  global.document = dom.window.document
  
  Object.keys(window).forEach((key) => {
    if (!(key in global)) {
      global[key] = window[key];
    }
  });

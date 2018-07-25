const templateBuilder = require("../");

const source = `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 237 59"><title>health</title><polygon points="233 25 50.44 25 33 5 233 5 233 25"/><polygon points="233 40.5 62.77 40.5 53 29.5 233 29.5 233 40.5"/><circle cx="19" cy="19" r="15"/><circle cx="40" cy="43" r="13"/></svg>`;

console.log(templateBuilder({ source }));

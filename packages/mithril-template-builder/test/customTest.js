const templateBuilder = require("../dst/templateBuilder");

const source = `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 118"><title>health</title><polygon points="420.01 51.54 92.89 51.54 61.65 20.3 420.01 20.3 420.01 51.54"/><polygon points="420.01 75.43 115.86 75.43 98.41 57.98 420.01 57.98 420.01 75.43"/><circle cx="38.33" cy="38.33" r="23.33"/><circle cx="77.55" cy="79.67" r="23.33"/></svg>`;

console.log(templateBuilder({ source }));

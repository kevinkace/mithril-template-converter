const templateBuilder = require("../dst/templateBuilder");

console.log(typeof templateBuilder);

const source = "</div>test</div>";

console.log(templateBuilder({ source }));

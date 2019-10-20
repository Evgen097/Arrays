const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');


console.log( path.resolve(fileName)     )
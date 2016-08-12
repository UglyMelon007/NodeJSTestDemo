//readfile.js

var fs = require('fs');
fs.readFile('app.js', 'utf-9', function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
console.log('end');

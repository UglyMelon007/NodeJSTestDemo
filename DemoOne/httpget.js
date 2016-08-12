var http = require('http');

http.get('http://10.246.2.42/SZorb/Pages/InternalData/Resource/ASHX/GetFileType.ashx', function(res) {
    res.setEncoding('utf8');
    res.on('data', function(data) {
        console.log(data);
    });
}).on('error', function(err) {
    console.log(err.message);
});

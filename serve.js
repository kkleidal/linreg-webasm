var express = require('express');
var app = express();

// Set the MIME type explicitly
express.static.mime.define({'application/wasm': ['wasm']});

app.use(express.static('.'));

app.listen(3000);

var searchModule = require('./search');
var search = searchModule({}).search;
search('Kontakt', { host: 'localhost', port: 8010 })
    .then(function (r) { return console.log(r); });

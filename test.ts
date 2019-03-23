var searchModule = require('./search');

var search = searchModule({}).search;

search('Kontakt', {host: 'localhost', port: 8010})
.then(r => console.log(r));
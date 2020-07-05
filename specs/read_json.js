var data = require('../data/global.json');
describe('Read json file', function(){

    it('Read json file - test', function(){

        console.log(data.url);
        console.log(data.username);
        console.log(data.password);

        console.log(data.address.city);
        console.log(data.address.zip);

    })
})
var faker = require('faker');

describe('Faker demo', function(){
    
    it('fake data test', function(){

        //https://www.npmjs.com/package/faker
        console.log(faker.name.firstName());
        console.log(faker.name.lastName());
        console.log(faker.phone.phoneNumber());
        console.log(faker.address.city());
        console.log(faker.address.zipCode());
        console.log(faker.internet.email());

    })
    
})
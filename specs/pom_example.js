let homepage=require('../pages/homepage');

describe('pom example suite',function(){
    
    it('pom example passing test', function(){

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNo("2");

        homepage.enterSecondNo("3");

        homepage.clickGo();

        homepage.verifyResult('5');

    })

    it('pom example failing test', function(){

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNo("2");

        homepage.enterSecondNo("3");

        homepage.clickGo1();

        homepage.verifyResult('5');

    })
})

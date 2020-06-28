let homepage=function(){

    let no1 = element(by.model('first'))
    let no2 = element(by.model('second'))
    let doAdd = element(by.css('[ng-click="doAddition()"]'))
    let resultTxt = element(by.css('h2.ng-binding'))

    this.get = function(url){
        browser.get(url);
    }

    this.enterFirstNo = function(no){
        no1.sendKeys(no);
    };

    this.enterSecondNo = function(no){
        no2.sendKeys(no);
    };

    this.clickGo = function(){
        doAdd.click();
    };

    this.verifyResult = function(expected){
        expect(resultTxt.getText()).toEqual(expected);
        var ele=resultTxt.getText();
        ele.then(text => {
            console.log('=======> result: '+text)
        })
        
    };
};

module.exports = new homepage();
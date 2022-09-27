'use strict';
var eachStepScreensArr = [];
var world;
module.exports = function() {
	
	this.Before(function(scenario, callback) {
	    world = this;
	   world.k=5;
	   world.scenario = scenario;
	    world.FailedSteps=""
	    world.isSuccessful=true;
	    
	    callback();
	  });
	
	
    this.After((scenario) => {
    
    	
        return browser.driver.manage().window().maximize().then(function() { 
           // return browser.driver.manage().window().setPosition(0, 0).then(function() {
                for (var key in eachStepScreensArr) {
                    scenario.attach(eachStepScreensArr[key], 'image/png');
                }
       
    });
    return Promise.resolve();
    
});
    
    
    this.StepResult((stepResult) => {
    	
        var step = stepResult.getStep();
        world.step=step;
      
        if (step.getName() && stepResult.getStatus() !== 'skipped') {
          
        	return browser.executeScript('return {' +
                'height: document.body.scrollHeight,' +
                'width: document.body.scrollWidth' +
                '}'
            ).then(function(result) {
                //return browser.driver.manage().window().setSize(/*result.width*/1280, result.height + 50).then(function() {
                  return browser.driver.manage().window().maximize().then (function(){
            	    return browser.takeScreenshot().then(function(png) {
                        eachStepScreensArr.push(new Buffer(png.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64'));
                    });
                });
            });
        }
//        
        return Promise.resolve();
    });
    
};




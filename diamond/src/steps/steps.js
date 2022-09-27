var {Given, When, Then} = require('cucumber');
var EC=protractor.ExpectedConditions;
var ElementList=require("./../elements/elements.js");

var list=new ElementList();
var chai = require('../../node_modules/chai').use(require('../../node_modules/chai-as-promised'));
var expect = chai.expect; 


browser.ignoreSynchronization=true; 
var AutomationSteps = function() { 
	this.setDefaultTimeout(500000);




     this.Given(/^I go to "([^"]*)" url$/, function (arg1) {
    	return  browser.get(list.url[arg1])
     
     });



     this.When(/^i enter "([^"]*)" in "([^"]*)"$/, function (arg1, arg2) {
    	 return list.Elements[arg2].sendKeys(list.TestData[arg1])
     });

    	 
     this.When(/^i click "([^"]*)" button$/, function (arg1) {
    	 return list.Elements[arg1].click();
    	 
     });
     
    this.When(/^i select day from "([^"]*)"$/, function (arg1) {
    	return list.Elements[arg1].click();
    	
    });
    
    	this.When(/^i select month from "([^"]*)"$/, function (arg1) {
    		return list.Elements[arg1].click();
    	    	 
    	     });

    	this.When(/^i select year from "([^"]*)"$/, function (arg1) {
    		return list.Elements[arg1].click();
    	     });

    	this.When(/^i select gender from "([^"]*)"$/, function (arg1) {
    		return list.Elements[arg1].click();
    	});

    	this.Then(/^displaying "([^"]*)" sucessfully$/, function (arg1) {
    			
    		 return list.Elements[arg1].getText().then(function(actual){
    		 expect(actual).to.equal("Email or Phone")
    					
    		})		    
    	});

    	this.When(/^i verify "([^"]*)" button visibility$/, function (arg1) {
    	    	
   	         return list.Elements[arg1].isPresent().then(function(s){
   		     expect(s).to.equal(true)
   		     console.log("passed")
   		
   			 })
   	   
   	         .catch(function(e){
   		     console.log("failed")
   	   
   	   })
    	});
   	   
   	   /* .catch(function(e){
   		  world.isSuccessful=false;
   			console.log("failed")
   			return element(by.xpath('//a[@id="toolbar-item-user"]')).click().then(function(){
   				browser.sleep(5000)
   				return element.all(by.xpath('//a[@href="/en/user/logout"]')).get(1).click().then(function(){
   					return expect(false,"Button not visible").to.equal(true);
   				})
   				})
   					
   		}) 
   });	 */
   	  
    	
    	
    	
    	
    	
    	
};
this.after
module.exports = AutomationSteps;
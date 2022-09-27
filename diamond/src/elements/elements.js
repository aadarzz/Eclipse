var ElementList =function(){
	'use strict';
	var XLSX = require('xlsx');
	var wb = XLSX.readFile(process.cwd() + "\\TestData.xlsx");
	var sh = wb.SheetNames[0];
	var worksheet = wb.Sheets[sh];
	var cell1='A2'
	var cell2='B2'
	var cell3='A4'
	var readValue1 = worksheet[cell1];
	var readValue2 = worksheet[cell2];
	var readValue3 = worksheet[cell3];
	var Mail_id=readValue1.v;
	var Password=readValue2.v;
	var data=readValue3.v;
	//var data = 'google';
	var fn = 'test';
	var ln = 'name';
	var mob = '9887788600';
	var pass ='Qwerty@123';
	//var day 
	//var month
	//var year 
	//var gender
		         this.Menus={
	
          };
		         this.url={
		        		 facebook :"https://www.facebook.com/",
		        		 Linkedin_URL :"https://www.linkedin.com/",
		        		 google :"https://www.google.com/",
		        		 Home_page:"https://www.linkedin.com/feed/",
		        		 amazon:"https://www.amazon.in/"
		        		};
		      this.Elements={
		    		  searchbox :element(by.xpath('//input[@class="gLFyf gsfi"]')),
				      search :element(by.xpath('//input[@class="gNO89b"]')),
				      

				      fnbox :element(by.xpath('//input[@id="u_0_f"]')),
				      lnbox :element(by.xpath('//input[@id="u_0_h"]')),
				      mebox :element(by.xpath('//input[@id="u_0_k"]')),
				      passbox :element(by.xpath('//input[@id="u_0_p"]')),
				      daylist :element(by.xpath('//option[contains(text(),"20")]')),
				      monthlist :element(by.xpath('//option[contains(text(),"Feb")]')),
				      yearlist :element(by.xpath('//option[contains(text(),"1997")]')),
				      gradio :element(by.xpath('//input[@id="u_0_a"]')),
				      Signup :element.all(by.xpath('//button[contains(text(),"Sign Up")]')).get(0),
				      heading :element(by.xpath('//label[contains(text(),"Email or Phone")]')),
				      
				      
				   
				      account :element(by.xpath('//span[contains(text(),"Hello. Sign in")]')),
				      signin :element(by.xpath('//span[@class="nav-action-inner"][contains(.,"Sign in")]')),
				      create :element(by.xpath('//a[@id="createAccountSubmit"]')),
				      namebox :element(by.xpath('//input[@id="ap_customer_name"]')),
				      phbox :element(by.xpath('//input[@id="ap_phone_number"]')),
				      mailbox :element(by.xpath('//input[@id="ap_email"]')),
				      pbox :element(by.xpath('//input[@id="ap_password"]')),
				      sup :element(by.xpath('//input[@id="continue"]')),
				      
				      heading :element(by.xpath('//label[contains(text(),"Email or Phone")]')),
				    //select[@id='day']/option[10]
				    //option[contains(text(),"1997")]
		    		 };
		      
		      this.TestData={
		    		  data :data,
		    		  fn :fn,
		    		  ln :ln,
		    		  mob :mob,
		    		  pass :pass,
		    		  Mail_id :Mail_id
		    		  };          
}
 
module.exports = ElementList;

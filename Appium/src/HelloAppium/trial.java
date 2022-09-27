package HelloAppium;


import java.net.URL;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.AppiumDriver;




public class trial {
	
	static AppiumDriver driver;

	
	public static void main(String[]args){
	try{
			   System.out.print("---Appium Started---");
			   openCalculator();
		}catch(Exception exp){
		   
		        System.out.print(exp.getCause());
		        System.out.print(exp.getMessage());
		        exp.printStackTrace();
		} 
		        
	} 
		  
	public static void openCalculator()throws Exception{

		DesiredCapabilities desiredCapabilities = new DesiredCapabilities();
	    desiredCapabilities.setCapability("appium:deviceName", "Pixel 4 API 29");
	    desiredCapabilities.setCapability("appium:appPackage", "com.google.android.calculator");
	    desiredCapabilities.setCapability("appium:appActivity", "com.android.calculator2.Calculator");
	    desiredCapabilities.setCapability("appium:platformName", "Android");
	    desiredCapabilities.setCapability("appium:newCommandTimeout", 3600);
	    desiredCapabilities.setCapability("appium:connectHardwareKeyboard", true);

		    URL remoteUrl = new URL("http://localhost:4723/wd/hub");

		    driver = new AppiumDriver(remoteUrl, desiredCapabilities);		    
			  
			  //Elements (1+2=)
			  WebElement one = driver.findElement(By.id("com.google.android.calculator:id/digit_1"));
			  WebElement sum = driver.findElement(By.id("com.google.android.calculator:id/op_add"));  
			  WebElement two = driver.findElement(By.id("com.google.android.calculator:id/digit_2"));  
			  WebElement equal = driver.findElement(By.id("com.google.android.calculator:id/eq"));		  
			  
			  //Actions
			  one.click();
			  sum.click();
			  two.click();
			  equal.click();		  
			  
			  WebElement result = driver.findElement(By.id("com.google.android.calculator:id/result_final"));
			  String res = result.getText();
			  String exp = "3";
			  if(res.equals(exp))
			  {
				  System.out.println("Test Passed \n Result="+res);
				  
			  }
			  else
			  {
				  System.out.println("Test Failed \n Result="+res);
			  }
			 			  			  
			  
		driver.quit();
		System.out.print("---Test Completed---");
		
	

	}
}


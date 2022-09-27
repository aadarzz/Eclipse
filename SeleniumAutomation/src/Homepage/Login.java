package Homepage;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Login {

    public static void main(String[] args) {
    	System.setProperty("webdriver.chrome.driver","C://Users//aadar//AppData//Roaming//npm//node_modules//protractor//node_modules//webdriver-manager//selenium//chromedriver_103.0.5060.134.exe");
        WebDriver driver = new ChromeDriver();
//        forgotPassword(driver);
        loginTest(driver);
        AddEssay.AddEssaytest(driver);
      
    }
    
    private static void AddEssaytest(WebDriver driver) {
        // TODO Auto-generated method stub
        
    }

    public static void loginTest(WebDriver driver) {
        driver.get("http://ceadev.livares.com/admin-login/");
        WebElement txtbx_username =  driver.findElement(By.name("user_email"));
        txtbx_username.sendKeys("admin@clearessays.com");
        driver.findElement(By.name("password")).sendKeys("123456");
        driver.findElement(By.xpath("//button[@type='submit']")).click();
        String expected_title = "CE Answer - Admin";
       
        
        
        
        
    }
        public static void forgotPassword(WebDriver driver) {
        driver.get("http://ceadev.livares.com/admin-login/");
        driver.findElement(By.xpath("//a[@href='http://ceadev.livares.com/admin-forgot-password']")).click();
        driver.findElement(By.name("user_email_id")).sendKeys("admin@clearessays.com");
    }

    }
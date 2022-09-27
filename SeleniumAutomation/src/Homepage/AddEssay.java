package Homepage;



import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class AddEssay {
    

    public static void EssayType() {

//    	System.setProperty("webdriver.chrome.driver","C://Users//aadar//AppData//Roaming//npm//node_modules//protractor//node_modules//webdriver-manager//selenium//chromedriver_103.0.5060.134.exe");
        WebDriver driver  = new ChromeDriver();
        AddEssaytest(driver);
        DropDowntest(driver);
    }
    
        private static void DropDowntest(WebDriver driver) {
        // TODO Auto-generated method stub
        
    }

        private static void SelectEssayType(WebDriver driver) {
        
        
    

        Select dropSelectEssayType = new Select(driver.findElement(By.id("essay_type")));
        dropSelectEssayType.selectByVisibleText("Question");
        driver.findElement(By.xpath("//button[@type='submit']")).click();
        }
        
    

    public static void AddEssaytest(WebDriver driver) {
        SelectEssayType(driver);
        driver.findElement(By.xpath("//a[@href='http://ceadev.livares.com/admin/add-essay']")).click();
        driver.findElement(By.name("title")).sendKeys(("Animal Science"));
        Select dropCategory = new Select(driver.findElement(By.name("category")));
        dropCategory.selectByVisibleText("Banking");
        Select dropfiletype = new Select(driver.findElement(By.name("type")));
        dropfiletype.selectByVisibleText("DOCX");
        driver.findElement(By.className("cke_editable cke_editable_themed cke_contents_ltr")).sendKeys("optics");
   
        driver.findElement(By.cssSelector(".cke_editable")).sendKeys("optics");
   



        
        
//        Select dropPaid = new Select(driver.findElement(By.name("paid")));
//        dropPaid.selectByVisibleText("Free");
        WebElement upload_file = driver.findElement(By.xpath("//input[@id='sampleFile']"));
        upload_file.sendKeys("C://Users//user//Desktop//life science.jpg");
        
        WebElement upload_file1 = driver.findElement(By.xpath("//input[@id='masterFile']"));
        upload_file1.sendKeys("C://Users//user//Desktop//optics.pdf");
        driver.findElement(By.name("uploaded2")).click();
        driver.findElement(By.xpath("//button[@type='submit']")).click();
    }

    private static By getDriver() {
        // TODO Auto-generated method stub
        return null;
//    }

}
}

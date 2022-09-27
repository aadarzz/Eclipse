package RestAssured;

import org.testng.annotations.Test;

import io.restassured.RestAssured;
import io.restassured.RestAssured.*;
import io.restassured.matcher.RestAssuredMatchers.*;


public class AppTest 
{
  
    @Test
    public void appTest()
    {
        RestAssured.baseURI= "https://reqres.in/api/users";
        
        RestAssured.given().param("page", "2")       
        .when()
        .get()
        .then()
        .assertThat()
        .log()
        .all()
        .statusCode(200);
    }
}




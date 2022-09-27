package RestAssured;

import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.RestAssured;
import io.restassured.response.Response;

public class restapitest {
	@Test
	
	public void apitest() {
		
		Response response = RestAssured.get("https://reqres.in/api/users?page=2");
		System.out.println(response.getStatusCode());
		System.out.println(response.getTime());
		System.out.println(response.getBody().asString());
		System.out.println(response.getHeader("content-type"));
		
		int Status = response.getStatusCode();
		
		
		Assert.assertEquals(Status, 200);
		
		
		
		
		
	}

}

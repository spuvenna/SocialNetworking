package resources;

import static io.restassured.RestAssured.given;

import java.util.Map;

import org.apache.log4j.Logger;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class RequestRunner {
	static Logger log = Logger.getLogger("RequestRunner");
	static Response serviceResponse;

	//GET API with input params
	public static Response getWithInputParams(Map<String,String> headers,String url,Map<String,String> requestParams) {  

		RequestSpecBuilder reqBuilder = new RequestSpecBuilder();			
		if(headers!=null) {
			reqBuilder.addHeaders(headers); 
		}

		reqBuilder.addQueryParams(requestParams);
		RequestSpecification requestSpec = reqBuilder.build();		
		try {
			serviceResponse = given()
					.spec(requestSpec)
					.relaxedHTTPSValidation()
					.when()
					.request("Get",url);
		}
		catch(Exception e) {
			log.error("Encountered exception while sending API request "+e.getMessage());
			e.printStackTrace();
		}
		return serviceResponse;
	}
}

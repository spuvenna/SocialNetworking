package stepDefinations;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;

import java.io.IOException;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import resources.APIResources;
import resources.TestDataBuild;
import resources.Utils;

/**
 * 
 * @author Sowmya
 * StepDefination class has the complete implementation for the feature file
 *
 */
public class StepDefination extends Utils {

	RequestSpecification res;
	ResponseSpecification resspec;
	Response response;
	TestDataBuild data = new TestDataBuild();

	private static Logger log = LogManager.getLogger(StepDefination.class.getName());

	@Given("New Post Payload {string} {string} {string}")
	public void new_post_payload(String title, String body, String user) throws IOException {
		log.info("Starting of Post API execution");
		int userid = Integer.parseInt(user);
		res = given().spec(requestSpecification()).body(data.postPayLoad(title, body, userid));
	}

	@When("user calls NewPostAPI with http POST request")
	public void user_calls_new_post_api_with_http_post_request() {
		APIResources resourceAPI = APIResources.valueOf("NewPostAPI");
		log.info(resourceAPI);

		resspec = new ResponseSpecBuilder().expectStatusCode(201).expectContentType(ContentType.JSON).build();

		response = res.when().post(resourceAPI.getResource());
		log.info(response);
	}

	@Then("the {string} API call is success and status code is {string}")
	public void the_api_call_is_success_and_status_code_is(String method, String code) {
		if (method.equalsIgnoreCase("POST")) {
			int statusCode = Integer.parseInt(code);
			assertEquals(response.getStatusCode(), statusCode);
			log.info("Code is " + statusCode);
		}
	}

	@Given("GET payload")
	public void get_payload() throws IOException {
		log.info("Starting of GET API execution");
		res = given().spec(requestSpecification());
	}

	@When("User calls {string} with http GET request")
	public void user_calls_with_http_get_request(String string) {
		APIResources resourceAPI = APIResources.valueOf(string);
		log.info(resourceAPI);
		resspec = new ResponseSpecBuilder().expectStatusCode(200).expectContentType(ContentType.JSON).build();
		response = res.when().get(resourceAPI.getResource());
		log.info(response);
	}

}

package stepDefinations;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Assert;
import cucumber.api.DataTable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import reusable.ConfigUtils;
import resources.RequestRunner;
import resources.ResponseFromAPI;

/**
 * 
 * @author Sowmya StepDefination class has the complete implementation for the
 *         feature file
 *
 */
public class StepDefination {

	private static Logger log = LogManager.getLogger(StepDefination.class.getName());
	String microServiceURI;

	
	@Given("^User with (PostAPI|UserListAPI|CommentsAPI)$")
	public void userWith(String resource) {
		String baseUrl = ConfigUtils.retrieveValueForGivenKey("baseurl").toString();
		String apiEndPoint = ConfigUtils.retrieveValueForGivenKey(resource).toString();
		microServiceURI = baseUrl + apiEndPoint;
		log.info("API URI is '" + microServiceURI + "'");
	}

	
	@When("^User hits (posts|comments|users) with input parameters \"([^\"]*)\"$")
	public void userHitsWithInputParameters(String resource, String parameters) {
		String[] parameterList = parameters.split(",");
		Map<String, String> paramList = new HashMap<>();
		for (String param : parameterList) {
			paramList.put(param.split("-")[0].trim(), param.split("-")[1].trim());
		}
		RequestRunner.getWithInputParams(null, microServiceURI, paramList);
		log.info("Sent API Service Request for '" + microServiceURI + "' successfully");
	}

	@Then("^User validates the (PostAPI|UserListAPI|CommentsAPI) response code \"([^\"]*)\"$")
	public void userValidatesTheResponseCode(String resource, String code) {
		int respStatus = ResponseFromAPI.getStatusCode();
		log.info("The '" + resource + "' API Service has ran and returned '" + respStatus + "' response status code");
		Assert.assertEquals(code, String.valueOf(respStatus));
	}

	@Then("^User validates the (PostAPI|UserListAPI|CommentsAPI) number of (PostAPI|UserListAPI|CommentsAPI) from system \"([^\"]*)\"$")
	public void userValidatesTheNumberOfFromSystem(String resource, String apiType, String expectedObj) {
		String actualObj = String.valueOf(ResponseFromAPI.getListOfOjectsFromAPIResponse().size());
		Assert.assertEquals(actualObj, expectedObj);
		log.info("The '" + resource + "' response returned appropriate '" + resource + "' objects as expected");
	}

	@Then("^User validates the (PostAPI|UserListAPI|CommentsAPI) response with response details \"([^\"]*)\"$")
	public void userValidatesTheResponseWithResponseDetails(String resource, String params) {
		String[] paramList = params.split(",");
		List<Map<?, ?>> respObjsList = ResponseFromAPI.getListOfOjectsFromAPIResponse();
		boolean validationFailed = false;

		for (int i = 0; i < paramList.length; i++) {
			for (int j = 0; j < respObjsList.size(); j++) {
				Map<?, ?> respObj = respObjsList.get(j);
				String paramName = paramList[i].split("-")[0].trim();
				String value = paramList[i].split("-")[1].trim();
				if (!value.equalsIgnoreCase(respObj.get(paramName).toString())) {
					log.info("Failed param/value are " + paramName + "--" + value);
					validationFailed = true;
					break;
				}
			}
		}
		Assert.assertTrue(!validationFailed);
		log.info("The '" + resource + "' response returned with appropriate details");
	}

	@Then("^User validates (PostAPI|UserListAPI|CommentsAPI) response including attributes$")
	public void user_validates_response_including_attributes(String resource, DataTable attributes) {
		List<String> attributesList = attributes.transpose().asList(String.class);
		Map<?, ?> postObject = ResponseFromAPI.getListOfOjectsFromAPIResponse().get(0);
		boolean attributeNotFound = false;
		for (String key : attributesList) {
			if (!postObject.containsKey(key)) {
				log.info("Given attribute '" + key + "' is not found in '" + resource + "' reponse");
				attributeNotFound = true;
				break;
			}
		}
		Assert.assertTrue(!attributeNotFound);
		log.info("Input attributes are present in response");
	}
}

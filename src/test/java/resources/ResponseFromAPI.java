package resources;

import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;

import com.jayway.jsonpath.JsonPath;

public class ResponseFromAPI {
	
	static Logger log = Logger.getLogger("ResponseFromAPI");

	//Method to return status code in integer
	public static int getStatusCode() {	
		int statusCode = 0;
		try {
			statusCode = RequestRunner.serviceResponse.getStatusCode();
			log.info("Successfully retrieved the response code from API response");
		}
		catch(NullPointerException e) {
			log.error("Exception while retrieving response status code : "+e.getMessage());
			e.printStackTrace();
		}
		return statusCode;
	}	

	//Method returns JSON object response
	public static List<Map<?,?>> getListOfOjectsFromAPIResponse() {		
		List<Map<?,?>> jsonObjects = null;
		try {
			jsonObjects = JsonPath.read(RequestRunner.serviceResponse.asString(), "$");		
		}
		catch(Exception e) {
			log.error("Exception while parsing the response : "+e.getMessage());			
			e.printStackTrace();
		}
		return jsonObjects;
	}

}

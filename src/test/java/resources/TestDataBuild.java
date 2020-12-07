package resources;

import pojo.PostBody;

/**
 * 
 * @author Sowmya
 * This class to set the data and returns the body to the API
 * return type is a pojo class PostBody
 *
 */

public class TestDataBuild {
	public PostBody postPayLoad(String title, String body, int userID) {
		PostBody p = new PostBody();
		p.setTitle(title);
		p.setBody(body);
		p.setUserID(userID);
		return p;
	}
}

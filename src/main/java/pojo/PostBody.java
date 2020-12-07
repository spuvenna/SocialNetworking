package pojo;

/**
 * 
 * @author Sowmya
 * Pojo class is used for getter and setter methods
 *
 */

public class PostBody {
	private String title;
	private String body;
	private int userID;
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
	public int getUserID() {
		return userID;
	}
	public void setUserID(int userID) {
		this.userID = userID;
	}
}

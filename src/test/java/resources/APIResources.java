package resources;

/**
 * 
 * @author Sowmya enum is special class in java which has collection of
 *         constants or methods
 */

public enum APIResources {

	NewPostAPI("/posts"), CommentsAPI("/comments"), UserListAPI("/users");

	private String resource;

	APIResources(String resource) {
		this.resource = resource;
	}

	public String getResource() {
		return resource;
	}

}

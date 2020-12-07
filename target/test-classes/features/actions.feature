Feature: Validating New Post,Get Comments APIs for Social Networking Site 

Scenario: Verify New Post 
	Given New Post Payload "TitleTest" "TestBody" "25" 
	When user calls NewPostAPI with http POST request 
	Then the "POST" API call is success and status code is "201" 
	
Scenario: Verify UserList 
	Given GET payload 
	When User calls "UserListAPI" with http GET request 
	Then the "GET" API call is success and status code is "200" 
	
Scenario: Verify Comments 
	Given GET payload 
	When User calls "CommentsAPI" with http GET request 
	Then the "GET" API call is success and status code is "200"
@testAPIValues 
Feature: Validating New Post,Get Comments APIs for Social Networking Site 
@postAPI 
Scenario Outline: 
	Verify "POST" service and ensure response returns "Post" content from system 
	Given User with PostAPI 
	When User hits PostAPI with input parameters "<parameters>" 
	Then User validates the PostAPI response code "<status>" 
	And User validates the PostAPI number of PostAPI from system "<numofposts>" 
	And User validates the PostAPI response with response details "<parameters>" 
	And User validates PostAPI response including attributes 
    |userId   |
    |id       |
    |title    |
    |body     |
	Examples: 
		| parameters                |  status    |numofposts    |
		| userId - 2                |  200       |5             |
		| id - 10                   |  200       |1             |
		| id - 10, userId - 2       |  200       |1             |
		
		
		@getUserListAPI 
		Scenario Outline: 
			Verify "Users" API and gets appropriate "User" information from system 
			Given User with UserListAPI 
			When User hits UserListAPI with input parameters "<parameters>" 
			Then User validates the UserListAPI response code "<status>" 
			And User validates the UserListAPI number of UserListAPI from system "<numofusers>" 
			And User validates the UserListAPI response with response details "<parameters>" 
			And User validates UserListAPI response including attributes 
				|id       |
				|name     |
				|phone    |
				|email    |    
				|website  |
				|company  |
				|address  |
				
			Examples: 
				|parameters                                                            |  status    |numofusers    |
				| id - 1                                                               |  200       |1             |
				| username - Bret		                                               |  200       |1             |
				| name - Ervin Howell,website - Shanna@melissa.tv,username - Antonette |  200       |1             |
				
				@getCommentsAPI 
				Scenario Outline: 
					Verify "Comments" API and gets appropriate "Comment" information from system 
					Given User with CommentsAPI 
					When User hits CommentsAPI with input parameters "<parameters>" 
					Then User validates the CommentsAPI response code "<status>" 
					And User validates the CommentsAPI number of CommentsAPI from system "<numofcomments>" 
					And User validates the CommentsAPI response with response details "<parameters>" 
					And User validates CommentsAPI response including attributes 
						|postId   |
						|id       |
						|name     |   
						|body     |
						|email    |
						
					Examples: 
						|parameters                       |  status    |numofcomments |
						| postId - 1                      |  200       |5             |
						| email - Eliseo@gardner.biz	  |  200       |1             |
						| postId - 1,id - 5               |  200       |1             |
						
						
					
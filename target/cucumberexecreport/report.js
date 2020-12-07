$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("actions.feature");
formatter.feature({
  "line": 2,
  "name": "Validating New Post,Get Comments APIs for Social Networking Site",
  "description": "",
  "id": "validating-new-post,get-comments-apis-for-social-networking-site",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@testAPIValues"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "Verify \"POST\" service and ensure response returns \"Post\" content from system",
  "id": "validating-new-post,get-comments-apis-for-social-networking-site;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@postAPI"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User with PostAPI",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User hits PostAPI with input parameters \"\u003cparameters\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User validates the PostAPI response code \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User validates the PostAPI number of PostAPI from system \"\u003cnumofposts\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User validates the PostAPI response with response details \"\u003cparameters\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User validates PostAPI response including attributes",
  "rows": [
    {
      "cells": [
        "userId"
      ],
      "line": 12
    },
    {
      "cells": [
        "id"
      ],
      "line": 13
    },
    {
      "cells": [
        "title"
      ],
      "line": 14
    },
    {
      "cells": [
        "body"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "validating-new-post,get-comments-apis-for-social-networking-site;;",
  "rows": [
    {
      "cells": [
        "parameters",
        "status",
        "numofposts"
      ],
      "line": 17,
      "id": "validating-new-post,get-comments-apis-for-social-networking-site;;;1"
    },
    {
      "cells": [
        "userId - 2",
        "200",
        "5"
      ],
      "line": 18,
      "id": "validating-new-post,get-comments-apis-for-social-networking-site;;;2"
    },
    {
      "cells": [
        "id - 10",
        "200",
        "1"
      ],
      "line": 19,
      "id": "validating-new-post,get-comments-apis-for-social-networking-site;;;3"
    },
    {
      "cells": [
        "id - 10, userId - 2",
        "200",
        "1"
      ],
      "line": 20,
      "id": "validating-new-post,get-comments-apis-for-social-networking-site;;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 624200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "",
  "description": "Verify \"POST\" service and ensure response returns \"Post\" content from system",
  "id": "validating-new-post,get-comments-apis-for-social-networking-site;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@testAPIValues"
    },
    {
      "line": 3,
      "name": "@postAPI"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User with PostAPI",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User hits PostAPI with input parameters \"userId - 2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User validates the PostAPI response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User validates the PostAPI number of PostAPI from system \"5\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User validates the PostAPI response with response details \"userId - 2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User validates PostAPI response including attributes",
  "rows": [
    {
      "cells": [
        "userId"
      ],
      "line": 12
    },
    {
      "cells": [
        "id"
      ],
      "line": 13
    },
    {
      "cells": [
        "title"
      ],
      "line": 14
    },
    {
      "cells": [
        "body"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "PostAPI",
      "offset": 10
    }
  ],
  "location": "StepDefination.userWith(String)"
});
formatter.result({
  "duration": 419551300,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "PostAPI",
      "offset": 19
    },
    {
      "val": "200",
      "offset": 42
    }
  ],
  "location": "StepDefination.userValidatesTheResponseCode(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PostAPI",
      "offset": 19
    },
    {
      "val": "PostAPI",
      "offset": 37
    },
    {
      "val": "5",
      "offset": 58
    }
  ],
  "location": "StepDefination.userValidatesTheNumberOfFromSystem(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PostAPI",
      "offset": 19
    },
    {
      "val": "userId - 2",
      "offset": 59
    }
  ],
  "location": "StepDefination.userValidatesTheResponseWithResponseDetails(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PostAPI",
      "offset": 15
    }
  ],
  "location": "StepDefination.user_validates_response_including_attributes(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 475100,
  "status": "passed"
});
formatter.before({
  "duration": 596600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "",
  "description": "Verify \"POST\" service and ensure response returns \"Post\" content from system",
  "id": "validating-new-post,get-comments-apis-for-social-networking-site;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@testAPIValues"
    },
    {
      "line": 3,
      "name": "@postAPI"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User with PostAPI",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User hits PostAPI with input parameters \"id - 10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User validates the PostAPI response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User validates the PostAPI number of PostAPI from system \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User validates the PostAPI response with response details \"id - 10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User validates PostAPI response including attributes",
  "rows": [
    {
      "cells": [
        "userId"
      ],
      "line": 12
    },
    {
      "cells": [
        "id"
      ],
      "line": 13
    },
    {
      "cells": [
        "title"
      ],
      "line": 14
    },
    {
      "cells": [
        "body"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "PostAPI",
      "offset": 10
    }
  ],
  "location": "StepDefination.userWith(String)"
});
formatter.result({
  "duration": 924200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "PostAPI",
      "offset": 19
    },
    {
      "val": "200",
      "offset": 42
    }
  ],
  "location": "StepDefination.userValidatesTheResponseCode(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PostAPI",
      "offset": 19
    },
    {
      "val": "PostAPI",
      "offset": 37
    },
    {
      "val": "1",
      "offset": 58
    }
  ],
  "location": "StepDefination.userValidatesTheNumberOfFromSystem(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PostAPI",
      "offset": 19
    },
    {
      "val": "id - 10",
      "offset": 59
    }
  ],
  "location": "StepDefination.userValidatesTheResponseWithResponseDetails(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PostAPI",
      "offset": 15
    }
  ],
  "location": "StepDefination.user_validates_response_including_attributes(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 510500,
  "status": "passed"
});
formatter.before({
  "duration": 574200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "",
  "description": "Verify \"POST\" service and ensure response returns \"Post\" content from system",
  "id": "validating-new-post,get-comments-apis-for-social-networking-site;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@testAPIValues"
    },
    {
      "line": 3,
      "name": "@postAPI"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User with PostAPI",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User hits PostAPI with input parameters \"id - 10, userId - 2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User validates the PostAPI response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User validates the PostAPI number of PostAPI from system \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User validates the PostAPI response with response details \"id - 10, userId - 2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User validates PostAPI response including attributes",
  "rows": [
    {
      "cells": [
        "userId"
      ],
      "line": 12
    },
    {
      "cells": [
        "id"
      ],
      "line": 13
    },
    {
      "cells": [
        "title"
      ],
      "line": 14
    },
    {
      "cells": [
        "body"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "PostAPI",
      "offset": 10
    }
  ],
  "location": "StepDefination.userWith(String)"
});
formatter.result({
  "duration": 1710600,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "PostAPI",
      "offset": 19
    },
    {
      "val": "200",
      "offset": 42
    }
  ],
  "location": "StepDefination.userValidatesTheResponseCode(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PostAPI",
      "offset": 19
    },
    {
      "val": "PostAPI",
      "offset": 37
    },
    {
      "val": "1",
      "offset": 58
    }
  ],
  "location": "StepDefination.userValidatesTheNumberOfFromSystem(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PostAPI",
      "offset": 19
    },
    {
      "val": "id - 10, userId - 2",
      "offset": 59
    }
  ],
  "location": "StepDefination.userValidatesTheResponseWithResponseDetails(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "PostAPI",
      "offset": 15
    }
  ],
  "location": "StepDefination.user_validates_response_including_attributes(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 382600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "",
  "description": "Verify \"Users\" API and gets appropriate \"User\" information from system",
  "id": "validating-new-post,get-comments-apis-for-social-networking-site;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@getUserListAPI"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User with UserListAPI",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "User hits UserListAPI with input parameters \"\u003cparameters\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User validates the UserListAPI response code \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User validates the UserListAPI number of UserListAPI from system \"\u003cnumofusers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User validates the UserListAPI response with response details \"\u003cparameters\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User validates UserListAPI response including attributes",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 32
    },
    {
      "cells": [
        "name"
      ],
      "line": 33
    },
    {
      "cells": [
        "phone"
      ],
      "line": 34
    },
    {
      "cells": [
        "email"
      ],
      "line": 35
    },
    {
      "cells": [
        "website"
      ],
      "line": 36
    },
    {
      "cells": [
        "company"
      ],
      "line": 37
    },
    {
      "cells": [
        "address"
      ],
      "line": 38
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "validating-new-post,get-comments-apis-for-social-networking-site;;",
  "rows": [
    {
      "cells": [
        "parameters",
        "status",
        "numofusers"
      ],
      "line": 41,
      "id": "validating-new-post,get-comments-apis-for-social-networking-site;;;1"
    },
    {
      "cells": [
        "id - 1",
        "200",
        "1"
      ],
      "line": 42,
      "id": "validating-new-post,get-comments-apis-for-social-networking-site;;;2"
    },
    {
      "cells": [
        "username - Bret",
        "200",
        "1"
      ],
      "line": 43,
      "id": "validating-new-post,get-comments-apis-for-social-networking-site;;;3"
    },
    {
      "cells": [
        "name - Ervin Howell,website - Shanna@melissa.tv,username - Antonette",
        "200",
        "1"
      ],
      "line": 44,
      "id": "validating-new-post,get-comments-apis-for-social-networking-site;;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 689600,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "",
  "description": "Verify \"Users\" API and gets appropriate \"User\" information from system",
  "id": "validating-new-post,get-comments-apis-for-social-networking-site;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@testAPIValues"
    },
    {
      "line": 23,
      "name": "@getUserListAPI"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User with UserListAPI",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "User hits UserListAPI with input parameters \"id - 1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User validates the UserListAPI response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User validates the UserListAPI number of UserListAPI from system \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User validates the UserListAPI response with response details \"id - 1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User validates UserListAPI response including attributes",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 32
    },
    {
      "cells": [
        "name"
      ],
      "line": 33
    },
    {
      "cells": [
        "phone"
      ],
      "line": 34
    },
    {
      "cells": [
        "email"
      ],
      "line": 35
    },
    {
      "cells": [
        "website"
      ],
      "line": 36
    },
    {
      "cells": [
        "company"
      ],
      "line": 37
    },
    {
      "cells": [
        "address"
      ],
      "line": 38
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "UserListAPI",
      "offset": 10
    }
  ],
  "location": "StepDefination.userWith(String)"
});
formatter.result({
  "duration": 686200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "UserListAPI",
      "offset": 19
    },
    {
      "val": "200",
      "offset": 46
    }
  ],
  "location": "StepDefination.userValidatesTheResponseCode(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "UserListAPI",
      "offset": 19
    },
    {
      "val": "UserListAPI",
      "offset": 41
    },
    {
      "val": "1",
      "offset": 66
    }
  ],
  "location": "StepDefination.userValidatesTheNumberOfFromSystem(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "UserListAPI",
      "offset": 19
    },
    {
      "val": "id - 1",
      "offset": 63
    }
  ],
  "location": "StepDefination.userValidatesTheResponseWithResponseDetails(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "UserListAPI",
      "offset": 15
    }
  ],
  "location": "StepDefination.user_validates_response_including_attributes(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 319400,
  "status": "passed"
});
formatter.before({
  "duration": 399900,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "",
  "description": "Verify \"Users\" API and gets appropriate \"User\" information from system",
  "id": "validating-new-post,get-comments-apis-for-social-networking-site;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@testAPIValues"
    },
    {
      "line": 23,
      "name": "@getUserListAPI"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User with UserListAPI",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "User hits UserListAPI with input parameters \"username - Bret\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User validates the UserListAPI response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User validates the UserListAPI number of UserListAPI from system \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User validates the UserListAPI response with response details \"username - Bret\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User validates UserListAPI response including attributes",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 32
    },
    {
      "cells": [
        "name"
      ],
      "line": 33
    },
    {
      "cells": [
        "phone"
      ],
      "line": 34
    },
    {
      "cells": [
        "email"
      ],
      "line": 35
    },
    {
      "cells": [
        "website"
      ],
      "line": 36
    },
    {
      "cells": [
        "company"
      ],
      "line": 37
    },
    {
      "cells": [
        "address"
      ],
      "line": 38
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "UserListAPI",
      "offset": 10
    }
  ],
  "location": "StepDefination.userWith(String)"
});
formatter.result({
  "duration": 784200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "UserListAPI",
      "offset": 19
    },
    {
      "val": "200",
      "offset": 46
    }
  ],
  "location": "StepDefination.userValidatesTheResponseCode(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "UserListAPI",
      "offset": 19
    },
    {
      "val": "UserListAPI",
      "offset": 41
    },
    {
      "val": "1",
      "offset": 66
    }
  ],
  "location": "StepDefination.userValidatesTheNumberOfFromSystem(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "UserListAPI",
      "offset": 19
    },
    {
      "val": "username - Bret",
      "offset": 63
    }
  ],
  "location": "StepDefination.userValidatesTheResponseWithResponseDetails(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "UserListAPI",
      "offset": 15
    }
  ],
  "location": "StepDefination.user_validates_response_including_attributes(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 354900,
  "status": "passed"
});
formatter.before({
  "duration": 465700,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "",
  "description": "Verify \"Users\" API and gets appropriate \"User\" information from system",
  "id": "validating-new-post,get-comments-apis-for-social-networking-site;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@testAPIValues"
    },
    {
      "line": 23,
      "name": "@getUserListAPI"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User with UserListAPI",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "User hits UserListAPI with input parameters \"name - Ervin Howell,website - Shanna@melissa.tv,username - Antonette\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User validates the UserListAPI response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User validates the UserListAPI number of UserListAPI from system \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User validates the UserListAPI response with response details \"name - Ervin Howell,website - Shanna@melissa.tv,username - Antonette\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User validates UserListAPI response including attributes",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 32
    },
    {
      "cells": [
        "name"
      ],
      "line": 33
    },
    {
      "cells": [
        "phone"
      ],
      "line": 34
    },
    {
      "cells": [
        "email"
      ],
      "line": 35
    },
    {
      "cells": [
        "website"
      ],
      "line": 36
    },
    {
      "cells": [
        "company"
      ],
      "line": 37
    },
    {
      "cells": [
        "address"
      ],
      "line": 38
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "UserListAPI",
      "offset": 10
    }
  ],
  "location": "StepDefination.userWith(String)"
});
formatter.result({
  "duration": 648400,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "UserListAPI",
      "offset": 19
    },
    {
      "val": "200",
      "offset": 46
    }
  ],
  "location": "StepDefination.userValidatesTheResponseCode(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "UserListAPI",
      "offset": 19
    },
    {
      "val": "UserListAPI",
      "offset": 41
    },
    {
      "val": "1",
      "offset": 66
    }
  ],
  "location": "StepDefination.userValidatesTheNumberOfFromSystem(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "UserListAPI",
      "offset": 19
    },
    {
      "val": "name - Ervin Howell,website - Shanna@melissa.tv,username - Antonette",
      "offset": 63
    }
  ],
  "location": "StepDefination.userValidatesTheResponseWithResponseDetails(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "UserListAPI",
      "offset": 15
    }
  ],
  "location": "StepDefination.user_validates_response_including_attributes(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 355700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "",
  "description": "Verify \"Comments\" API and gets appropriate \"Comment\" information from system",
  "id": "validating-new-post,get-comments-apis-for-social-networking-site;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@getCommentsAPI"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "User with CommentsAPI",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "User hits CommentsAPI with input parameters \"\u003cparameters\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "User validates the CommentsAPI response code \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "User validates the CommentsAPI number of CommentsAPI from system \"\u003cnumofcomments\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User validates the CommentsAPI response with response details \"\u003cparameters\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User validates CommentsAPI response including attributes",
  "rows": [
    {
      "cells": [
        "postId"
      ],
      "line": 55
    },
    {
      "cells": [
        "id"
      ],
      "line": 56
    },
    {
      "cells": [
        "name"
      ],
      "line": 57
    },
    {
      "cells": [
        "body"
      ],
      "line": 58
    },
    {
      "cells": [
        "email"
      ],
      "line": 59
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 61,
  "name": "",
  "description": "",
  "id": "validating-new-post,get-comments-apis-for-social-networking-site;;",
  "rows": [
    {
      "cells": [
        "parameters",
        "status",
        "numofcomments"
      ],
      "line": 62,
      "id": "validating-new-post,get-comments-apis-for-social-networking-site;;;1"
    },
    {
      "cells": [
        "postId - 1",
        "200",
        "5"
      ],
      "line": 63,
      "id": "validating-new-post,get-comments-apis-for-social-networking-site;;;2"
    },
    {
      "cells": [
        "email - Eliseo@gardner.biz",
        "200",
        "1"
      ],
      "line": 64,
      "id": "validating-new-post,get-comments-apis-for-social-networking-site;;;3"
    },
    {
      "cells": [
        "postId - 1,id - 5",
        "200",
        "1"
      ],
      "line": 65,
      "id": "validating-new-post,get-comments-apis-for-social-networking-site;;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 490300,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "",
  "description": "Verify \"Comments\" API and gets appropriate \"Comment\" information from system",
  "id": "validating-new-post,get-comments-apis-for-social-networking-site;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@testAPIValues"
    },
    {
      "line": 46,
      "name": "@getCommentsAPI"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "User with CommentsAPI",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "User hits CommentsAPI with input parameters \"postId - 1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "User validates the CommentsAPI response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "User validates the CommentsAPI number of CommentsAPI from system \"5\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User validates the CommentsAPI response with response details \"postId - 1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User validates CommentsAPI response including attributes",
  "rows": [
    {
      "cells": [
        "postId"
      ],
      "line": 55
    },
    {
      "cells": [
        "id"
      ],
      "line": 56
    },
    {
      "cells": [
        "name"
      ],
      "line": 57
    },
    {
      "cells": [
        "body"
      ],
      "line": 58
    },
    {
      "cells": [
        "email"
      ],
      "line": 59
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "CommentsAPI",
      "offset": 10
    }
  ],
  "location": "StepDefination.userWith(String)"
});
formatter.result({
  "duration": 1248100,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "CommentsAPI",
      "offset": 19
    },
    {
      "val": "200",
      "offset": 46
    }
  ],
  "location": "StepDefination.userValidatesTheResponseCode(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CommentsAPI",
      "offset": 19
    },
    {
      "val": "CommentsAPI",
      "offset": 41
    },
    {
      "val": "5",
      "offset": 66
    }
  ],
  "location": "StepDefination.userValidatesTheNumberOfFromSystem(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CommentsAPI",
      "offset": 19
    },
    {
      "val": "postId - 1",
      "offset": 63
    }
  ],
  "location": "StepDefination.userValidatesTheResponseWithResponseDetails(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CommentsAPI",
      "offset": 15
    }
  ],
  "location": "StepDefination.user_validates_response_including_attributes(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 493900,
  "status": "passed"
});
formatter.before({
  "duration": 684000,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "",
  "description": "Verify \"Comments\" API and gets appropriate \"Comment\" information from system",
  "id": "validating-new-post,get-comments-apis-for-social-networking-site;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@testAPIValues"
    },
    {
      "line": 46,
      "name": "@getCommentsAPI"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "User with CommentsAPI",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "User hits CommentsAPI with input parameters \"email - Eliseo@gardner.biz\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "User validates the CommentsAPI response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "User validates the CommentsAPI number of CommentsAPI from system \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User validates the CommentsAPI response with response details \"email - Eliseo@gardner.biz\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User validates CommentsAPI response including attributes",
  "rows": [
    {
      "cells": [
        "postId"
      ],
      "line": 55
    },
    {
      "cells": [
        "id"
      ],
      "line": 56
    },
    {
      "cells": [
        "name"
      ],
      "line": 57
    },
    {
      "cells": [
        "body"
      ],
      "line": 58
    },
    {
      "cells": [
        "email"
      ],
      "line": 59
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "CommentsAPI",
      "offset": 10
    }
  ],
  "location": "StepDefination.userWith(String)"
});
formatter.result({
  "duration": 926800,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "CommentsAPI",
      "offset": 19
    },
    {
      "val": "200",
      "offset": 46
    }
  ],
  "location": "StepDefination.userValidatesTheResponseCode(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CommentsAPI",
      "offset": 19
    },
    {
      "val": "CommentsAPI",
      "offset": 41
    },
    {
      "val": "1",
      "offset": 66
    }
  ],
  "location": "StepDefination.userValidatesTheNumberOfFromSystem(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CommentsAPI",
      "offset": 19
    },
    {
      "val": "email - Eliseo@gardner.biz",
      "offset": 63
    }
  ],
  "location": "StepDefination.userValidatesTheResponseWithResponseDetails(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CommentsAPI",
      "offset": 15
    }
  ],
  "location": "StepDefination.user_validates_response_including_attributes(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 428300,
  "status": "passed"
});
formatter.before({
  "duration": 714300,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "",
  "description": "Verify \"Comments\" API and gets appropriate \"Comment\" information from system",
  "id": "validating-new-post,get-comments-apis-for-social-networking-site;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@testAPIValues"
    },
    {
      "line": 46,
      "name": "@getCommentsAPI"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "User with CommentsAPI",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "User hits CommentsAPI with input parameters \"postId - 1,id - 5\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "User validates the CommentsAPI response code \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "User validates the CommentsAPI number of CommentsAPI from system \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User validates the CommentsAPI response with response details \"postId - 1,id - 5\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User validates CommentsAPI response including attributes",
  "rows": [
    {
      "cells": [
        "postId"
      ],
      "line": 55
    },
    {
      "cells": [
        "id"
      ],
      "line": 56
    },
    {
      "cells": [
        "name"
      ],
      "line": 57
    },
    {
      "cells": [
        "body"
      ],
      "line": 58
    },
    {
      "cells": [
        "email"
      ],
      "line": 59
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "CommentsAPI",
      "offset": 10
    }
  ],
  "location": "StepDefination.userWith(String)"
});
formatter.result({
  "duration": 658800,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "CommentsAPI",
      "offset": 19
    },
    {
      "val": "200",
      "offset": 46
    }
  ],
  "location": "StepDefination.userValidatesTheResponseCode(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CommentsAPI",
      "offset": 19
    },
    {
      "val": "CommentsAPI",
      "offset": 41
    },
    {
      "val": "1",
      "offset": 66
    }
  ],
  "location": "StepDefination.userValidatesTheNumberOfFromSystem(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CommentsAPI",
      "offset": 19
    },
    {
      "val": "postId - 1,id - 5",
      "offset": 63
    }
  ],
  "location": "StepDefination.userValidatesTheResponseWithResponseDetails(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CommentsAPI",
      "offset": 15
    }
  ],
  "location": "StepDefination.user_validates_response_including_attributes(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 550000,
  "status": "passed"
});
});
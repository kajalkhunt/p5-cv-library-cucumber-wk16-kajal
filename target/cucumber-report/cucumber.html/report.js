$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobsearch.feature");
formatter.feature({
  "line": 1,
  "name": "Job Search",
  "description": "As a user I want to search for jobs",
  "id": "job-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to go on web",
  "description": "",
  "id": "job-search;user-should-be-able-to-go-on-web",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on pop up",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"\u003cjobTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select salaryMin \"\u003csalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salaryMax \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType\"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType\"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs Btn",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I get result \"\u003cresult\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "job-search;user-should-be-able-to-go-on-web;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 19,
      "id": "job-search;user-should-be-able-to-go-on-web;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "up to 5 miles",
        "30000",
        "500000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 20,
      "id": "job-search;user-should-be-able-to-go-on-web;;2"
    },
    {
      "cells": [
        "Teacher",
        "London",
        "up to 35 miles",
        "15000",
        "25000",
        "Per annum",
        "Permanent",
        "Teacher jobs in London"
      ],
      "line": 21,
      "id": "job-search;user-should-be-able-to-go-on-web;;3"
    },
    {
      "cells": [
        "Doctor",
        "London",
        "up to 25 miles",
        "25000",
        "35000",
        "Per annum",
        "Permanent",
        "Doctor jobs in London"
      ],
      "line": 22,
      "id": "job-search;user-should-be-able-to-go-on-web;;4"
    },
    {
      "cells": [
        "Accountant",
        "Harrow",
        "up to 15 miles",
        "25000",
        "35000",
        "Per annum",
        "Permanent",
        "Accountant jobs in Harrow on the Hill"
      ],
      "line": 23,
      "id": "job-search;user-should-be-able-to-go-on-web;;5"
    },
    {
      "cells": [
        "Tester",
        "London",
        "up to 10 miles",
        "35000",
        "55000",
        "Per annum",
        "Permanent",
        "Tester jobs in London"
      ],
      "line": 24,
      "id": "job-search;user-should-be-able-to-go-on-web;;6"
    },
    {
      "cells": [
        "Cashier",
        "London",
        "up to 15 miles",
        "25000",
        "35000",
        "Per annum",
        "Permanent",
        "Cashier jobs in London"
      ],
      "line": 25,
      "id": "job-search;user-should-be-able-to-go-on-web;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7177135300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should be able to go on web",
  "description": "",
  "id": "job-search;user-should-be-able-to-go-on-web;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on pop up",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select salaryMin \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salaryMax \"500000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType\"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType\"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs Btn",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I get result \"Permanent Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 232097500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnPopUp()"
});
formatter.result({
  "duration": 42479226800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 124401800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 131324300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 204901100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 222506200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMin(String)"
});
formatter.result({
  "duration": 171991700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMax(String)"
});
formatter.result({
  "duration": 121309500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 121699900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 158933200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsBtn()"
});
formatter.result({
  "duration": 152690600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow on the Hill",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iGetResult(String)"
});
formatter.result({
  "duration": 4402208500,
  "status": "passed"
});
formatter.after({
  "duration": 218900,
  "status": "passed"
});
formatter.before({
  "duration": 2849799200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should be able to go on web",
  "description": "",
  "id": "job-search;user-should-be-able-to-go-on-web;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on pop up",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Teacher\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 35 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select salaryMin \"15000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salaryMax \"25000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType\"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType\"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs Btn",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I get result \"Teacher jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 42700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnPopUp()"
});
formatter.result({
  "duration": 42380500800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teacher",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 106294900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 109564500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 35 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 208562000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 217641300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMin(String)"
});
formatter.result({
  "duration": 170804800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMax(String)"
});
formatter.result({
  "duration": 120423500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 139432100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 158294000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsBtn()"
});
formatter.result({
  "duration": 142461000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teacher jobs in London",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iGetResult(String)"
});
formatter.result({
  "duration": 5657048900,
  "status": "passed"
});
formatter.after({
  "duration": 76900,
  "status": "passed"
});
formatter.before({
  "duration": 3094531400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should be able to go on web",
  "description": "",
  "id": "job-search;user-should-be-able-to-go-on-web;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on pop up",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Doctor\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 25 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select salaryMin \"25000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salaryMax \"35000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType\"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType\"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs Btn",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I get result \"Doctor jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 70300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnPopUp()"
});
formatter.result({
  "duration": 42331791600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Doctor",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 107871700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 107897900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 25 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 169407200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 293538200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMin(String)"
});
formatter.result({
  "duration": 125364900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMax(String)"
});
formatter.result({
  "duration": 93067100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 103559000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 147625600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsBtn()"
});
formatter.result({
  "duration": 160824000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Doctor jobs in London",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iGetResult(String)"
});
formatter.result({
  "duration": 11070115900,
  "status": "passed"
});
formatter.after({
  "duration": 45100,
  "status": "passed"
});
formatter.before({
  "duration": 3796607100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should be able to go on web",
  "description": "",
  "id": "job-search;user-should-be-able-to-go-on-web;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on pop up",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Accountant\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select salaryMin \"25000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salaryMax \"35000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType\"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType\"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs Btn",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I get result \"Accountant jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 69500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnPopUp()"
});
formatter.result({
  "duration": 42389042900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accountant",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 123702900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 115464100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 128796800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 492329600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMin(String)"
});
formatter.result({
  "duration": 122330800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMax(String)"
});
formatter.result({
  "duration": 106276200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 122026000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 163149500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsBtn()"
});
formatter.result({
  "duration": 141799100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accountant jobs in Harrow on the Hill",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iGetResult(String)"
});
formatter.result({
  "duration": 7304005300,
  "status": "passed"
});
formatter.after({
  "duration": 103600,
  "status": "passed"
});
formatter.before({
  "duration": 5169023300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to go on web",
  "description": "",
  "id": "job-search;user-should-be-able-to-go-on-web;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on pop up",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select salaryMin \"35000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salaryMax \"55000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType\"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType\"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs Btn",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I get result \"Tester jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 67100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnPopUp()"
});
formatter.result({
  "duration": 42381656400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 122321000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 113675300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 217636200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 421210100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMin(String)"
});
formatter.result({
  "duration": 125130700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMax(String)"
});
formatter.result({
  "duration": 100244000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 104275500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 159727700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsBtn()"
});
formatter.result({
  "duration": 198132900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester jobs in London",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iGetResult(String)"
});
formatter.result({
  "duration": 5540261300,
  "status": "passed"
});
formatter.after({
  "duration": 61800,
  "status": "passed"
});
formatter.before({
  "duration": 5829063500,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should be able to go on web",
  "description": "",
  "id": "job-search;user-should-be-able-to-go-on-web;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on pop up",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Cashier\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select salaryMin \"25000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salaryMax \"35000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salaryType\"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select jobType\"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs Btn",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I get result \"Cashier jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 51100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnPopUp()"
});
formatter.result({
  "duration": 42595660400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cashier",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 129971900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 151638300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 139920000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 500653000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMin(String)"
});
formatter.result({
  "duration": 139110600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMax(String)"
});
formatter.result({
  "duration": 134017200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 153182500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 196194100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsBtn()"
});
formatter.result({
  "duration": 182000200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cashier jobs in London",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iGetResult(String)"
});
formatter.result({
  "duration": 4943819900,
  "status": "passed"
});
formatter.after({
  "duration": 55500,
  "status": "passed"
});
});
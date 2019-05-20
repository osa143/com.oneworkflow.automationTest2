$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/demo.feature");
formatter.feature({
  "name": "Demo Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@testDemo"
    }
  ]
});
formatter.scenario({
  "name": "Demo",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@testDemo"
    }
  ]
});
formatter.step({
  "name": "the application is \"google\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.theApplicationIs(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat steps.BaseSteps.theApplicationIs(BaseSteps.java:26)\r\n\tat ✽.the application is \"google\"(features/demo.feature:6)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});
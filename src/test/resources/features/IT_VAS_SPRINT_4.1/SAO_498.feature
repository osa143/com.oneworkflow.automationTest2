@SAO_498
  Feature:
    Scenario:
      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Trouble Event"
      Then trouble record form should appear in new tab
      And user switches to window 1
      And user enters ticket id as "OP-000000898806"
      And user clicks Search on ticket search
      Then trouble ticket should appear related to TeMIP
      When user clicks on Diagnosis tab
      Then user should see an alarm present
      When user clicks on linked items tab
      And user selects target application first dropdown as "OS3 - Operations"
      And user clicks on link button
      And user switches to frame
      Then user should see target request search
      When user clicks on the clear button
      And user enters "OP-000000898805" in the ticket ID field
      And user clicks on the search button
      Then user selects ticket under select target request
      And user selects relationship type as "Is master of"
      And user clicks on accept button
      Then user selects target application first dropdown as "OS3 - Operations"
      And user clicks on link button
      And user switches to frame
      Then user should see target request search
      When user clicks on the clear button
      And user enters "OP-000000898804" in the ticket ID field
      And user clicks on the search button
      Then user selects ticket under select target request
      And user selects relationship type as "Is master of"
      And user clicks on accept button
      Then user selects target application first dropdown as "OS3 - Operations"
      And user clicks on link button
      And user switches to frame
      Then user should see target request search
      When user clicks on the clear button
      And user enters "OP-000000898803" in the ticket ID field
      And user clicks on the search button
      Then user selects ticket under select target request
      And user selects relationship type as "Is master of"
      And user clicks on accept button
      Then user selects target application first dropdown as "OS3 - Operations"
      And user clicks on link button
      And user switches to frame
      Then user should see target request search
      When user clicks on the clear button
      And user enters "OP-000000898802" in the ticket ID field
      And user clicks on the search button
      Then user selects ticket under select target request
      And user selects relationship type as "Is master of"
      And user clicks on accept button
      Then user validates linked tickets availability









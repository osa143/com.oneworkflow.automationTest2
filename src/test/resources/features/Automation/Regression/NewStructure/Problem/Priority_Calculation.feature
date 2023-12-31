@Priority_Calculation @ProblemRegression
#Passed
  Feature: priority calculation
    Scenario: priority calculation

      Given user is on the OneWorkflow login page
      When user logs in with valid username "frvi96_auto" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create problem record
#      When user clicks on agent console create problem record
      And user switches to window 1
      Then problem record form should appear in new tab
      When user selects impact type as "Extensive/Widespread"
      And user selects urgency as "Critical"
      Then priority should be "Critical"
      When user selects urgency as "High"
      Then priority should be "Critical"
      And user selects urgency as "Medium"
      Then priority should be "Major"
      And user selects urgency as "Low"
      Then priority should be "Minor"
      When user selects impact type as "Significant/Large"
      And user selects urgency as "Critical"
      Then priority should be "Critical"
      When user selects urgency as "High"
      Then priority should be "Major"
      And user selects urgency as "Medium"
      Then priority should be "Major"
      And user selects urgency as "Low"
      Then priority should be "Minor"
      When user selects impact type as "Moderate/Limited"
      And user selects urgency as "Critical"
      Then priority should be "Major"
      When user selects urgency as "High"
      Then priority should be "Major"
      And user selects urgency as "Medium"
      Then priority should be "Minor"
      And user selects urgency as "Low"
      Then priority should be "Info"
      When user clicks on internal checkbox under affected BU's
      And user enters "Priority_Calculation Test" in Title field
      And user selects request type as "CPS:IT:Other" in problem form
      And user enters description as "Problem ticket Priority_Calculation Test"
      Then user clicks on save button
      And problem ticket status should be assigned


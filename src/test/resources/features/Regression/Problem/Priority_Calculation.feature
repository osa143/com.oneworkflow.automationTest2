@Priority_Calculation @problem
#Passed
  Feature: problem
    Scenario: priority calculation

      Given user is on the OneWorkflow login page
      When user logs in with valid username "syvaptu1_auto" and password as "Telia@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create problem record
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
      Then priority should be "Minor"

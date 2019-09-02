@SLA_Target_Time_Availability @Incident
#Passed
Feature: Incident

  Scenario: verify SLA target time availability in incident record


    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And multiple menu options "Console:Create:Search:Administration" should be available
    When user selects search menu as "Open Search Form:Trouble Event"
    And user switches to window 1
    #ST ENV
    #And user enters ticket id as "OP-000000044545"
    #SIT ENV
    #And user enters ticket id as "OP-000000538992"
    #UAT
    When user clicks on advanced search button
    And user waits 2 secs
    And user enters "'Cust. Remaining SLA' != |00:00:00|" in the advanced search bar
    And user clicks on search
    Then ticket with SLA should be opened
    And user validates Cust. Remaining SLA or SLA Target Time availability
    Then customer SLA field must be greyed out and not possible for user to alter
    And user validates that the content of SLA date and time format as "yyyy-MM-dd HH:mm:ss"












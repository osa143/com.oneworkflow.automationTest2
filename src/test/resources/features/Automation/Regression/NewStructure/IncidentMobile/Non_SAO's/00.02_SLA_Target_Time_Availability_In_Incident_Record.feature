@SLA_target_Time @00 @Incident @Incident_NonSAO
#Passed
Feature: 00.02 - SLA Target time availability in Incident Record

  Scenario: SLA Target time availability in Incident Record


    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And multiple menu options "Console:Create:Search:Administration" should be available
    When user selects search menu as "Open Search Form:Trouble Event"
    And user switches to window 1
    When user clicks on advanced search button
    #And user enters "'Cust. Remaining SLA' != $NULL$ AND 'Status' = \"Closed\"" in the advanced search bar
    And user enters "'Cust. Remaining SLA' != $NULL$" in the advanced search bar
    And user clicks Search on ticket search
    And user waits 35 secs
    Then ticket with SLA should be opened
    And user validates Cust. Remaining SLA or SLA Target Time availability
    Then customer SLA field must be greyed out and not possible for user to alter
    And user validates that the content of SLA date and time format as "dd/MM/yyyy HH:mm:ss"












@SAO_499_Change_Ticket_Linked_Location @499
#passed
Feature: data searching using wildcards
  Scenario: user is able to search for data using wildcards

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user switches to window 1
    Then user should see blank change record search form
    When user selects change type as "Change Record"
    And user selects status as "Assigned"
    And user clicks Search on ticket search
    Then user should see change record ticket
    When user clicks on "Linked Items" tab
    And user selects target application first dropdown as "OS3 - Change"
    And user clicks on link button
    Then user switches to frame
    When user clicks on the clear button
    #need to speak Tomas about this one - have sent an email to him
    When user searches below in the location+ field and verifies CI information
    |locationIdPlus |
    |SE_      |
    |FI_      |
    |EE_      |
    |DK_      |
    |NO_      |
    |LT_      |
  And user clicks on cancel on select target window





#    When user enters "SE_" in the linked location field
#    And user clicks on the search button
#    And user should see list of CI's related to "SE"
#    And user clicks on the clear button
#    When user enters "FI_" in the linked location field
#    And user clicks on the search button
#    And user should see list of CI's related to "SE"
#    And user clicks on the clear button
#    When user enters "EE_" in the linked location field
#    And user clicks on the search button
#    And user should see list of CI's related to "SE"
#    And user clicks on the clear button
#    When user enters "DK_" in the linked location field
#    And user clicks on the search button
#    Then user should see ticket related to Denmark
#    And user clicks on the clear button
#    When user enters "NO_" in the linked location field
#    And user clicks on the search button
#    Then user should see ticket related to Norway
#    And user clicks on the clear button
#    When user enters "LT_" in the linked location field
#    And user clicks on the search button
#    Then user should see ticket related to Lithuania






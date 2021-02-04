@Change_Templates @OW_Change


Feature: Change Templates [SaR]
  Scenario: Change Templates [SaR]

    Given user is on the OneWorkflow login page
    When user logs in with valid username "cm_appadmin1_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects "Administration" menu as "Templates:Change Template"
    And user switches to window 1
    Then template console is opened
    When user selects "Service Provider" dropdown as "Telia Company"
    And user clicks on show templates
    Then templates should appear
    When user selects "Telia Carrier UAT Changes" under "Name" column and clicks open
    Then user clicks on "Further Details" tab
    And user validates "Category" is not mandatory
    And user validates "Type" is not mandatory
    And user validates "Item" is not mandatory
    And user validates "Technology" is not mandatory
    And user clicks close button on change template window
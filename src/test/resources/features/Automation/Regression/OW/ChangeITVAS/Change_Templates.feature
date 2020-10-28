@Change_Templates


Feature: Change Templates [SaR]
  Scenario: Change Templates [SaR]

    Given user is on the OneWorkflow login page
    When user logs in with valid username "cm_appadmin1_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks template under administration
    Then template console is opened
    When user selects service provider as "Telia Company"
    And user clicks show templates
    Then templates should appear
    When user selects "TEST TEMPLATE [UAT] - Standard Change" and clicks open
    And user switches to frame
    Then user clicks on "Further Details" tab
    And user validates "Category" is not mandatory
    And user validates "Type" is not mandatory
    And user validates "Item" is not mandatory
    And user validates "Technology" is not mandatory
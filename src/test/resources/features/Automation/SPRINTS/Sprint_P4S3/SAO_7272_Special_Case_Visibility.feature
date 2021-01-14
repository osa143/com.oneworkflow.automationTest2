@SAO_7272_Special_Case_Visibility
# Tags: optional

Feature: SAO-7272 - Special Case Visibility

  Scenario: SAO-7272 - Special Case Visibility

    Given user is on the OneWorkflow login page
    When user logs in with valid username "" and password as ""
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Administration:All Requests:Agent Console Alerts Configuration"
    Then agent console alerts configuration form should be opened
    When user clicks new alert button
    Then agent console alert window should be displayed
    When user enters qualification name as "Test Qualification"
    And user selects schema as "OS3:OP:Request"
    And user clicks build qualification button
    Then qualification window should be opened
    When user enters qualification as "'Fld-Description' = /test/"
    And user clicks apply qualification button
    Then user validates qualification as "'Fld-Description' = "test""
    When user enters alarm message as "Test Alarm Message"
    And user selects icon as "Smiley_Sad"
    And user selects yellow colour scheme
    And user selects alert status as "Active"
    And user clicks save alert button
    Then alert should be listed and displayed
    When user switches to window 0
    And user selects create menu as "Create:Trouble Event"
    And user switches to window 2
    And user clicks on sweden checkbox under affected BU's
    And user enters "Testing" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Test"
    And user clicks save button
    Then ticket should be created and status should be assigned
    When user switches to window 0
    Then user validates orange support icon is displayed on ticket created
    When user switches to window 1
    And user clicks on row "<int>" alert
    And user clicks open alert button
    Then agent console alert window should be displayed
    When user selects icon as ""
    And user selects orange colour scheme
    Then user clicks save alert button
    When user switches to window 2
    And user enters "Testing Update" in Title field in Trouble event
    And user clicks save button
    And user switches to window 0
    And user clicks refresh button
    Then user validates orange icon is displayed on ticket
    When user switches to window 1
    And user clicks new alert button
    Then agent console alert window should be displayed

    When user enters qualification name as "Test Qualification2"
    And user selects schema as "OS3:OP:Request"
    And user clicks build qualification button
    Then qualification window should be opened
    When user enters qualification as "'Fld-RequestType' = "Customer""
    And user clicks apply qualification button
    Then user validates qualification as "'Fld-RequestType' = "Customer""
    When user enters alarm message as "Testing Alarm message"
    And user selects icon as "Wallplug"
    And user selects blue colour scheme
    And user selects alert status as "Active"
    And user clicks save alert button
    Then alert should be listed and displayed in row "<int>"
    When user switches to window 2
    And user enters "Testing Update2" in Title field in Trouble event
    And user clicks save button
    Then user validates red dotted icon is displayed when ticket fits more than one alert
    When user switches to window 0
    And user selects alert in row "<int>"
    And user clicks delete alert button and confirms
    Then user validates alert is no longer displayed





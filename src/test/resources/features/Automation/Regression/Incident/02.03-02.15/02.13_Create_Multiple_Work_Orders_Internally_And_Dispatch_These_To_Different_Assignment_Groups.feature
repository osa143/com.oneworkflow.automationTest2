@02.13 @Incident @02 @HelixRegr
#passed
Feature: create multiple work orders and dispacth to different assignment gropus
  Scenario: user can create multiple work orders and dispatch these to different assignment groups

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    And user enters "02:13 Create Multiple Work Orders Internally And Dispatch" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "02:13 Create Multiple Work Orders Internally And Dispatch"
    And user clicks on save button
    Then ticket should be created and status should be assigned
    When user adds below CI's to the ticket
      |   CI Name     |
      |SE_SGSN_VRRMME1|
      |SE_SGSN_LDHMME1|
    Then user clicks on save button
    When user clicks on "Work Orders" tab
    And user clicks on create from ticket
    Then user switches to window 2
    And user selects assigned profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core WEST"
    Then user clicks on save button
    And ticket should be created and status should be assigned
    When user switches to window 1
    And user clicks on create from ticket
    Then user switches to window 3
    And user selects assigned profile dropdown as "Core:Mobile:Mobile PS:Development:Development Data-Common"
    Then user clicks on save button
    And ticket should be created and status should be assigned
    When user switches to window 1
    When user clicks on "Work Orders" tab
    Then user should see work orders listed under work order tab


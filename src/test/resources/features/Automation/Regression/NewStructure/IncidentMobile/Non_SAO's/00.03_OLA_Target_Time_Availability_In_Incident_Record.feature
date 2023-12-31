@00.03 @00 @Incident @Incident_NonSAO
#Passed
Feature: 00.03 - OLA target time availability in Incident Record

  Scenario: OLA target time availability in Incident Record

    Given user is on the OneWorkflow login page
    When user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    And multiple menu options "Console:Create:Search:Administration" should be available
    When user clicks on create trouble event
#    When user clicks on agent console create trouble event
    And user switches to window 1
    Then user clicks on sweden checkbox under affected BU's
#    Then user clicks on OP sweden checkbox under affected BU's
    And user enters "Test OLA Target Time Ticket" in Title field
    And user selects request type as "Customer" on trouble event page
    And user enters description as " 00.03 Test OLA Target Time Ticket"
    Then user clicks on save button
    And ticket should be created and status should be assigned
    Then user validates OLA Target Time availability
    And OLA target time field must be greyed out and not possible for user to alter
    And user validates that the content of OLA date and time format as "dd/MM/yyyy HH:mm:ss"

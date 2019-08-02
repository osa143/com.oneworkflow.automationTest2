@scenario
Feature: User is able to change status to pending

  Scenario Outline: User logs into One workflow, creates a problem ticket, changes status to pending then checks ticket status

    Given user is on the OneWorkflow login page
    When user logs in with valid username <userName> and password as <password>
    Then user successfully logged in to OneWorkflow and agent console should be displayed

    Examples:
    |username|password|
    |Change_Automation_1|Test@1234|
    |un|pw                        |
    |un1|pw1                      |
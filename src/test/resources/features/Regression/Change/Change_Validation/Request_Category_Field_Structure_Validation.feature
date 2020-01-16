@changes @Request_Category_Field_Structure_validation
#Passed

Feature: Validation of change Request Category field structure
  Scenario:Validation of change Request Category field structure

    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    Then change record page should be opened and Change form is displayed
#    And user validates Request Category is present
    Then multiple statuses "Cable splicing:Configuration:Dismantling:Fault Management:Hardware Installation:Other:Power:Reconnection:Software Installation:Telenor:(clear)" should be available in "Request Category*" dropdown
    And user logsOut and accepts alert




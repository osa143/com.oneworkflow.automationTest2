@SAO-5783 @Helix_Create

#CIKEY=ITRef_Cell_EE_MSC_EE_MSC (Priority 1)
#CIKEY=ITRef_Cell_LT_eNodeB_Giruliai-Kla-L-S-216 (Priority 5)

Feature: As a fault management system Helix should be able to create incidents
  Scenario: As a fault management system Helix should be able to create incidents

    Given user has access to Helix
    When user generates an alarm towards Helix
    Then Helix should be able to process alarm(s) and create an incident towards OW
    And user stores ticket ID from Helix
    Then user logs in with valid user and password
    And user opens the ticket with alarms from Helix
    Then user validates alarm information/ticket is created/received correctly
    And user validates ticket priority as "<Priority>"
    And user validates estimated ready time is calculated correctly
    And user validates OLA target time is calculated correctly
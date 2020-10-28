@New_Interested_Parties_&_Impact_Values2


Feature: New Interested Parties & Impact Values [SaR]
  Scenario: New Interested Parties & Impact Values [SaR]

    Given user is on the OneWorkflow login page
    When user logs in with valid username "cm_adminaccess1_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user opens change in new status
    Then user switches to window 1
    When user clicks on "Interested Parties" tab
    And user clicks on add button under interested parties
    Then user switches to frame
    When user validates multiple options "Additional Access:Change Builder:Change Initiator:Contact:Custom1:Custom2:Requested By:Requested For:Solution Manager:Solution Owner:Vendor:(clear)" should be available in Type dropdown
    And user clicks on cancel button on interested parties window
    Then user validates add interested parties is closed
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user validates multiple options "Degredation of Service:Loss of Service:No Impact:(clear)" in level dropdown
    And user clicks on close button on CI search window
    When user clicks on "Schedule" tab
    Then user validates multiple options "Degredation of Service:Loss of Service:No Impact:(clear)" in the estimated impact dropdown
@SAO_4693

Feature: SAO-4693 - OP-000001763134 - Owner profile defect

  Scenario: SAO-4693 - OP-000001763134 - Owner profile defect

    Given user is on the OneWorkflow login page
    When user logs in with valid username "syvaptu1_auto" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user clicks on sweden checkbox under affected BU's
    Then user enters "SAO-4693 - test" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    Then user enters description as "SAO-4693 - test"
    And user clicks on owner under sections
    And user selects "Owner Profile*" as "Core:Mobile:Mobile PS:Mob PS Core WEST"
    And user clicks on save button
    Then an error message should appear: "Owner and Owner Profile are required(ARERR 33418)."
    When user clicks on create work order
    And user switches to window 2
    Then user enters title as "SAO-4693 - test"
    And user selects request type as "Analysis" in work order page
    Then user enters description as "SAO-4693 - test"
    And user selects priority as "Major"
    And user clicks on owner under sections
    And user selects "Owner Profile*" as "Core:Mobile:Mobile PS:Mob PS Core WEST"
    Then user clicks save button
    Then an error message should appear: "Owner and Owner Profile are required(ARERR 33418)."
    When user clicks on create known error
    And user switches to window 3
    Then user enters title as "SAO-4693 test"
    And user selects request type as "CPS:IT:Other" on known error page
    Then user enters description as "SAO-4693 test"
    And user selects priority as "Major"
    And user clicks on owner under sections
    And user selects "Owner Profile*" as "Core:Mobile:Mobile PS:Mob PS Core WEST"
    Then user clicks save button
    Then an error message should appear: "Owner and Owner Profile are required(ARERR 33418)."
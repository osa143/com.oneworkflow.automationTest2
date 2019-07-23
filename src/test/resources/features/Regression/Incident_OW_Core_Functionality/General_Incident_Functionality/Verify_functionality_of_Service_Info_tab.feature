@Verify_functionality_of_Service_Info_tab @Incident
  Feature: Verification of service info tab
    Scenario: user validates service info tab

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case verify functionality of service info tab" in Title field in Trouble event
      And user selects request type as "Customer"
      And user enters description as "Test case verify functionality of service info tab"
      And user clicks on save button on the problem form
      Then ticket should be created and status should be assigned
      Then user clicks on "Service Info" tab
      And user validates "info type" is visible
      Then user validates "Public service information extent controlled" is visible
      And user validates "Public service information large failure" is visible
      And user validates "OPInfo by CI/Locale" is visible
      And user validates "IT Disturbance Info" is visible
      Then user validates "Info Channel" is visible
      And user validates "Telia.se kartan" is visible
      And user validates "SMS till SLM kunder" is visible
      And user validates "Mail till SLM kunder" is visible
      And user validates "Tele2 om 3G" is visible



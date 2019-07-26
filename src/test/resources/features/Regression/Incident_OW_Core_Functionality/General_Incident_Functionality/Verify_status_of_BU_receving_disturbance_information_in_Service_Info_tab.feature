    @Verify_status_of_BU_receiving_disturbance_information_in_Service_Info_tab @Incident
    Feature: Validate BU receives disturbance info
    Scenario: user validates BU receives disturbance information


      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case Verify BU receiving disturbance information" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case Test case Verify BU receiving disturbance information"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user clicks on Diagnosis tab
      And user clicks on CI search button
      Then user switches to frame
      And user enters "SE_LTECell_100000012" in the name+ field
      And user clicks on search button on CI search window
      And user selects a CI from list
      And user selects impact level as "No Impact"
      And user clicks on relate CI
      Then user closes warning message
      And user clicks on close button on CI search window
      Then CI should be listed and displayed under the Diagnosis tab
      Then user validates OLA value is set
      And user validates event start time is present
      And user validates estimated ready time is updated
      Then user clicks on "Service Info" tab
      And user validates info type options are present
      And user validates info channel options are present
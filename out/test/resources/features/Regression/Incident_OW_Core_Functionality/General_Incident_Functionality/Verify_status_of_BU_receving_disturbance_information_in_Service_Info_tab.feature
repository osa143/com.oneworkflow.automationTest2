@Verify_status_of_BU_receiving_disturbance_information_in_Service_Info_tab
@Incident
@TroubleGeneral
  #passed
  Feature: Verify status of BU receiving disturbance information in service info tab
    Scenario: Verify status of BU receiving disturbance information in service info tab

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case Verify BU receiving disturbance information" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case Test case Verify BU receiving disturbance information"
      And user clicks on save button on the problem form
      Then ticket should be created and status should be assigned
      And user adds CI "SE_LTECell_100000012" to the ticket with impact level "No Impact"
      And user clicks on "Diagnosis" tab
      Then CI should be listed and displayed under the Diagnosis tab
      Then user validates OLA value is set
      And user validates event start time is present
      And user validates estimated ready time is updated
      Then user clicks on "Service Info" tab
      Then user validates "Public service information extent controlled" is visible
      And user validates "Telia.se kartan" is visible
      And user validates "SMS till SLM kunder" is visible
      And user validates "Mail till SLM kunder" is visible
      And user validates "Tele2 om 3G" is visible
      When user clicks on "Public service information large failure" under info type
      Then user validates "Telia.se viktig info" is visible
      And user validates "SOS Alarm viktig info" is visible
      When user clicks on "OPInfo by CI/Locale" under info type
      Then user validates "English" is visible
      And user validates "Danish" is visible
      And user validates "Finnish" is visible
      And user validates "Norwegian" is visible
      And user validates "Lithuanian" is visible
      And user validates "Swedish" is visible
      And user validates "Estonia" is visible
      When user clicks on "IT Disturbance Info" under info type
      Then user validates "English" is visible
      And user validates "Finnish" is visible


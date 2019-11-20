@APIWorkOrder
  Feature: E2E Validation of API created work order ticket
    Scenario: user validates all information on API ticket and processes ticket E2E

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Work Order"
      And user enters ticket id as ""
      Then user should see trouble ticket
      And user validates ticket status as "Assigned"
      Then user validates service provider as "Telia Company"
      And user validates source field as "One Workflow"
      And user validates source id as "sourceID"
      Then user validates all affected BU's are selected
      And user validates template as "Fokus operation (DK)"
      Then user validates title field as "title"
      And user validates request type as "Service Request"
      Then user validates description as "testing"
      And user validates ticket priority as "Critical"
      Then user validates estimated ready time as "2019-11-11 20:23:58"
      And user validates parent ticket id as ""
      Then user validates reason as "reason"
      And user validates sla with customer as ""
      Then user validates sla class as "DEFAULT-2h"
      And user validates event start time as "2019-11-19 17:05:58"
      Then user validates Category as "Access"
      And user validates type as "RAN"
      Then user validates item as "SYNC"
      And user validates technology as "CORE"
      Then user validates model as "string"
      And user validates manufacturer as "string"
      Then user validates region name as "SE"
      And user validates owner profile as "IT CC"
      Then user validates owner as "tvb913"
      And user validates assigned profile as "AOFokus-DK"
      Then user validates assignee is "masc72"
      And user validates vendor name as "vendorName"
      Then user validates onsite engineers as "onSiteEngineers"
      And user validates account number as "accountNumber"
      Then user validates telephone number as "telephoneNumber"
      And user validates hours of operation as "hoursOfOperation"
      Then user validates vendor ref as "vendorRef"
      And user validates onsite contact as "onSiteContact"
      Then user validates travel time as "travelTime"
      When user enters "Test Update - Public" in the timeline text box
      And user clicks on public radio button
      Then user clicks on add button on timeline
      And change should also be reflected in the timeline as "Test Update - Public" for trouble ticket in row 1
      And user enters "Test Update - Public" in the timeline text box
      And user clicks on private radio button
      Then user clicks on add button on timeline
      And change should also be reflected in the timeline as "Test Update - Private" for trouble ticket in row 1
      When user enters title as ""
      And user clicks save button
      Then error message should display as "Required field (without a default) not specified : Title (ARERR 9424)"
      When user enters title as "New Test Title"
      And user clicks save button
      Then form should be saved
      When user selects request type as "clear" in work order page
      And user clicks save button
      Then error message should display as "Required field (without a default) not specified : Request Type (ARERR 9424)"
      When user selects request type as "Analysis" in work order page
      And user clicks save button
      Then form should be saved
      When user enters description as ""
      And user clicks save button
      Then error message should display as "Required field (without a default) not specified : Description (ARERR 9424)"
      When user enters description as "New Test Description"
      And user clicks save button
      Then form should be saved
      When user selects priority as "clear"
      And user clicks save button
      Then error message should display as "Required field (without a default) not specified : Priority (ARERR 9424)"
      When user selects priority as "Minor"
      And user clicks save button
      Then form should be saved
      When user enters estimated ready as ""
      And user clicks save button
      Then form should be saved
      When







      When user clicks on Diagnosis tab
      And user clicks on CI search button
      Then user switches to frame
      And user enters CI as "SE_AP_tylosand-first-camp-ap10b2"
      And user clicks on CI search button
      Then user selects CI "SE_AP_tylosand-first-camp-ap10b2"
      And user selects impact level as "No Impact"
      And user clicks on relate CI
      Then user clicks on close button on CI search window
      And user switches to window 1
      And CI should be listed and displayed under the Diagnosis tab
      When user clicks on "Timeline" tab
      Then change should also be reflected in the timeline as "Impact record created for SE_AP_tylosand-first-camp-ap10b2" for trouble ticket in row 1



      When user clicks on "Interested Parties" tab
      And user enters "Change_Automation_1" under interested parties
      And user clicks on add email button
      Then user validates "Change_Automation_1" is listed as an interested party
      When user clicks on timeline tab
      Then change should also be reflected in the timeline as "The User   has been added as interested parties." for trouble ticket in row 1
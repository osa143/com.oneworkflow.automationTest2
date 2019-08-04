@SAO_184
#will have to be run in UAT env due to B2B Response
#have to navigate to one of the URL's below in order to process the end
#UAT - https://td777lb-mtint.ddc.teliasonera.net/arsys/forms/td777lb-ars/TS%3AWO%3ARequest%3AInterfaceOUT/Default+Administrator+View/?cacheid=2c02234b
#SIT - http://td333arsmt1.ddc.teliasonera.net:8080/arsys/forms/td333arsas1/TS%3AWO%3ARequest%3AInterfaceOUT/Default+Administrator+View/?cacheid=f617c419
Feature: Sending of WO to OneCo
    Scenario: WO's shouldn't be rejected from OneCo

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects create menu as "Work Order"
      And user switches to window 1
      Then work order form should appear in new tab
      When user clicks on norway checkbox under affected BU's
      And user enters "Test Purpose" in Title field
      And user selects request type as "Maintenance"
      And user enters description as "Automated B2B Test"
      And user selects priority as "Minor"
      And user clicks on save button on the problem form
      Then user validates ticket status as "New"
      When user clicks on Diagnosis tab
      And user clicks on CI search button
      Then user switches to frame
      And user clicks on clear button
      When user enters "NO_LTECell%" in name field
      And user clicks on search button on CI search window
      And user selects a CI from list
      And user selects impact level as "Loss Of Service"
      And user clicks on relate CI
      Then user closes warning message
      And user clicks on close button on CI search window
      And CI should be listed and displayed under the Diagnosis tab
      When user clicks on assignment under sections
      And user clicks on apply BtwoB button
      Then user should see assigned profile as "OneCo - FS - NO - B2B"
      When user selects SLA class as "10 Hours repair time"
      And user clicks on "B2B Dispatch" tab
      And user enters header value as "Test"
      And user enters message value as "Automated Test"
      Then user clicks on save button
      And user should see outbound assignment event
      Then user should see WFM ticket ID
      And user should see dispatch status as "Submitted"
      And user should see inbound acknowledgment event
      And user clicks on inbound events refresh button
      And user double clicks on B2B outbound event
      And user switches to window 2
      Then user navigates to custom field tab on above URL
      And user validates OneCo doesn't reject work order









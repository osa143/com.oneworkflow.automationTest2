@01.08 @Incident  @01
  #Passed
#CORE for ST, Core for SIT
  #Mobile PS Core Network
  Feature: Set the service impact
    Scenario: Set the service impact

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks save button
      Then an error message should appear: "Please select at least one country of impact for this Trouble Ticket. (ARERR 10000)"
      When user clicks on sweden checkbox under affected BU's
      And user clicks save button
      Then multiple error messages should appear with red boarder around fields
      When user enters "Test case 01.08 Set the Service impact" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case 01.08 Set the Service impact"
      Then user clicks on save button
      And ticket should be created and status should be assigned
      Then user validates availability of tabs "Timeline:Diagnosis:Interested Parties:Notifications:Linked Items:Work Orders:Service Level:Alarms:Ticket Matching:Service Info"
      When user clicks on Diagnosis tab
      And user clicks on CI search button
      Then user switches to frame
      And user selects Category as "CORE"
      And user selects Type as "Mobile PS Core Network"
      And user selects Item as "SGSN"
      When user enters "DK_%" in name field
      And user clicks on search button on CI search window
      And user selects a CI from list
      Then multiple statuses "Degradation of Service:Loss of Service:No Impact:(clear)" should be available in "Level*" dropdown
      And user selects impact level as "Degradation of Service"
      And user clicks on relate CI
     # And error message should display as "Please verify that there are no impacted CI's in other tickets by using Show CR Matching (ARWARN 10000)"
      And user closes warning message
      When user enters "SE_SGSN_VRRMME1" in name field
      And user clicks on search button on CI search window
      And user selects a CI from list
      And user selects impact level as "Degradation of Service"
      And user clicks on relate CI
      #And error message should display as "Please verify that there are no impacted CI's in other tickets by using Show CR Matching (ARWARN 10000)"
      And user closes warning message
      When user enters "SE_SGSN_LDHMME1" in name field
      And user clicks on search button on CI search window
      And user selects a CI from list
      And user selects impact level as "Degradation of Service"
      And user clicks on relate CI
      #And error message should display as "Please verify that there are no impacted CI's in other tickets by using Show CR Matching (ARWARN 10000)"
      And user closes warning message
      And user clicks on close button on CI search window
      And user clicks on "Diagnosis" tab
      And CI should be listed and displayed under the Diagnosis tab
      Then user validates CI "Impact Status" is "Active"
      And user validates "Primary" CI is equal to "DK_SGSN_AMBMME1"
      Then user clicks on save button
      #Should be added automatically based on CI
      And user validates "Denmark" BU is added automatically

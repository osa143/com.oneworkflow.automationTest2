@01.08_Set_the_service_impact @Incident

  Feature: Set the service impact
    Scenario: user can set the service impact

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on save button on the problem form
      Then an error message should appear: "Please select at least one country of impact for this Trouble Ticket. (ARERR 10000)"
      When user clicks on sweden checkbox under affected BU's
      And user clicks on save button on the problem form
      Then multiple error messages should appear with red boarder around fields
      When user enters "Test case 01.08 Set the Service impact" in Title field in Trouble event
      And user selects request type as "Customer"
      And user enters description as "Test case 01.08 Set the Service impact"
      Then user clicks on save button on the problem form
      And ticket should be created and status should be assigned
      #Need to validate that Timeline, Diagnosis,Interested Parties, Notification, Linked Items, Work Orders, Service Level, Alarms, Recurring Incidents, Service Info are all present
      Then user validates availability of tabs
      When user clicks on Diagnosis tab
      And user clicks on CI search button
      Then user switches to frame
      And user selects ci category as "Core"
      And user selects ci type as "Mobile PS Core Network"
      And user selects ci item as "SGSN"
      Then user clicks on search button on CI search window
      When user selects CI's "SE_SGSN_VRRMME1, SE_SGSN_LDHMME1, DK_SGSN_AMBMME1"
      And user clicks on relate CI
      Then an error message should appear: "Please verify that there are no impacted CI's in other tickets by using Show CR Matching (ARWARN 10000)"
      #Need to validate the options under impact level: "Degradation of service, Loss of Service, No Impact, (clear)"
      Then user validates impact level availability
      And user selects impact level as "Degradation of Service"
      Then user clicks on relate CI
      And an error message should appear: "Please verify that there are no impacted CI's in other tickets by using Show CR Matching (ARWARN 10000)"
      Then user closes warning message and clicks on close button
      And CI should be listed and displayed under the Diagnosis tab
      Then user validates CI impact status is "Active"
      And user validates primary CI is equal to "DK_SGSN_AMBMME1"
      Then user clicks on save button on the problem form
      #Should be added automatically based on CI
      And user validates "Denmark" BU is added automatically

@EmailTemplate

  Feature:
    Scenario:

      Given user logs in to OW with valid user
      Then agent console should be displayed
      And user clicks on create change record
      Then change record form should be opened
      And user enters all mandatory fields
      Then user fills all optional fields
      And user enters user in the change builder+ field that has email and phone number applied
      And user clicks save button
      Then ticket should be created
      Then user attaches CI and adds affected BU
      And user clicks send button
      Then status should be Assigned
      And user clicks ack button
      Then status should should be Analysis
      And user changes status to Approval Requested
      Then user clicks save button
      And status should be Approved
      Then user changes status to Schedule Requested
      And user clicks save button
      Then status should be Scheduled
      And user changes status to Implementation
      Then user fills in actual start and end time as current date and time
      And user clicks save button
      Then ticket should be saved
      Then user clicks on actions dropdown under add timeline section
      And user selects "Email > Outgoing"
      Then new notification window should be opened
      And user selects unique name dropdown as "CM Maintenance Work"
      Then user selects email format as HTML
      And user clicks Preview button
      Then HTML Viewer window should open
      And user validates all fields that have populated info from change ticket have the values present except for Closure Code and Review Details
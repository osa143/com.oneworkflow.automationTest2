@SAO-5957 @PLAZA
  Feature: SAO-5957
    Scenario: OP-000002113472 - Acknowledgment Not being sent even after creating reference


      Given user is on the Plaza login page
      When user clicks on Products & Services
      And user clicks on IT Infrastructure dropdown
      And user clicks on compute & operating system under IT Infrastructure
      When user clicks on "Exclusion from Endpoint Protection (SCEP) Antivirus pebble
      Then user should see "Exclusion from Endpoint Protection (SCEP) Antivirus" form
      And user selects system name in haiti as "1B"
      Then user selects role as "Application Operation Engineer"
      And user enters list of files and folders as "Testing"
      Then user enters list of file types as "Test file types"
      And user enters list of processes as "Test Processes"
      Then user attaches any CI
      And user enters additional comments as "Test A/C"
      Then user clicks submit button
      And user clicks plaza request ID
      Then user waits for 1 minute
      And user should WO ticket id received in plaza
      Then user opens new tab
      When user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Work Order"
      And user switches to window 2
      Then user enters plaza request id in the source id field
      And user clicks Search on ticket search
      Then user should see plaza ticket
      And user clicks on CTI details section
      Then user should see incorrect CTI details
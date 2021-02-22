@SAO-5957 #@PLAZA
  Feature: SAO-5957
    Scenario: OP-000002113472 - Acknowledgment Not being sent even after creating reference


      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      And user clicks on plaza portal
      Then user should see the plaza home page
      When user clicks on Products & Services
      And user clicks on IT Infrastructure dropdown
      And user clicks on compute & operating system under IT Infrastructure dropdown
      And user clicks on "Exclusion from Endpoint Protection (SCEP) Antivirus" pebble
      Then user should see "Exclusion from Endpoint Protection (SCEP) Antivirus" form
      And user selects system name in haiti as "1B"
      When user selects role dropdown as "Application Operation Engineer"
      And user enters list of files and folders as "Testing"
      Then user enters list of file types as "Test file types"
      And user enters list of processes as "Test Processes"
      Then user adds any CI on plaza exclusion endpoint protection antivirus form
      And user enters additional comments as "Test A/C"
      Then user clicks on "Submit"
      And user gets plaza request id
      And user clicks on plaza request id
      Then user should see service request form
      And user opens new tab
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Work Order"
      And user switches to window 2
      Then user enters plaza request id in the source id field
      And user clicks Search on ticket search
      Then user should see plaza ticket
      And user validates source field as "PLAZA"
      And user clicks on CTI details under sections
      #user should see incorrect CTI details
      Then user validates Category as "IT"
      And user validates type as "Server"
      And user validates item as "Windows"
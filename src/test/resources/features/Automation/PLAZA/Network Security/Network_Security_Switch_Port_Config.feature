@Network_Security_Switch_Port_Config #@PLAZA @Network_Security
  Feature: Network Security Switch Port Config plaza form test
    Scenario: user validates information sent to OW from Plaza


      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      When user clicks on Products & Services
      And user clicks on IT Infrastructure dropdown
      And user waits 2 secs
      And user clicks on firewall & network under IT Infrastructure dropdown
      And user clicks on show more button
      When user clicks on Network Routing Switching pebble
      Then user should see "Network Routing/Switching" form
      Then user selects network security firewall system name in haiti as "1B"
      When user selects role dropdown as "Application Operation Engineer"
      Then user selects service request name as "Switch Port Configuration"
      And user enters network security switch port request as "Test10 Network Security Switch Port/Request"
      Then user selects existing IP net as "Yes"
      And user selects new IP net as "Yes"
      And user selects network security switch port config add CI as "cc100cgas001"
      Then user enters Network Security Switch Port description as "Test10 Network Security/Description"
      And user enters additional comments as "Network Security - Test10/AC"
      Then user clicks on "Submit"
      And user gets plaza request id
      And user clicks on plaza request id
      Then user should see service request form
      When user opens new tab
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
#      When user selects search menu as "Open Search Form:Work Order"
      And user waits 40 secs
      And user switches to window 2
      Then user enters plaza request id in the source id field
      And user clicks Search on ticket search
      Then user should see plaza ticket
      When user clicks on Ack button
      And user validates source field as "PLAZA"
      And user validates title field as "Service Request | Network Routing/Switching"
      And user validates request type as "Service Request | PLAZA"
      And user validates network security switch port config description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Routing/Switching L2"
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on "Diagnosis" tab
      And user validates CI "cc100cgas001" is listed
      And user right clicks on CI "cc100cgas001" and selects "Impact:Update"
      Then user switches to frame
      And user enters impact from time as past on impact details bulk update window
      And user enters impact to time as past on impact details bulk update window
      Then user clicks confirm checkbox
      And user clicks on bulk update save button
      And user right clicks on CI "cc100cgas001" and clears impact
      And user changes status to "Cleared" on work order page
      And user selects completion code as "Success"
      And user clicks on "Schedule" tab
      And user enters schedule end as current date
      Then user clicks on save button
      And user validates ticket status as "Cleared"
      When user changes status to "Closed" on work order page
      And user clicks on save button
      And user validates ticket status as "Closed"
      When user switches to window 0
      And user waits 10 secs
      And user clicks on main page refresh
      Then user validates plaza request has completed
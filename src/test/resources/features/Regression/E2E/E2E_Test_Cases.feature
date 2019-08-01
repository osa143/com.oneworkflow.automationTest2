@E2E_Test_Cases

  Feature: E2E Scenarios
    Scenario: E2E Scenarios for sweden trouble event

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Telia@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user validates BU availability
      And user clicks on sweden checkbox under affected BU's
      And user clicks on finland checkbox under affected BU's
      Then user validates sweden and finland checkboxes are selected
      When user clicks on CTI details under sections
      And user validates availability of category dropdown
      Then multiple statuses "1:Access:Access|Transport:BSS:Computer Services:CORE:Customer Services:DS:External:Hardware:Internal Service:IOT:IT:Location:Miscellaneous:Network:Nokia:OSS:Packet_Transport:Product:SERVER:Service:SITE-LP:Software:Transmission:Transport:TV:VAS" should be available in "Category" dropdown
      And user selects Category as "Core"
      Then user validates availability of type dropdown
      And multiple statuses "Fixed_IMS:IP:MESSAGING:Mobile CS Core Network:Mobile IMS Core NetworkMobile PS Core Network:Mobile_CS:Mobile_PS:NFVI:Other:Performance:Planning:Presentation:Software:Sync:WLAN:Workflow" should be available in "Type" dropdown
      Then user selects Type as "Mobile PS Core Network"
      When user validates availability of item dropdown
      Then multiple statuses "DNS:EPG:GGSN:NAT:NLS:PCRF:PGW:PM:RADIUS:SGSN:SHAPERS:TPE-CMIPBB:TPE-CMIPBB_Mobile_PS" should be available in "Item" dropdown
      And user selects Item as "SGSN"
      And user validates event start time is present
      When user clicks on location under sections
    #To search for the location details you need to press enter after the text
      And user enters "SE_" within the location ID+ field
      And user switches to frame
      Then user should see list of swedish sites
      When user clicks on the next chunk button
    #Location Name,Location ID+,Region Name, Region ID, Latitude, Longitude
      And user highlights location "SE_Site_SE M1" and clicks ok and validates location details


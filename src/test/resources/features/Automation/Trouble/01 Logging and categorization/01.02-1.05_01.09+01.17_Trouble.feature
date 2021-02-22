@1.02-1.05Trouble
  #test case covers 01.02,01.03,01.04,01.05,01.09 and 01.17.

  Feature: 01.02-01.05 + 01.09 and 01.17 trouble
    Scenario: 01.02-01.05 + 01.09 and 01.17 trouble

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_9" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user validates BU availability
      And user clicks on sweden checkbox under affected BU's
      And user clicks on finland checkbox under affected BU's
      Then user validates sweden and finland checkboxes are selected
      And user validates event start time is present
      When user clicks on location under sections
#      When user clicks on CTI details under sections
#      And user validates availability of category dropdown
#      Then multiple statuses "1:Access:BSS:Computer Equipment:Computer Services:CORE:Customer Services:DS:External:Hardware:Internal Service:IOT:IT:Location:Miscellaneous:Network:Nokia:OSS:Packet_Transport:Process:Product:SERVER:Service:Service Platform:SITE-LP:Software:Transmission:Transport:TV:VAS" should be available in "Category" dropdown
#      And user selects Category as "CORE"
#      Then user validates availability of type dropdown
#      And multiple statuses "Fixed_IMS:IP:MESSAGING:Mobile CS Core Network:Mobile IMS Core Network:Mobile PS Core Network:Mobile_CS:Mobile_PS:NFVI:Other:Presentation:Software:Sync:WLAN:Workflow" should be available in "Type" dropdown
#      Then user selects Type as "Mobile PS Core Network"
#      When user validates availability of item dropdown
#      Then multiple statuses "DNS:EPG::GGSN:LOCAL_CORE:NAT::NLS:PCRF:PGW::PM:RADIUS:SGSN:SHAPERS:TPE-CMIPBB" should be available in "Item" dropdown
#      And user selects Item as "SGSN"
    #To search for the location details you need to press enter after the text
      And user enters "SE_" within the location ID+ field
      And user switches to frame
      Then user should see list of swedish sites
      When user clicks on the next chunk button
    #Location Name,Location ID+,Region Name, Region ID, Latitude, Longitude
      And user highlights location "SE_Site_SE M1" and clicks ok and validates location details
      And user enters "Test Case 01.17 Event Start Time In History" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test Case 01.17 Event Start Time In History"
     # And user changes event start time -1 day in the past
    #  And user enters event start time as -9 mins past
      And user enters event start time as -95 mins past
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user clicks on attachments under sections
      And  user adds attachment and verifies under "internal"
        | summary   | description | fullFilePath       | attachments |
        | Test JPEG | Test JPEG   | Test JPEG FILE.jpg | 1           |
        | Test PNG  | Test PNG    | Test PNG FILE.png  | 2           |
        | Test PDF  | Test PDF    | Test PDF FILE.pdf  | 3           |
        | Test WORD | Test WORD   | Test WORD FILE.docx| 4           |
        | Test EXCEL| Test EXCEL  | Test XLS FILE.xls  | 5           |
        | Test PPT  | Test PPT    | Test PPT FILE.pptx | 6           |
      Then user clicks save button


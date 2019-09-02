@E2E_Tests_Core @E2E

  Feature: E2E Scenarios
    Scenario Outline: E2E Scenarios for sweden trouble event

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Telia@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user validates BU availability
      And user clicks on "<BU_Name1>" checkbox under affected BU's
      And user clicks on "<BU_Name2>" checkbox under affected BU's
      Then user validates "<BU_Name1>" and "<BU_Name2>" checkboxes are selected
      When user clicks on CTI details under sections
      And user validates availability of category dropdown
      #Then multiple statuses "1:Access:Access|Transport:BSS:Computer Equipment:Computer Services:Core:Customer Service:Customer Services:DS:External:Hardware:Internal Service:IOT:IT:Location:Miscellaneous:Network:Nokia:Organization:OSS:Packet_Transport:Product:SERVER:Service:SITE-LP:Software:Transmission:Transport:Transport|Access:TV:VAS" should be available in "Category" dropdown
      And user waits 1 secs
      And user selects Category as "Core"
      Then user validates availability of type dropdown
      #And multiple statuses "Fixed_IMS:IP:MESSAGING:Mobile CS Core Network:Mobile IMS Core Network:Mobile PS Core Network:Mobile_CS:Mobile_PS:NFVI:Other:Performance:Planning:Presentation:Software:WLAN:Workflow" should be available in "Type" dropdown
      Then user selects Type as "Mobile PS Core Network"
      When user validates availability of item dropdown
      #Then multiple statuses "DNS:EPG:GGSN:NAT:NLS:PCRF:PGW:PM:RADIUS:SGSN:SHAPERS:TPE-CMIPBB:TPE-CMIPBB_Mobile_PS" should be available in "Item" dropdown
      And user selects Item as "SGSN"
      And user validates event start time is present
      When user clicks on location under sections
    #To search for the location details you need to press enter after the text
      And user enters "<Location>" within the location ID+ field
      And user switches to frame
      Then user should see list of swedish sites
    #Location Name,Location ID+,Region Name, Region ID, Latitude, Longitude
      And user highlights location "<Location Name>" and clicks ok and validates location details
      When user enters "<Title>" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "<Description>"
      Then user clicks on save button
      And ticket should be created and status should be assigned
      #Need to validate that Timeline, Diagnosis,Interested Parties, Notification, Linked Items, Work Orders, Service Level, Alarms, Recurring Incidents, Service Info are all present
      Then user validates availability of tabs "Timeline:Diagnosis:Interested Parties:Notifications:Linked Items:Work Orders:Service Level:Alarms:Recurring Incidents:Service Info"
      When user clicks on Diagnosis tab
      And user clicks on CI search button
      Then user switches to frame
      And user clicks on clear button
      And user enters "<CI Name1>" in name field
      Then user clicks on search button on CI search window
      And user selects CI "<CI Name1>"
      #And user clicks on relate CI
      #Then error message should display as "Please fill in all required fields to relate the selected CIs. (Impact Type, Category, Level, From (Date), To (Date)) (ARERR 10000)"
      Then multiple statuses "Degradation of Service:Loss of Service:No Impact:(clear)" should be available in "Level*" dropdown
      And user selects impact level as "Degradation of Service"
      Then user clicks on relate CI
      And error message should display as "Please verify that there are no impacted CI's in other tickets by using Show CR Matching (ARWARN 10000)"
      And user enters "<CI Name2>" in name field
      Then user clicks on search button on CI search window
      And user selects CI "<CI Name2>"
      And user selects impact level as "Degradation of Service"
      Then user clicks on relate CI
      And error message should display as "Please verify that there are no impacted CI's in other tickets by using Show CR Matching (ARWARN 10000)"
      And user clicks on close button on CI search window
      And CI should be listed and displayed under the Diagnosis tab
      Then user validates CI "Impact Status" is "Active"
      And user validates "Primary" CI is equal to "<CI Name>"
      Then user clicks on save button and closes warning messages
      #Should be added automatically based on CI
      #And user validates "<Validate BU>" BU is added automatically
      When user clicks on attachments under sections
      And user clicks on add button under internal
      Then user switches to frame
      When user enters attachment summary as "Test JPEG"
      And user enters attachment description as "Test JPEG"
      Then user clicks on add button in attachment window
      And user clicks on choose file button
      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test JPEG FILE.jpg" attachment and adds it
      Then user clicks on attachment ok button
      And user switches to frame
      And user selects attachment visibility as Internal
      Then user clicks on save button on attachment window
      And user validates 1 attachment visibility under internal
      And user clicks on add button under internal
      Then user switches to frame
      When user enters attachment summary as "Test PNG"
      And user enters attachment description as "Test PNG"
      Then user clicks on add button in attachment window
      And user clicks on choose file button
      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test PNG FILE.png" attachment and adds it
      Then user clicks on attachment ok button
      And user switches to frame
      And user selects attachment visibility as Internal
      Then user clicks on save button on attachment window
      And user validates 2 attachment visibility under internal
      And user clicks on add button under internal
      Then user switches to frame
      When user enters attachment summary as "Test PDF"
      And user enters attachment description as "Test PDF"
      Then user clicks on add button in attachment window
      And user clicks on choose file button
      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test PDF FILE.pdf" attachment and adds it
      Then user clicks on attachment ok button
      And user switches to frame
      And user selects attachment visibility as Internal
      Then user clicks on save button on attachment window
      And user validates 3 attachment visibility under internal
      And user clicks on add button under internal
      Then user switches to frame
      When user enters attachment summary as "Test WORD"
      And user enters attachment description as "Test WORD"
      Then user clicks on add button in attachment window
      And user clicks on choose file button
      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test WORD FILE.docx" attachment and adds it
      Then user clicks on attachment ok button
      And user switches to frame
      And user selects attachment visibility as Internal
      Then user clicks on save button on attachment window
      And user validates 4 attachment visibility under internal
      And user clicks on add button under internal
      Then user switches to frame
      When user enters attachment summary as "Test EXCEL"
      And user enters attachment description as "Test EXCEL"
      Then user clicks on add button in attachment window
      And user clicks on choose file button
      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test XLS FILE.xls" attachment and adds it
      And user waits 2 secs
      Then user clicks on attachment ok button
      And user switches to frame
      And user selects attachment visibility as Internal
      Then user clicks on save button on attachment window
      And user validates 5 attachment visibility under internal
      And user clicks on add button under internal
      Then user switches to frame
      When user enters attachment summary as "Test PPT"
      And user enters attachment description as "Test PPT"
      Then user clicks on add button in attachment window
      And user clicks on choose file button
      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test PPT FILE.pptx" attachment and adds it
      Then user clicks on attachment ok button
      And user switches to frame
      And user selects attachment visibility as Internal
      Then user clicks on save button on attachment window
      And user validates 6 attachment visibility under internal
      And user clicks on add button under internal
      Then user switches to frame
      When user enters attachment summary as "Test JPEG"
      And user enters attachment description as "Test JPEG"
      Then user clicks on add button in attachment window
      And user clicks on choose file button
      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test JPEG FILE.jpg" attachment and adds it
      Then user clicks on attachment ok button
      And user switches to frame
      And user selects attachment visibility as external
      Then user clicks on save button on attachment window
      And user validates 7 attachment visibility under internal
      And user clicks on add button under internal
      Then user switches to frame
      When user enters attachment summary as "Test PNG"
      And user enters attachment description as "Test PNG"
      Then user clicks on add button in attachment window
      And user clicks on choose file button
      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test PNG FILE.png" attachment and adds it
      Then user clicks on attachment ok button
      And user switches to frame
      And user selects attachment visibility as external
      Then user clicks on save button on attachment window
      And user validates 8 attachment visibility under internal
      And user clicks on add button under internal
      Then user switches to frame
      When user enters attachment summary as "Test PDF"
      And user enters attachment description as "Test PDF"
      Then user clicks on add button in attachment window
      And user clicks on choose file button
      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test PDF FILE.pdf" attachment and adds it
      Then user clicks on attachment ok button
      And user switches to frame
      And user selects attachment visibility as external
      Then user clicks on save button on attachment window
      And user validates 9 attachment visibility under internal
      And user clicks on add button under internal
      Then user switches to frame
      When user enters attachment summary as "Test WORD"
      And user enters attachment description as "Test WORD"
      Then user clicks on add button in attachment window
      And user clicks on choose file button
      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test WORD FILE.docx" attachment and adds it
      Then user clicks on attachment ok button
      And user switches to frame
      And user selects attachment visibility as external
      Then user clicks on save button on attachment window
      And user validates 10 attachment visibility under internal
      And user clicks on add button under internal
      Then user switches to frame
      When user enters attachment summary as "Test EXCEL"
      And user enters attachment description as "Test EXCEL"
      Then user clicks on add button in attachment window
      And user clicks on choose file button
      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test XLS FILE.xls" attachment and adds it
      Then user clicks on attachment ok button
      And user switches to frame
      And user selects attachment visibility as external
      Then user clicks on save button on attachment window
      And user validates 11 attachment visibility under internal
      And user clicks on add button under internal
      Then user switches to frame
      When user enters attachment summary as "Test PPT"
      And user enters attachment description as "Test PPT"
      Then user clicks on add button in attachment window
      And user clicks on choose file button
      And user searches for "C:\Users\mahesh vaddegani\Downloads\Test Case Attachments 2\Test PPT FILE.pptx" attachment and adds it
      Then user clicks on attachment ok button
      And user switches to frame
      And user selects attachment visibility as external
      Then user clicks on save button on attachment window
      And user validates 12 attachment visibility under internal
      And user clicks on "Timeline" tab
      When user enters "Test Update - Public" in the timeline text box
      And user clicks on public radio button
      And user clicks on add button
      Then change should also be reflected in the timeline as "Test Update - Public"
      When user clicks on Ack button
      Then user changes status to "Cleared" on trouble event page
      And user enters "Test Resolution Result" in the timeline text box
      And user clicks on add button
      Then change should also be reflected in the timeline as "Test Resolution Result"
      When user clicks on root cause under sections
      And user enters root cause description as "Test Resolution"
      And user enters event end time as current time
      Then user clicks on save button
      Then multiple error messages should appear with red boarder around fields
      When user selects fault position as "N/A:N/A" on trouble event page
      And user selects cause as "Test Ticket:N/A:N/A" on trouble event page
      When user clicks on "Diagnosis" tab
      And user right clicks on primary CI and selects "Impact:Clear All"
      And user should see confirmation message for impact clear and clicks ok
      Then user clicks on save button
      And user validates ticket status as "Cleared"
      When user changes status to "Closed" on trouble event page
      And user clicks on save button
      Then an error message should appear: "Required field (without a default) not specified : Closure Info (ARERR 9424)"
      And an error message should appear: "Required field (without a default) not specified : Action (ARERR 9424)"
      And user selects action dropdown as "N/A:N/A" on trouble event page
      And user enters closure info as "Test Ticket"
      And user clicks on save button
      Then user validates ticket status as "Closed"
      And user logsOut and closes the browser
      And user switches to window 0


      Examples:
      |BU_Name1 |BU_Name2 |Location|Location Name         |Title                        |Description                  |CI Name1          |CI Name2        |CI Name      |Validate BU |
      |Sweden   |Finland  |SE_     |SE_Site_SE M1         |Test case MT004 Sweden E2E   |Test case MT004 Sweden E2E   |SE_SGSN_FREMME2  |LT_SGSN_VLMMME02|SE_SGSN_FREMME2  |Lithuania   |
#     |Norway   |Finland  |NO_     |NO_Site_VSF087        |Test case MT004 Norway E2E   |Test case MT004 Norway E2E   |NO_EPG_OSL900EPG2|DK_EPG_AMBEPG1  |NO_EPG_OSL900EPG2|Denmark     |
#     |Lithuania|Denmark  |LT_     |LT_Site_888           |Test case MT004 Lithuania E2E|Test case MT004 Lithuania E2E| LT_SGSN_VLMMME02|SE_SGSN_FREMME2 |LT_SGSN_VLMMME02 |Sweden      |
#     |Finland  |Denmark  |FI_     |FI_Site_riutula keskus|Test case MT004 Finland E2E  |Test case MT004 Finland E2E  | FI_SGSN_HKIMME02|EE_EPG_KOORTEPG1|FI_SGSN_HKIMME02 |Estonia     |
#     |Estonia  |Sweden   |EE_     |EE- AUT0001           |Test case MT004 Estonia E2E  |Test case MT004 Estonia E2E  |EE_EPG_KOORTEPG1 |FI_SGSN_HKIMME02|EE_EPG_KOORTEPG1 |Finland     |
#     |Denmark  |Sweden   |DK_     |DK_Site_S0001         |Test case MT004 Denmark E2E  |Test case MT004 Denmark E2E  |DK_EPG_AMBEPG1   |EE_EPG_KOORTEPG1|DK_EPG_AMBEPG1   |Estonia     |

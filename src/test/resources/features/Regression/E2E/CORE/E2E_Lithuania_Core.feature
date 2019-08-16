@E2E_Test_Norway_RAN @E2E_Test_Cases

Feature: E2E Scenarios
  Scenario: E2E Scenarios for sweden trouble event

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Telia@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create trouble event
    And user switches to window 1
    Then trouble record form should appear in new tab
    When user validates BU availability
    And user clicks on lithuania checkbox under affected BU's
    And user clicks on denmark checkbox under affected BU's
    Then user validates lithuania and denmark checkboxes are selected
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
    And user enters "LT_" within the location ID+ field
    And user switches to frame
    Then user should see list of lithuania sites
    #Location Name,Location ID+,Region Name, Region ID, Latitude, Longitude
    And user highlights location "LT_Site_888" and clicks ok and validates location details
    When user enters "Test case MT004 Lithuania E2E" in Title field in Trouble event
    And user selects request type as "Customer" on trouble event page
    And user enters description as "Test case MT004 Lithuania E2E"
    Then user clicks on save button
    And ticket should be created and status should be assigned
      #Need to validate that Timeline, Diagnosis,Interested Parties, Notification, Linked Items, Work Orders, Service Level, Alarms, Recurring Incidents, Service Info are all present
    Then user validates availability of tabs "Timeline:Diagnosis:Interested Parties:Notifications:Linked Items:Work Orders:Service Level:Alarms:Recurring Incidents:Service Info"
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user switches to frame
    And  user enters "LT_SGSN_VLMMME02" in location field
    Then user clicks on search button on CI search window
    And user selects CI "LT_SGSN_VLMMME02"
    And user clicks on relate CI
    Then error message should display as "Please verify that there are no impacted CI's in other tickets by using Show CR Matching (ARWARN 10000)"
      #And error message should display as "Please fill in all impact details in order to relate CI to the request. (ARERR 300825)"
      #Need to validate the options under impact level: "Degradation of service, Loss of Service, No Impact, (clear)"
    Then multiple statuses "Degradation of service:Loss of Service:No Impact:(clear)" should be available in "Level*" dropdown
    And user selects impact level as "Degradation of Service"
    Then user clicks on relate CI
    And error message should display as "Please verify that there are no impacted CI's in other tickets by using Show CR Matching (ARWARN 10000)"
    When user clicks on clear on CI search window
    And user enters "SE_SGSN_FREMME2" in location field
    Then user clicks on search button on CI search window
    And user selects CI "SE_SGSN_FREMME2"
    And user clicks on relate CI
    And user selects impact level as "Degradation of Service"
    Then user clicks on relate CI
    And user clicks on close button on CI search window
    And CI should be listed and displayed under the Diagnosis tab
    Then user validates CI "Impact Status" is "Active"
    And user validates "Primary" CI is equal to "LT_SGSN_VLMMME02"
    Then user clicks on save button
      #Should be added automatically based on CI
    And user validates "Sweden" BU is added automatically
    When user clicks on attachments under sections
    And user clicks on add button under internal
    Then user switches to frame
    And user clicks on add button
    Then user clicks on save button on attachment window
    And an error message should appear: "Check for Mandatory fields - Summary,Description,Attachment,Visibility (ARERR 13034)"
    Then user clicks on attachment ok button
    When user enters attachment summary as "Test JPEG"
    And user enters attachment description as "Test JPEG"
    Then user clicks on add button in attachment window
    And user clicks on browse button
    And user searches for a JPEG attachment and adds it
    Then user clicks on attachment ok button
    And user clicks on save button on attachment window
    And an error message should appear: "Check for Mandatory fields - Visibility (ARERR 13034)"
    Then user clicks on warning ok button
    And user selects attachment visibility as "Internal"
    Then user clicks on save button on attachment window
    And user switches to window 1
    And user validates attachment visibility under internal
    When user clicks on add button under internal
    Then user switches to frame
    And user clicks on add button
    And user enters attachment summary as "Test JPEG"
    And user enters attachment description as "Test JPEG"
    And user clicks on browse button
    Then user searches for a PNG attachment and adds it
    Then user clicks on attachment ok button
    And user selects attachment visibility as "Internal"
    Then user clicks on save button on attachment window
    And user switches to window 1
    And user validates attachment visibility under internal
    When user clicks on add button under internal
    Then user switches to frame
    And user clicks on add button
    And user enters attachment summary as "Test PDF"
    And user enters attachment description as "Test PDF"
    And user clicks on browse button
    Then user searches for a PDF attachment and adds it
    Then user clicks on attachment ok button
    And user selects attachment visibility as "Internal"
    Then user clicks on save button on attachment window
    And user switches to window 1
    And user validates attachment visibility under internal
    When user clicks on add button under internal
    Then user switches to frame
    And user clicks on add button
    And user enters attachment summary as "Test Word Doc"
    And user enters attachment description as "Test Word Doc"
    And user clicks on browse button
    Then user searches for a Word Doc attachment and adds it
    Then user clicks on attachment ok button
    And user selects attachment visibility as "Internal"
    Then user clicks on save button on attachment window
    And user switches to window 1
    And user validates attachment visibility under internal
    When user clicks on add button under internal
    Then user switches to frame
    And user clicks on add button
    And user enters attachment summary as "Test Excel"
    And user enters attachment description as "Test Excel"
    And user clicks on browse button
    Then user searches for a Excel attachment and adds it
    Then user clicks on attachment ok button
    And user selects attachment visibility as "Internal"
    Then user clicks on save button on attachment window
    And user switches to window 1
    And user validates attachment visibility under internal
    When user clicks on add button under internal
    Then user switches to frame
    And user clicks on add button
    And user enters attachment summary as "Test Powerpoint"
    And user enters attachment description as "Test PPTX"
    And user clicks on browse button
    Then user searches for a Powerpoint attachment and adds it
    Then user clicks on attachment ok button
    And user selects attachment visibility as "Internal"
    Then user clicks on save button on attachment window
    And user switches to window 1
    And user validates attachment visibility under internal
    When user clicks on add button under external
    Then user switches to frame
    And user clicks on add button under external
    Then user clicks on save button on attachment window
    And an error message should appear: "Check for Mandatory fields - Summary,Description,Attachment,Visibility (ARERR 13034)"
    Then user clicks on attachment ok button
    When user enters attachment summary as "Test JPEG"
    And user enters attachment description as "Test JPEG"
    Then user clicks on add button in attachment window
    And user clicks on browse button
    And user searches for a JPEG attachment and adds it
    Then user clicks on attachment ok button
    And user clicks on save button on attachment window
    And an error message should appear: "Check for Mandatory fields - Visibility (ARERR 13034)"
    Then user clicks on warning ok button
    And user selects attachment visibility as "External"
    Then user clicks on save button on attachment window
    And user switches to window 1
    And user validates attachment visibility under external
    When user clicks on add button under internal
    Then user switches to frame
    And user clicks on add button
    And user enters attachment summary as "Test JPEG"
    And user enters attachment description as "Test JPEG"
    And user clicks on browse button
    Then user searches for a PNG attachment and adds it
    Then user clicks on attachment ok button
    And user selects attachment visibility as "External"
    Then user clicks on save button on attachment window
    And user switches to window 1
    And user validates attachment visibility under external
    When user clicks on add button under internal
    Then user switches to frame
    And user clicks on add button
    And user enters attachment summary as "Test PDF"
    And user enters attachment description as "Test PDF"
    And user clicks on browse button
    Then user searches for a PDF attachment and adds it
    Then user clicks on attachment ok button
    And user selects attachment visibility as "External"
    Then user clicks on save button on attachment window
    And user switches to window 1
    And user validates attachment visibility under external
    When user clicks on add button under internal
    Then user switches to frame
    And user clicks on add button
    And user enters attachment summary as "Test Word Doc"
    And user enters attachment description as "Test Word Doc"
    And user clicks on browse button
    Then user searches for a Word Doc attachment and adds it
    Then user clicks on attachment ok button
    And user selects attachment visibility as "External"
    Then user clicks on save button on attachment window
    And user switches to window 1
    And user validates attachment visibility under external
    When user clicks on add button under internal
    Then user switches to frame
    And user clicks on add button
    And user enters attachment summary as "Test Excel"
    And user enters attachment description as "Test Excel"
    And user clicks on browse button
    Then user searches for a Excel attachment and adds it
    Then user clicks on attachment ok button
    And user selects attachment visibility as "External"
    Then user clicks on save button on attachment window
    And user switches to window 1
    And user validates attachment visibility under external
    When user clicks on add button under internal
    Then user switches to frame
    And user clicks on add button
    And user enters attachment summary as "Test Powerpoint"
    And user enters attachment description as "Test PPTX"
    And user clicks on browse button
    Then user searches for a Powerpoint attachment and adds it
    Then user clicks on attachment ok button
    And user selects attachment visibility as "External"
    Then user clicks on save button on attachment window
    And user switches to window 1
    And user validates attachment visibility under external
    When user enters "Test Update - Public" in the timeline text box
    And user clicks on public radio button
    And user clicks on add button
    Then change should also be reflected in the timeline as "Test Update - Public"
    When user clicks on Ack button
    Then user changes status to "Cleared"
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
    When user changes status to "Closed"
    And user clicks on save button
    Then an error message should appear: "Required field (without a default) not specified : Closure Info (ARERR 9424)"
    And an error message should appear: "Required field (without a default) not specified : Action (ARERR 9424)"
    And user selects action dropdown as "N/A:N/A" on trouble event page
    And user enters closure info as "Test Ticket"
    And user clicks on save button
    Then user validates ticket status as "Closed"

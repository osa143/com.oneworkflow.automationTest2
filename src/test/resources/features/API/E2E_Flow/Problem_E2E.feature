@APIProblem_E2E
#Test needs ticket created from API
Feature: E2E Validation of API created trouble ticket
  Scenario: user validates all information on API ticket and processes ticket E2E

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Problem Record"
    And user enters ticket id as ""
    Then user should see trouble ticket
    And user validates ticket status as "Assigned"
    Then user validates service provider as "Telia Company"
    And user validates source field as "One Workflow"
    Then user validates source id as "123456789"
    And user validates finland as affected BU
    Then user validates title field as "Test Ticket"
    And user validates request type as "CPS | IT | Other"
    Then user validates description as "Test Ticket"
    And user validates Impact as "Extensive/Widespread"
    Then user validates urgency as "High"
    And user validates ticket priority as "Critical"
    Then user validates root cause code is "External | 3rd Party Failure | External value chain"
    And user validates root cause details as "Test Ticket"
    Then user validates service affected as "Test"
    And user validates estimated ready time as "24/05/2019 17:49:50"
    Then user validates actual finish as "24/05/2019 17:49:50"
    And user validates decision go no go as "24/05/2019 17:49:50"
    Then user validates workaround as "Testing"
    And user validates RC found date as "24/05/2019 17:49:50"
    Then user validates Category as "Hardware"
    And user validates type as "Processing unit"
    Then user validates item as "Server"
    And user validates technology as "Processing unit"
    Then user validates model as "VMware Virtual Platform"
    And user validates manufacturer as "VMware, Inc."
    Then user validates location id as "DK- MAN0019"
    And user validates location name as "DK_Site_DK-NFVI Virt DK"
    Then user validates region id as "1084"
    And user validates region name as "Hovedstaden"
    Then user validates latitude as "55.709710"
    And user validates x degree as "0"
    And user validates longitude as "12.482850"
    And user validates y degree as "0"
    Then user validates location details as ""
    And user validates owner profile as "Problem Manager"
    And user validates owner as "frvi96_auto"
    Then user should see assigned profile as "Problem Manager"
    And user validates assignee is "frvi96_auto"
    Then user validates last ack by as "frvi96_auto"
    And user validates reassignment count as "3"
    Then user validates vendor name as "Test Vendor Name"
    And user validates onsite engineers as "Test onsite engineers"
    Then user validates account number as "123456789"
    And user validates telephone number as "123456789"
    Then user validates hours of operation as "1"
    And user validates vendor ref as "Test Vendor Ref"
    And user validates onsite contact as "Test onSite Contact"
    Then user validates travel time as "Test travel time"
    When user enters "Test Update - Public" in the timeline text box
    And user clicks on public radio button
    Then user clicks on add button on timeline
    And change should also be reflected in the timeline as "Test Update - Public" for trouble ticket in row 1
    And user enters "Test Update - Public" in the timeline text box
    And user clicks on private radio button
    Then user clicks on add button on timeline
    And change should also be reflected in the timeline as "Test Update - Private" for trouble ticket in row 1
    When user unticks all affected BU
    And user clicks save button
    Then error message should display as ""
    When user clicks on sweden checkbox under affected BU's
    And user clicks save button
    Then user validates Sweden is selected as Affected BU
    When user enters "" in Title field
    And user clicks save button
    Then error message should display as "Required field (without a default) not specified : Title (ARERR 9424)"
    When user enters title as "New Test Title"
    And user clicks save button
    Then form should be saved
    When user selects request type as "(clear)"
    And user clicks save button
    Then an error message should appear: "Required field (without a default) not specified : Request Type (ARERR 9424)"
    When user selects request type as "Access Networks | Copper Denmark"
    And user clicks save button
    Then form should be saved
    When user enters description as ""
    And user clicks save button
    Then error message should display as "Required field (without a default) not specified : Description (ARERR 9424)"
    When user enters description as "New Test Description"
    And user clicks save button
    Then form should be saved
    When user selects impact as "(clear)"
    And user clicks save button
    Then error message should display as "Required field (without a default) not specified : Impact (ARERR 9424)"
    Then user selects impact as "Extensive/Widespread"
    And user clicks save button
    Then form should be saved
    When user selects urgency as "(clear)"
    And user clicks save button
    Then error message should display as "Required field (without a default) not specified : Urgency (ARERR 9424)"
    When user selects urgency as "High"
    And user clicks save button
    Then form should be saved
    When user selects impact as "Moderate/Limited"
    And user selects urgency as "Low"
    Then user validates that priority changes to "Minor"
    And user selects urgency as "Medium"
    Then user validates that priority changes to "Minor"
    And user selects urgency as "High"
    Then user validates that priority changes to "Major"
    And user selects urgency as "Critical"
    Then user validates that priority changes to "Major"
    When user selects impact as "Significant/Large"
    And user selects urgency as "Low"
    Then user validates that priority changes to "Minor"
    And user selects urgency as "Medium"
    Then user validates that priority changes to "Major"
    And user selects urgency as "High"
    Then user validates that priority changes to "Major"
    And user selects urgency as "Critical"
    Then user validates that priority changes to "Critical"
    When user selects impact as "Extensive/Widespread"
    And user selects urgency as "Low"
    Then user validates that priority changes to "Minor"
    And user selects urgency as "Medium"
    Then user validates that priority changes to "Major"
    And user selects urgency as "High"
    Then user validates that priority changes to "Critical"
    And user selects urgency as "Critical"
    Then user validates that priority changes to "Critical"
    When user clicks on attachments under sections
    And  user adds attachment and verifies under "internal"
      | summary   | description | FileType           | attachments |
      | Test JPEG | Test JPEG   | Test JPEG FILE.jpg | 1           |
      | Test PNG  | Test PNG    | Test PNG FILE.png  | 2           |
      | Test PDF  | Test PDF    | Test PDF FILE.pdf  | 3           |
      | Test WORD | Test WORD   | Test WORD FILE.docx| 4           |
      | Test EXCEL| Test EXCEL  | Test XLS FILE.xls  | 5           |
      | Test PPT  | Test PPT    | Test PPT FILE.pptx | 6           |
    Then change should also be reflected in the timeline as "Attachment has been added. File Name - attachement.doc.txt" for trouble ticket in row 1
    When user clicks on CTI details under sections
    And user selects Category as "Core"
    And user selects Type as "IP"
    And user selects Item as "DNS"
    And user selects "Technology" as "Broadband"
    Then user clicks save button
    When user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user switches to frame
    And user clicks on clear button
    And user enters CI as "SE_AP_tylosand-first-camp-ap10b2"
    And user clicks on search button on CI search window
    Then user selects CI "SE_AP_tylosand-first-camp-ap10b2"
    And user selects impact level as "No Impact"
    And user clicks on relate CI
    Then user clicks on close button on CI search window
    And user switches to window 1
    And CI should be listed and displayed under the Diagnosis tab
    Then user right clicks on CI "SE_AP_tylosand-first-camp-ap10b2" and selects "Detach Selected"
    Then CI should be detached from ticket
    When user clicks on "Timeline" tab
    Then change should also be reflected in the timeline as "Impact record created for SE_AP_tylosand-first-camp-ap10b2"
    When user clicks on "Interested Parties" tab
    Then user clicks on add button under interested parties
    And user switches to frame
    And user selects type as "Additional Access" under interested parties
    And user clicks on radio button user
    And user enters "Tohall_copy" in login name plus field
    Then user clicks on search under add interested party
    And user highlights present user under add interested party
    Then user selects access radio button as read and write
    And user selects auto notify radio button as yes
    Then user clicks on save button under interested parties frame
    And user switches to window 1
    And user clicks on "Timeline" tab
    Then change should also be reflected in the timeline as "The User Tomas Hallén has been added as interested parties."
    And user clicks on add email button
    Then user validates "Tohall_Copy" is listed as an interested party
    When user clicks on timeline tab
    Then change should also be reflected in the timeline as "The User has been added as interested parties."
    When user clicks on linked items tab
    And user selects target application first dropdown as "OS3 - Change"
    And user selects target application second dropdown as "Is workaround for"
    Then user clicks on create button under linked items
    And user switches to window 2
    Then user selects request type as "Normal Change"
    And user selects title as "IT | Automation API" on Change record page
    And user selects request category as "Other" on change record page
    And user enters description as "New Test Description"
    And user enters reason field as "Test Reason"
    And user selects priority as "Critical"
    Then user enters as "Testing" in Change Builder field
    And user enters "Test" in the implementation field
    And user enters "Test" in the test plan field
    And user enters "Test" in the rollback field
    And user enters "Test" in the communication plan field
    And user enters "Test" in the ver of functionality field
    And user enters "Test" in the risk description field
    Then user enters as "Test" in service and customer impact
    And user enters request start time 24 hours ahead of current date
    And user enters request end time 48 hours ahead of current date
    Then user selects estimated impact dropdown as "No Impact"
    And user enters impact duration as "30" minutes
    Then user clicks save button
    And user switches to window 1
    Then user clicks refresh button under linked items
    Then user validates 1 linked ticket availability
    And user selects target application first dropdown as "OS3 - Known Error"
    And user selects target application second dropdown as "Solution for"
    And user clicks on create button under linked items
    And user switches to window 2
    Then user clicks save button
    And user switches to window 1
    Then user clicks refresh button under linked items
    Then user validates 2 linked ticket availability
    When user selects target application first dropdown as "OS3 - Operations"
    And user selects target application second dropdown as "Is related to"
    Then user clicks on create button under linked items
    And user switches to window 2
    Then user selects request type as "Customer"
    Then user clicks save button
    And user switches to window 1
    Then user clicks refresh button under linked items
    Then user validates 3 linked ticket availability
    When user selects target application first dropdown as "OS3 - Problem"
    And user selects target application second dropdown as "Caused by"
    Then user clicks on create button under linked items
    And user switches to window 2
    Then user selects request type as "Access Networks | Copper Denmark"
    And user selects impact as "Significant/Large"
    And user selects urgency as "Low"
    And user clicks save button
    And user switches to window 1
    Then user clicks refresh button under linked items
    Then user validates 4 linked ticket availability
    When user selects target application first dropdown as "OS3 - Work Order"
    And user selects target application second dropdown as "Caused by"
    Then user clicks on create button under linked items
    And user switches to window 2
    Then user selects request type as "Analysis"
    And user clicks save button
    Then user switches to window 1
    And user clicks on main page refresh
    And user clicks on ticket refresh button
    Then user clicks refresh button under linked items
    Then user validates 5 linked ticket availability
    And user clicks on work order tab
    Then user clicks on create from ticket
    And user switches to window 2
    Then user selects request type as "Analysis"
    And user clicks save button
    Then user clicks refresh button
    And user highlights ticket under work order
    Then user clicks on open button
    When user switches to window 3
    Then user clicks "Additional Info" tab
    And user enters "Tohall_copy" in the analysis team member one field
    And user clicks save button
    Then user validates "Tohall_copy" is listed under analysis team member one field
    Then user clicks on Ack button
    And user validates ticket status as "Under Investigation"
    Then user changes status to "Investigation Complete"
    And user clicks save button
    Then user changes status to "Closed"
    And user selects completed code as "Workaround"
    And user enters solution as "Test Solution"
    And user enters solution found date as current date
    Then user validates ticket status as "Closed" 




    








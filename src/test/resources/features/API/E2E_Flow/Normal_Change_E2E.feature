@API_Change_E2E
  Feature: E2E Validation of API created change ticket
    Scenario: user validates all information on API ticket and processes ticket E2E

      Given user is on the OneWorkflow login page
      When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
      And user enters ticket id as ""
      Then user should see trouble ticket
      And user validates change type as "Change Record"
      And user validates ticket status as "Assigned"
      Then user validates service provider as "Telia Company"
      And user validates source field as "One Workflow"
      Then user validates source id as "123456789"
      And user validates finland as affected BU
      Then user validates request type as "Normal Change"
      And user validates change initiator as "apitester1"
      And user validates template field as "TEST TEMPLATE [UAT] - Normal Change"
      Then user validates title field as "API Test Title"
      And user validates request category as "Configuration"
      Then user validates description as "Test Ticket"
      And user validates reason as "Testing"
      Then user validates ticket priority as "Critical"
      And user validates project code as "string"
      And user validates change builder+* as "TestBuilder"
      And user clicks on CTI details under sections
      And user clicks on location under sections
      And user clicks on owner under sections
      And user clicks on assignment under sections
      And user clicks on details under sections
      And user clicks on On Hold under sections
      And user clicks on vendor under sections
      And user clicks on attachments under sections
      And user clicks on closure under sections
      Then user validates Category as "Access"
      And user validates type as "Radio Access Network"
      Then user validates item as "UMTSCell"
      And user validates technology as "UMTS900"
      And user validates manufacturer as "Huawei"
      Then user validates location id as "FI- AUT1088"
      And user validates location name as "FI_Site_tsahkaljohka"
      And user validates region id as "1"
      And user validates region name as "Uusimaa"
      Then user validates latitude as "60.639250"
      And user validates x degree as "0"
      Then user validates longitude as "25.335010"
      And user validates y degree as "0"
      And user validates location details as ""
      Then user validates owner profile as "Change Manager"
      And user validates owner as "ChangeManager"
      Then user should see assigned profile as "Change Manager"
      And user validates assignee is ""
      Then user validates last ack by as ""
      And user validates reassignment count as ""
      Then user validates implementation as "AAimplementation"
      And user validates test plan as "AATestplan"
      And user validates rollback as "AArollback"
      And user validates communication plan as "AAComm"
      And user validates ver of functionality* as "AAVerOfFunc"
      And user validates risk description* as "AARiskDesc"
      Then user validates vendor name+ as "Test Name"
      And user validates onsite engineers as "Test Engineer"
      And user validates account number as "12345"
      And user validates telephone number as "123456789"
      Then user validates hours of operation as "8"
      And user validates vendor ref as "123456789"
      And user validates onsite contact as "Test Contact"
      When user enters "Test Update - Public" in the timeline text box
      And user clicks on public radio button
      Then user clicks on add button on timeline
      And change should also be reflected in the timeline as "Test Update - Public" for change ticket in row 1
      And user enters "Test Update - Public" in the timeline text box
      And user clicks on private radio button
      Then user clicks on add button on timeline
      And change should also be reflected in the timeline as "Test Update - Private" for change ticket in row 1
      When user unticks all affected BU
      And user clicks save button
      Then error message should display as ""
      When user clicks on sweden checkbox under affected BU's
      And user clicks save button
      Then user validates Sweden is selected as Affected BU
      When user enters description as ""
      And user clicks save button
      Then error message should display as "Required field (without a default) not specified : Description (ARERR 9424)"
      When user enters description as "New Test Description"
      Then user clicks save button
      Then form should be saved
      When user enters project code as ""
      And user clicks save button
      Then form should be saved
      When user enters project code as "New Project Code"
      And user clicks save button
      Then form should be saved
      When user enters "" in the change builder field
      And user clicks save button
      Then error message should display as ""
      When user clicks on attachments under sections
      And  user adds attachment and verifies under "internal"
        | summary   | description | fullFilePath                                                                        | attachments |
        | Test JPEG | Test JPEG   | C:\Users\mahesh vaddegani\Downloads\Test Attachments\other files\Test JPEG FILE.jpg | 1           |
        | Test PNG  | Test PNG    | C:\Users\mahesh vaddegani\Downloads\Test Attachments\other files\Test PNG FILE.png  | 2           |
        | Test PDF  | Test PDF    | C:\Users\mahesh vaddegani\Downloads\Test Attachments\other files\Test PDF FILE.pdf  | 3           |
        | Test WORD | Test WORD   | C:\Users\mahesh vaddegani\Downloads\Test Attachments\other files\Test WORD FILE.docx| 4           |
        | Test EXCEL| Test EXCEL  | C:\Users\mahesh vaddegani\Downloads\Test Attachments\other files\Test XLS FILE.xls  | 5           |
        | Test PPT  | Test PPT    | C:\Users\mahesh vaddegani\Downloads\Test Attachments\other files\Test PPT FILE.pptx | 6           |

      Then change should also be reflected in the timeline as "Attachment has been added. File Name - attachement.doc.txt"
      And user selects Category as "Core"
      And user selects Type as "Other"
      And user selects Item as "BR"
      And user selects "Technology" as "Broadband"
      Then user clicks save button
      When user clicks on Diagnosis tab
      Then user clicks on CI search button
      And user switches to frame
      And user clicks on clear button
      And user enters CI as "DK_BSC_ALG3B"
      And user clicks on search button on CI search window
      And user selects CI "DK_BSC_ALG3B"
      Then user selects impact level as "No Impact"
      And user clicks on relate CI
      And user closes warning message
      And user switches to window 1
      And CI should be listed and displayed under the Diagnosis tab
      When user clicks on timeline tab
      And change should also be reflected in the timeline as "Impact record created for DK_BSC_ALG3B" for change ticket in row 1
      When user clicks on Diagnosis tab
      Then user right clicks on CI "DK_BSC_ALG3B" and selects "Detach Selected"
      Then CI should be detached from ticket
      When user clicks on risk tab
      And user answers all risk questions as below
      And user selects answer as "A. No"
      And user selects answer as "B. Impact to other systems/technologies are unclear!"
      And user selects answer as "A. Tested successfully, this is a pilot"
      And user selects answer as "A. Only Consumer customers affected."
      And user selects answer as "A. Yes"
      And user selects answer as "A. Yes"
      And user selects answer as "A. Yes (outcome of the Change can be instantly verified)"
      And user selects answer as "B. No"
      And user selects answer as "A. No"
      And user selects answer as "A. No"
      When user clicks on "Schedule" tab
      Then user enters as "" in service and customer impact
      And user clicks save button
      And error message should display as "Required field (without a default) not specified : Service And Customer Impact (ARERR 9424)"
      Then user enters as "New test ticket" in service and customer impact
      And user enters request start time 24 hours ahead of current date
      And user enters request end time 48 hours ahead of current date
      And user enters impact duration as "60" minutes
      And user clicks save button
      Then error message should display as "Value does not fall within the limits specified for the field : Range is 0-59 : Mins* (ARERR 9272)"
      And user enters impact duration as "60" seconds
      And user clicks save button
      Then error message should display as "Value does not fall within the limits specified for the field : Range is 0-59 : Secs* (ARERR 9272)"
      And user enters impact duration as "24" hours
      And user clicks save button
      Then error message should display as "Value does not fall within the limits specified for the field : Range is 0-23 : Hrs* (ARERR 9272)"
      And user enters impact duration as "30" minutes
      And user clicks save button
      Then form should be saved
      When user enters actual start as "14/11/2019 00:00:00"
      And user enters actual end as "15/11/2019 00:00:00"
      Then user selects actual impact as "No Impact"
      And user selects completed code as "Successful"
      Then user clicks save button
      Then form should be saved
      When user clicks on timeline tab
      Then user validates timeline message Actual Start Date "ChangeManager1_Automation - The Actual Start Date Time has been updated to : 2019-11-14 00:00:00 UTC"
      Then user validates timeline message Actual End Date "ChangeManager1_Automation - The Actual End Date Time has been updated to : 2019-11-15 00:00:00 UTC"
      When user clicks on "Interested Parties" tab
      And user clicks on add button under interested parties
      And user selects type as "Additional Access" under interested parties
      And user clicks on radio button user
      Then user validates "Tohall_Copy" is listed as an interested party
      Then user clicks on search under add interested party
      And user selects first entry from the table under add interested party
      Then user selects access radio button as read and write
      And user selects auto notify radio button as yes
      Then user clicks on save button under interested parties frame
      And user switches to window 1
      And user clicks on "Timeline" tab
      Then change should also be reflected in the timeline as "The User Tomas Hallén has been added as interested parties."
      When user clicks on linked items tab
      Then user selects target application first dropdown as "OS3 - Change"
      And user selects target application second dropdown as "Is related to"
      Then user clicks on create button under linked items
      Then user switches to window 2
      And user selects change type as "Change Record"
      Then user selects request type as "Normal Change"
      And user selects request category as "Other" on change record page
      And user enters reason field as "Test"
      Then user enters "Testing" in the change builder field
      And user enters "Test Implentation" in the implementation field
      And user enters "Test Plan" in the test plan field
      Then user enters "Test Rollback" in the rollback field
      And user enters "Test Communication Plan" in the communication plan field
      And user enters "Test Ver of functionality" in the ver of functionality field
      Then user enters "Test Risk Description" in the risk description field
      And user enters as "Test Impact" in service and customer impact
      Then user enters request start time 24 hours ahead of current date
      Then user enters request end time 48 hours ahead of current date
      And user selects estimated impact dropdown as "No Impact"
      Then user enters impact duration as "40" minutes
      And user clicks save button
      And user switches to window 1
      Then user clicks refresh button under linked items
      Then user validates 1 linked ticket availability
      When user selects target application first dropdown as "OS3 - Known Error"
      And user selects target application second dropdown as "Fixed"
      Then user clicks on link button under linked items tab
      And user switches to frame
      And user clicks on clear button
      Then user selects Category as "Access"
      And user selects Type as "RAN"
      And user selects Item as "SYNC"
      And user clicks on the search button
      And user clicks first ticket listed under select target request
      And user clicks accept button
      Then user switches to window 1
      Then user validates linked tickets availability
      When user selects target application first dropdown as "OS3 - Operations"
      And user selects target application second dropdown as "Caused by"
      Then user clicks on create button under linked items
      And user switches to window 2
      Then user selects request type as "Customer"
      And user clicks save button
      Then user switches to window 1
      Then user clicks refresh button under linked items
      Then user validates linked tickets availability
      When user selects target application first dropdown as "OS3 - Problem"
      Then user selects target application second dropdown as "Caused"
      And user clicks on create button under linked items
      Then user switches to window 2
      And user selects request type as "Xfunctional | Denmark" in problem form
      Then user selects impact as "Extensive/Widespread"
      And user selects urgency as "Low"
      Then user clicks save button
      And user switches to window 1
      Then user clicks refresh button under linked items
      Then user validates linked tickets availability
      When user selects target application first dropdown as "OS3 - Work Order"
      And user selects target application second dropdown as "Fixed"
      Then user clicks on create button under linked items
      And user switches to window 2
      Then user selects request type as "Analysis"
      And user clicks save button
      Then user switches to window 0
      Then user clicks refresh button under linked items
      Then user validates linked tickets availability
      And user clicks on work order tab
      Then user clicks on create from ticket
      And user switches to window 2
      Then user selects request type as "Analysis"
      And user clicks save button
      And user switches to window 0
      Then user clicks refresh button under linked items
      And user selects ticket from the linked table
      Then user clicks on open button
      And user validates ticket opens
      And user switches to window 1
      Then user clicks on Ack button
      And user changes status to "Approval Requested"
      And user clicks "Approval" tab
      Then user clicks on view button
      And user clicks approve button
      And user clicks save button
      Then user validates ticket status as "Approved"
      Then user changes status to "Schedule Requested"
      And user clicks save button
      Then user validates ticket status as "Scheduled"
      Then user changes status to "Implementation"
      And user clicks save button
      Then user changes status to "Completed"
      And user clicks save button
      Then error message should display as "Required field (without a default) not specified : Actual Impact (ARERR 9424)"
      Then error message should display as "Required field (without a default) not specified : Actual Impact (ARERR 9424)"
      Then error message should display as "Required field (without a default) not specified : Completed Code (ARERR 9424)"
      And user clicks "Schedule" tab
      Then user selects completed code as "Successful"
      Then user enters actual finish as current date
          And user clicks save button
      Then user validates ticket status as "Completed"





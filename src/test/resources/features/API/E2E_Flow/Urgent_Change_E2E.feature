@API_Known_Error_E2E
  Feature: E2E Validation of API created trouble ticket
    Scenario: user validates all information on API ticket and processes ticket E2E

      Given user is on the OneWorkflow login page
      When user logs in with valid username "EscalationManager1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
      And user enters ticket id as ""
      Then user should see change record ticket
      And user clicks on CTI details under sections
      Then user clicks on location under sections
      And user clicks on owner under sections
      Then user clicks on assignment under sections
      And user clicks on details under sections
      Then user clicks on On Hold under sections
      And user clicks on vendor under sections
      Then user clicks attachments under sections
      And user clicks on closure under sections
      And user validates change type as "Change Record"
      Then user validates ticket status as "Assigned"
      And user validates service provider as "Telia Company"
      Then user validates source field as "One Workflow"
      And user validates source id as "123456789"
      And user validates finland as affected BU
      And user validates request type as "Urgent Change"
      Then user validates change initiator as "apitester1"
      And user validates template as "TEST TEMPLATE [UAT] - Normal Change"
      Then user validates title field as "IT | Other"
      And user validates request category as "Configuration"
      Then user validates description as "Test Ticket"
      And user validates reason as "Testing"
      Then user validates ticket priority as "Critical"
      And user validates project code as "string"
      Then user validates change builder as "TestBuilder"
      And user validates Category as "Access"
      Then user validates type as "Radio Access Network"
      And user validates item as "UMTSCell"
      Then user validates technology as "UMTS900"
      And user validates manufacturer as "Huawei"
      Then user validates location id as "FI- AUT1088"
      And user validates location name as "FI_Site_tsahkaljohka"
      Then user validates region id as "1"
      And user validates region name as "Uusimaa"
      Then user validates latitude as "60.639250"
      And user validates x degree as "0"
      And user validates longitude as "25.335010"
      Then user validates y degree as "0"
      And user validates owner profile as "Change Manager"
      Then user validates owner as "ChangeManager"
      And user validates assigned profile as "Change Manager"
      Then user validates implementation as "AAimplementation"
      And user validates test plan as "AATestplan"
      Then user validates rollback as "AArollback"
      And user validates communication plan as "AAComm"
      Then user validates ver of functionality as "AAVerOfFunc"
      And user validates risk description as "AARiskDesc"
      Then user validates vendor name as "Test Name"
      And user validates onsite engineer as "Test Engineer"
      Then user validates account number as "12345"
      And user validates phone number as "123456789"
      Then user validates hours of operation as "8"
      And user validates vendor ref as "123456789"
      Then user validates onsite contact as "Test Contact"
      And user validates availability of tabs "Timeline,Diagnosis,Risk,Schedule,Interested Parties, Approval, Notifications, Linked Items, Work Orders, Service Level, Telenor" on change record page
      And  user adds attachment and verifies under "internal"
        | summary   | description | FileType           | attachments |
        | Test JPEG | Test JPEG   | Test JPEG FILE.jpg | 1           |
        | Test PNG  | Test PNG    | Test PNG FILE.png  | 2           |
        | Test PDF  | Test PDF    | Test PDF FILE.pdf  | 3           |
        | Test WORD | Test WORD   | Test WORD FILE.docx| 4           |
        | Test EXCEL| Test EXCEL  | Test XLS FILE.xls  | 5           |
        | Test PPT  | Test PPT    | Test PPT FILE.pptx | 6           |


      Then change should also be reflected in the timeline as "Attachment has been added. File Name - attachement.doc.txt" for change ticket in row 1
      When user clicks on Diagnosis tab
      Then user clicks on CI search button
      And user switches to frame
      And user clicks on clear button
      Then user enters CI as "DK_BSC_ALG3B"
      And user clicks on search button on CI search window
      And user selects CI "DK_BSC_ALG3B"
      And user selects impact level as "No Impact"
      Then user clicks on relate CI
      And user closes warning message
      And user switches to window 1
      And CI should be listed and displayed under the Diagnosis tab
      When user clicks on timeline tab
      Then change should also be reflected in the timeline as "Impact record created for "DK_BSC_ALG3B"
      When user clicks on Diagnosis tab
      Then user right clicks on CI "DK_BSC_ALG3B" and selects "Detach Selected"
      Then CI should be detached from ticket
      When user clicks on risk tab
      And user validates all risk questions as below
      And user selects urgent answer as "A. No"
      And user selects urgent answer as "B. Impact to other systems/technologies are unclear!"
      And user selects urgent answer as "High number of SLA customers."
      And user selects urgent answer as "D. "Only" Consumer customers affected."
      And user selects urgent answer as "A. Yes"
      And user selects urgent answer as "A. Yes"
      And user selects urgent answer as "A. Yes (outcome of the Change can be instantly verified)"
      And user selects urgent answer as "B. No"
      And user selects urgent answer as "A. No"
      And user selects urgent last answer as "A. No"
      When user clicks on "Schedule" tab
      Then user enters as "" in service and customer impact
      And user clicks save button
      Then an error message should appear: "Required field (without a default) not specified : Service And Customer Impact (ARERR 9424)"
      When user enters as "New Test Ticket" in service and customer impact
      And user clicks save button
      Then form should be saved
      When user enters request start date as ""
      And user enters request end date as ""
      And user clicks save button
      Then error message should display as "Required field (without a default) not specified : Request Start (ARERR 9424)"
      And error message should display as "Required field (without a default) not specified : Request End (ARERR 9424)"
      When user enters request start time 24 hours ahead of current date
      And user enters request end time 48 hours ahead of current date
      And user clicks save button
      Then form should be saved
      When user enters impact duration as "" minutes
      And user clicks save button
      Then error message should display as "Required field cannot be blank. : OS3:CM:Request : Fld-ImpactDurationMins (ARERR 326)"
      When user enters impact duration as "10" minutes
      And user clicks save button
      Then form should be saved
      When user clicks on interested parties tab
      And user clicks on add button under interested parties
      And user selects type as "Additional Access" under interested parties
      Then user selects search for radio button as "User"
      And user enters "Tohall_Copy" under interested parties
      Then user clicks on search under add interested party
      And user selects first entry
      Then user selects access radio button as read and write
      And user selects auto notify radio button as yes
      Then user clicks on save button under interested parties frame
      And user switches to window 1
      And user clicks on "Timeline" tab
      Then change should also be reflected in the timeline as "The User Tomas Hallén has been added as interested parties."
      Then user clicks on add email button
      And user enters "Change_Automation_2" under interested parties
      And user clicks on add email button
      Then user validates "Change_Automation_2" is listed as an interested party
      When user clicks on timeline tab
      Then change should also be reflected in the timeline as "The User   has been added as interested parties."
      When user clicks on linked items tab
      And user selects target application first dropdown as "OS3 - Change"
      Then user selects target application second dropdown as "Is related to"
      And user clicks on create button under linked items
      Then user switches to window 2
      And user selects change type as "Change Record"
      Then user selects request type as "Urgent Change"
      And user selects request category as "Other"
      Then user enters reason field as "Test Reason"
      And user enters "Test Change Builder" in the change builder field
      Then user enters "Test Implementation" in the implementation field
      And user enters "Test Plan" in the test plan field
      Then user enters "Test Rollback" in the rollback field
      And user enters "Test Communication Plan" in the communication plan field
      Then user enters "Test Ver Of Functionality" in the ver of functionality field
      And user enters "Risk Description" in the risk description field
      Then user enters as "Test" in service and customer impact
      And user enters request start time 24 hours ahead of current date
      Then user enters request end time 48 hours ahead of current date
      And user selects estimated impact as "No Impact"
      Then user enters impact duration as "20" minutes
      And user clicks save button
      Then user switches to window 1
      And user clicks refresh button on linked items tab
      Then user validates change record ticket is present
      When user selects target application first dropdown as "OS3 - Operations"
      And user selects target application second dropdown as "Caused"
      Then user clicks on create button under linked items
      And user switches to window 2
      Then user selects request type as "Customer"
      And user clicks save button
      Then user switches to window 1
      And user clicks refresh button on linked items tab
      Then user validates op ticket is present
      When user selects target application first dropdown as "OS3 - Work Order"
      And user selects target application second dropdown as "Fixed"
      Then user clicks on create button under linked items
      And user switches to window 2
      Then user selects request type as "Analysis"
      And user clicks save button
      And user switches to window 1
      And user clicks refresh button on linked items tab
      Then user validates work order ticket is present
      When user double clicks on work order ticket under linked items tab
      Then user switches to window 2
      And user changes status to "Withdrawn"
      Then user selects withdrawn reason as "Training"
      Then user clicks save button
      And user switches to window 1
      Then user clicks on refresh button on linked items tab
      And user validates work order ticket is unlinked from the change ticket
      When user clicks on work order tab
      And user clicks on create from ticket
      And user switches to window 2
      Then user selects request type as "Analysis"
      And user clicks save button
      Then user switches to window 1
      And user validates work order ticket is present
      Then user clicks on open button
      And user validates work order ticket opens
      Then user changes status to "Withdrawn"
      And user selects withdrawn reason as false alarm and clicks save
      Then user clicks on yes button on warning window
      Then user switches to window 1
      And user clicks refresh button on work orders tab
      And user validates state as "Disabled"
      And user changes status to "Analysis"
      And user clicks save button
      Then user validates ticket status as "Analysis"
      When user changes status to "Approval Requested"
      Then user clicks on approval tab
      And user clicks on view button
      Then user switches to frame
      And user clicks approve button
      Then user switches to window 1
      And user clicks on refresh ok button
      Then user validates ticket status as "Approved"
      And user changes status to "Schedule Requested"
      Then user clicks save button
      And user validates ticket status as "Scheduled"
      Then user changes status to "Implementation"
      And user clicks save button
      Then user changes status to "Completed"
      And user clicks save button
      Then error message should display as "Required field (without a default) not specified : Actual Impact (ARERR 9424)"
      And error message should display as "Required field (without a default) not specified : Completed Code (ARERR 9424)"
      Then user clicks on schedule tab
      And user selects actual impact as "Degradation of Service"
      And user selects completed code as "Successful"
      Then user clicks save button
      And user changes status to "Closed"
      Then user enters review details as "Test Review Details"
      And user selects closure code as "Test Ticket"
      And user clicks save button
      Then user validates ticket status as "Closed"








      






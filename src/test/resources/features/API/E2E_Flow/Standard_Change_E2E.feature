@Standard_Change_E2E
  #JMETER ticket needs to be short time in the future (15mins)
  #ticket also needs to have owner/assignment values as change manager
Feature: E2E Validation of API created trouble ticket
  Scenario: user validates all information on API ticket and processes ticket E2E

    Given user is on the OneWorkflow login page
    When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
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
    Then user validates change type as "Change Record"
    And user validates ticket status as "Scheduled"
    Then user validates service provider as "Telia Company"
    And user validates source field as "One Workflow"
    Then user validates source id as "cr-01"
    And user validates request type as "Standard Change"
    Then user validates change initiator as "apitester1"
    And user validates template field as "TEST TEMPLATE [UAT] - Standard Change"
    Then user validates title field as "IT | Mobile | BSS"
    And user validates request category as "Configuration"
    Then user validates description as "Testdescription"
    And user validates reason as "TestReason"
    Then user validates ticket priority as "Info"
    And user validates project code as "TestProjectcode"
    And user validates change builder+* as "TestChangeBuilder"
    And user validates Category as "Access"
    Then user validates type as "Radio Access Network"
    And user validates item as "RNC"
    Then user validates technology as "DTTV"
    And user validates model as "null"
    Then user validates manufacturer as "null"
    And user validates location id as "SE M1"
    Then user validates location name as "SE_Site_SE M1"
    And user validates region id as "08"
    Then user validates region name as "KALMAR"
    And user validates latitude as "56.675540"
    And user validates x degree as "0"
    Then user validates longitude as "16.285040"
    And user validates y degree as "0"
    Then user validates owner profile as "Change Manager"
    And user validates owner as "ChangeManager1_Automation"
    Then user validates assigned profile as "ChangeManager1_Automation"
    And user validates assignee is "Change Manager"
    Then user validates implementation as "Testimplementation"
    And user validates test plan as "Testplan"
    Then user validates rollback as "Rollback"
    And user validates communication plan as "CommunicationPlan"
    And user validates ver of functionality* as "VerificationOfFunctionality"
    And user validates risk description* as "RiskDescription"
    Then user validates vendor name as "vendorName"
    And user validates onsite engineers as "onSiteEngineers"
    Then user validates account number as "accountNumber"
    And user validates telephone number as "telephoneNumber"
    Then user validates hours of operation as "hoursOfOperation"
    And user validates vendor ref as "vendorRef"
    Then user validates onsite contact as "onSiteContact"
    And user validates availability of tabs "Timeline,Diagnosis,Risk,Schedule,Interested Parties, Approval, Notifications, Linked Items, Work Orders, Service Level, Related Project, Telenor" on change record page
    And  user adds attachment and verifies under "internal"
      | summary   | description | FileType           | attachments |
      | Test JPEG | Test JPEG   | Test JPEG FILE.jpg | 1           |
      | Test PNG  | Test PNG    | Test PNG FILE.png  | 2           |
      | Test PDF  | Test PDF    | Test PDF FILE.pdf  | 3           |
      | Test WORD | Test WORD   | Test WORD FILE.docx| 4           |
      | Test EXCEL| Test EXCEL  | Test XLS FILE.xls  | 5           |
      | Test PPT  | Test PPT    | Test PPT FILE.pptx | 6           |

    Then change should also be reflected in the timeline as "Attachment has been added. File Name - attachement.doc.txt" on row 1
    When user clicks on Diagnosis tab
    Then user clicks on CI search button
    And user switches to frame
    Then user enters "DK_BSC_ABBSC15" in manual CI search box
    And user selects CI "DK_BSC_ABBSC15"
    Then user selects impact level as "Loss of Service"
    And user clicks on relate CI
    Then user closes warning message
    And user clicks on close button on CI search window
    Then user switches to window 1
    When user clicks on "Interested Parties" tab
    And user clicks on add button under interested parties
    Then user switches to frame
    And user selects type as "Additional Access" under interested parties
    And user clicks on radio button user
    Then user validates "Tohall_Copy" is listed as an interested party
    Then user clicks on search under add interested party
    And user selects first entry from the table under add interested party
    Then user selects access radio button as read and write
    And user selects auto notify radio button as yes
    Then user clicks on save button under interested parties frame
    And user switches to window 1
    Then user validates "Tohall_copy" is listed as an interested party
    And user clicks on "Timeline" tab
    Then change should also be reflected in the timeline as "The User Tomas Hallén has been added as interested parties."
    When user clicks on linked items tab
    And user clicks on add button under interested parties
    Then user enters email address field as "Test1234@Test1234xxx.com"
    And user clicks on add email button
    Then user validates "Test1234@Test1234xxx.com" is listed as an interested party
    When user clicks on linked items tab
    And user selects target application first dropdown as "OS3 - Change"
    Then user selects target application second dropdown as "Is related to"
    And user clicks on create button under linked items
    Then user switches to window 2
    And user selects change type as "Change Record"
    Then user selects request type as "Standard Change"
    And user selects template as "TEST TEMPLATE [UAT] - Standard Change"
    Then user enters "test" in the change builder field
    Then user enters request start time 24 hours ahead of current date
    Then user enters request end time 48 hours ahead of current date
    And user selects estimated impact as "No Impact"
    And user enters impact duration as "30" minutes
    Then user clicks save button
    And user switches to window 1
    Then user clicks on create button under linked items
    And change ticket should be in list of linked items
    Then user selects target application first dropdown as "OS3 - Known Error"
    And user selects target application second dropdown as "Caused"
    Then user clicks on link button under linked items tab
    And user switches to frame
    Then user clicks on clear button
    And user selects Category as "Access"
    Then user selects Type as "RAN"
    And user selects Item as "SYNC"
    Then user clicks on the search button
    And user clicks first ticket listed under select target request
    Then user clicks accept button
    Then user switches to window 1
    Then user clicks refresh button under linked items
    Then user validates linked tickets availability
    When user selects target application first dropdown as "OS3 - Operations"
    And user selects target application second dropdown as "Caused by"
    Then user clicks on create button under linked items
    And user switches to window 2
    Then user selects request type as "Customer"
    And user clicks save button
    Then user switches to window 1
    Then user clicks refresh button under linked items
    Then trouble ticket should be in list of linked items
    When user selects target application first dropdown as "OS3 - Problem"
    And user selects target application second dropdown as "Caused"
    Then user clicks on create button under linked items
    And user selects request type as "Xfunctional | Denmark"
    Then user selects impact level as "Significant/Large"
    And user selects urgency as "Medium"
    Then user clicks save button
    And user switches to window 1
    Then user clicks refresh button under linked items
    When user selects target application first dropdown as "OS3 - Work Order"
    And user selects target application second dropdown as "Fixed"
    Then user switches to window 2
    And user selects request type as "Analysis"
    Then user clicks save button
    Then user switches to window 1
    Then user clicks refresh button under linked items
    Then user validates work order linked ticket availability
    Then user double clicks on work order ticket
    And user switches to window 2
    Then user changes status to "Withdrawn"
    And user selects withdrawn reason as false alarm and clicks save
    Then user clicks on yes on warning window
    Then ticket status should be closed
    And user switches to window 1
    Then user clicks refresh button under linked items
    And user validates work order ticket is not linked to the change ticket
    Then user clicks on work order tab
    And user clicks on create from ticket
    Then user switches to window 2
    And user selects request type as "Analysis"
    Then user clicks save button
    Then user switches to window 1
    And user validates work order ticket is present
    Then user highlights first entry
    And user clicks on open button
    Then user switches to window 2
    And user changes status to "Withdrawn"
    Then user selects withdrawn reason as false alarm and clicks save
    And user should see confirmation message and clicks on yes button
    Then user switches to window 1
    And user validates WorkOrder status as "Disabled"
    Then user changes status to "Completed"
    Then user selects actual impact as "Loss of Service"
    And user selects completed code as "Successful"
    Then user enters actual finish as current date
    Then user clicks save button
    And user clicks on yes on warning window
    Then user changes status to "Closed"
    Then user enters review details as "Test Details"
    And user selects closure code as "Test Ticket"
    And user clicks save button
    Then user validates ticket status as "Closed"





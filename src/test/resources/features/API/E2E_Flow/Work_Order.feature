@API_Work_Order_E2E
  Feature: E2E Validation of API created work order ticket
    Scenario: user validates all information on API ticket and processes ticket E2E

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Work Order"
      And user enters ticket id as ""
      Then user should see trouble ticket
      When user clicks on CTI details under sections
      And user clicks on location under sections
      And user clicks on owner under sections
      And user clicks on assignment under sections
      And user clicks on On Hold under sections
      And user clicks on vendor under sections
      And user clicks attachments under sections
      And user clicks on closure under sections
      And user validates ticket status as "Assigned"
      Then user validates service provider as "Telia Company"
      And user validates source field as "One Workflow"
      And user validates source id as "sourceID"
      Then user validates all affected BU's are selected
      And user validates template as "Fokus operation (DK)"
      Then user validates title field as "title"
      And user validates request type as "Service Request"
      Then user validates description as "testing"
      And user validates ticket priority as "Critical"
      Then user validates estimated ready time as "2019-11-11 20:23:58"
      And user validates parent ticket id as ""
      Then user validates reason as "reason"
      And user validates sla with customer as ""
      Then user validates sla class as "DEFAULT-2h"
      And user validates event start time as "2019-11-19 17:05:58"
      Then user validates Category as "Access"
      And user validates type as "RAN"
      Then user validates item as "SYNC"
      And user validates technology as "CORE"
      Then user validates model as "string"
      And user validates manufacturer as "string"
      Then user validates region name as "SE"
      And user validates owner profile as "IT CC"
      Then user validates owner as "tvb913"
      And user validates assigned profile as "AOFokus-DK"
      Then user validates assignee is "masc72"
      And user validates vendor name as "vendorName"
      Then user validates onsite engineers as "onSiteEngineers"
      And user validates account number as "accountNumber"
      Then user validates telephone number as "telephoneNumber"
      And user validates hours of operation as "hoursOfOperation"
      Then user validates vendor ref as "vendorRef"
      And user validates onsite contact as "onSiteContact"
      Then user validates travel time as "travelTime"
      When user enters "Test Update - Public" in the timeline text box
      And user clicks on public radio button
      Then user clicks on add button on timeline
      And change should also be reflected in the timeline as "Test Update - Public" for trouble ticket in row 1
      And user enters "Test Update - Public" in the timeline text box
      And user clicks on private radio button
      Then user clicks on add button on timeline
      And change should also be reflected in the timeline as "Test Update - Private" for trouble ticket in row 1
      When user enters title as ""
      And user clicks save button
      Then error message should display as "Required field (without a default) not specified : Title (ARERR 9424)"
      When user enters title as "New Test Title"
      And user clicks save button
      Then form should be saved
      When user selects request type as "clear" in work order page
      And user clicks save button
      Then error message should display as "Required field (without a default) not specified : Request Type (ARERR 9424)"
      When user selects request type as "Analysis" in work order page
      And user clicks save button
      Then form should be saved
      When user enters description as ""
      And user clicks save button
      Then error message should display as "Required field (without a default) not specified : Description (ARERR 9424)"
      When user enters description as "New Test Description"
      And user clicks save button
      Then form should be saved
      When user selects priority as "clear"
      And user clicks save button
      Then error message should display as "Required field (without a default) not specified : Priority (ARERR 9424)"
      When user selects priority as "Minor"
      And user clicks save button
      Then form should be saved
      When user enters estimated ready as ""
      And user clicks save button
      Then form should be saved
      When user enters estimated ready as current date and time
      And user clicks save button
      Then form should be saved
      When user enters reason field as ""
      And user clicks save button
      Then form should be saved
      When user enters reason field as "New Test Reason"
      And user clicks save button
      Then form should be saved
      When user selects SLA class as "(clear)"
      And user clicks save button
      Then form should be saved
      When user selects SLA class as "(DEFAULT12h)"
      And user clicks save button
      Then form should be saved
      When user changes event start time as "2019-11-25 00:00:00" future date and time
      And user clicks save button
      Then form should be saved
      When user changes event start time as "2019-11-19 00:00:00" past date and time
      And user clicks save button
      Then form should be saved
      When user clicks on owner under sections
      Then user selects owner profile as "(clear)"
      And user clicks save button
      Then error message should display as "Owner and Owner Profile are required (ARERR 33418)"
      When user selects owner profile as "OSS Distribution-Common"
      And user selects owner as "dbz4511"
      And user clicks save button
      Then form should be saved
      When user clicks on attachments under sections
      And  user adds attachment and verifies under "internal"
        | summary   | description | fullFilePath                                                                        | attachments |
        | Test JPEG | Test JPEG   | C:\Users\mahesh vaddegani\Downloads\Test Attachments\other files\Test JPEG FILE.jpg | 1           |
        | Test PNG  | Test PNG    | C:\Users\mahesh vaddegani\Downloads\Test Attachments\other files\Test PNG FILE.png  | 2           |
        | Test PDF  | Test PDF    | C:\Users\mahesh vaddegani\Downloads\Test Attachments\other files\Test PDF FILE.pdf  | 3           |
        | Test WORD | Test WORD   | C:\Users\mahesh vaddegani\Downloads\Test Attachments\other files\Test WORD FILE.docx| 4           |
        | Test EXCEL| Test EXCEL  | C:\Users\mahesh vaddegani\Downloads\Test Attachments\other files\Test XLS FILE.xls  | 5           |
        | Test PPT  | Test PPT    | C:\Users\mahesh vaddegani\Downloads\Test Attachments\other files\Test PPT FILE.pptx | 6           |

      Then change should also be reflected in the timeline as "Attachment has been added. File Name - attachement.doc.txt" for trouble ticket in row 1
      When user clicks on Diagnosis tab
      And user clicks on CI search button
      Then user switches to frame
      And user clicks on clear button
      And user enters CI as "SE_AP_tylosand-first-camp-ap10b2"
      And user clicks on CI search button
      Then user selects CI "SE_AP_tylosand-first-camp-ap10b2"
      And user selects impact level as "No Impact"
      And user clicks on relate CI
      Then user clicks on close button on CI search window
      And user switches to window 1
      And CI should be listed and displayed under the Diagnosis tab
      When user clicks on "Timeline" tab
      Then change should also be reflected in the timeline as "Impact record created for SE_AP_tylosand-first-camp-ap10b2"
      And user clicks on Diagnosis tab
      And user selects all CI's that appear
      And user right clicks on CI "One Workflow" and selects Impact:Update
      And user switches to frame
      And user enters impact from time as past on impact details bulk update window
      And user enters impact to time as past on impact details bulk update window
      And user clicks confirm checkbox
      Then user clicks on bulk update save button
      And user switches to window 1
      When user right clicks on CI "One Workflow" and selects "Impact:Clear All"
      And user should see confirmation message and clicks on yes button
      When user clicks on schedule tab
      Then user enters request scheduled end time as "2019-11-28 00:00:00"
      Then user selects estimated schedule start date as "2019-11-21 00:00:00"
      And user selects estimated schedule end date as "2019-11-27 00:00:00"
      Then user selects actual schedule start date as "2019-11-18 00:00:00"
      And user selects actual schedule end date as "2019-11-20 00:00:00"
      Then user clicks save button
      Then form should be saved
      When user clicks on "Interested Parties" tab
      Then user clicks on add button under interested parties
      And user switches to frame
      And user selects type as "Additional Access" under interested parties
      Then user selects search for radio button as "User"
      And user enters "Change_Automation_1" under interested parties
      Then user clicks on search under add interested party
      And user highlights first ticket listed
      Then user selects access radio button as read and write
      And user selects auto notify radio button as yes
      Then user clicks on save button under interested parties frame
      And user switches to window 1
      Then user clicks on add email button
      And user enters "Change_Automation_2" under interested parties
      And user clicks on add email button
      Then user validates "Change_Automation_2" is listed as an interested party
      When user clicks on timeline tab
      Then change should also be reflected in the timeline as "The User   has been added as interested parties."
      And user switches to window 0
      Then user clicks on create change record
      And user switches to window 2
      Then user selects request type as "Normal Change"
      And user selects title as "IT | Automation API" on Change record page
      Then user selects request category as "Other" on change record page
      And user enters description as "Testing"
      Then user enters reason field as "Test Reason"
      And user selects priority as "Major"
      Then user enters "Test" in the change builder field
      Then user enters "Test Implementation" in the implementation field
      And user enters "Test Plan" in the test plan field
      Then user enters "Test Rollback" in the rollback field
      And user enters "Test Communication Plan" in the communication plan field
      Then user enters "Test Ver Of Functionality" in the ver of functionality field
      And user enters "Test Risk Description" in the risk description field
      Then user enters as "Test" in service and customer impact
      And user enters request start time 24 hours ahead of current date
      Then user enters request end time 48 hours ahead of current date
      And user selects estimated impact as "Loss of Service"
      Then user enters impact duration as "30" minutes
      And user clicks save button
      Then user switches to window 1
      When user clicks on linked items tab
      And user selects target application first dropdown as "OS3 - Change"
      And user selects target application second dropdown as "Fixed by"
      Then user clicks on link button under linked items tab
      And user switches to frame
      Then user clicks on clear button
      And user enters ticket id as "CR-000000072354"
      And user clicks on the search button
      And user highlights first ticket listed
      And user clicks accept button
      Then user switches to window 1
      And user validates ticket "CR-000000072354" is present under linked items tab
      When user selects target application first dropdown as "OS3 - Known Error"
      And user selects target application second dropdown as "Caused"
      Then user clicks on link button under linked items tab
      And user switches to frame
      And user selects Category as "Access"
      Then user selects Type as "RAN"
      And user selects Item as "SYNC"
      Then user clicks on the search button
      And user highlights first ticket listed
      And user clicks accept button
      Then user clicks refresh button on linked items tab
      And user validates ticket "KE-000000007201" is present under linked items tab
      Then user selects target application first dropdown as "OS3 - Operations"
      And user selects target application second dropdown as "Caused"
      Then user clicks on link button under linked items tab
      And user switches to frame
      Then user clicks on clear button
      Then user enters ticket id as "OP-000000686157"
      And user clicks on the search button
      And user highlights first ticket listed
      And user clicks accept button
      Then user clicks refresh button on linked items tab
      And user validates ticket "OP-000000686157" is present under linked items tab
      Then user selects target application first dropdown as "OS3 - Problem"
      And user selects target application second dropdown as "Caused"
      Then user clicks on link button under linked items tab
      And user switches to frame
      Then user clicks on clear button
      And user enters ticket id as "PB-000000038037"
      And user clicks on the search button
      And user highlights first ticket listed
      And user clicks accept button
      Then user clicks refresh button on linked items tab
      And user validates ticket "PB-000000038037" is present under linked items tab
      When user clicks on Ack button
      Then user validates ticket status as "Work In Progress"
      And user changes status to "Cleared"
      Then user selects completion code as "Success"
      And user clicks save button
      Then user validates ticket status as "Cleared"
      And user changes status to "Closed"
      And user clicks save button
      Then user validates ticket status as "Closed"

      




      
      



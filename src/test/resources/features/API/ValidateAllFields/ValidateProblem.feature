@ValidateChange
  #API Created Ticket needed
Feature: Validate all fields are correct from API created ticket
  Scenario: Validate all fields are correct from API created ticket

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user enters ticket id as ""
    Then user should see problem ticket
    When user clicks on CTI details under sections
    And user clicks on location under sections
    And user clicks on owner under sections
    And user clicks on assignment under sections
    And user clicks on On Hold under sections
    And user clicks on vendor under sections
    And user clicks on attachments under sections
    Then user validates "Change Type" as "Problem Record"
    And user validates ticket status as "New"
    And user validates "Service Provider*" as "Telia Company"
    And user validates "Source Field" as "One Workflow"
    And user validates "Affected BU's" as "Sweden"
    And user validates "Title*" as "ProblemTitle"
    And user validates "Request Type*" as "CPS | IT | Other"
    And user validates "Description" as "ProblemAPIDescription"
    And user validates "Impact*" as "Moderate/Limited*"
    And user validates "Urgency*" as "Low*"
    And user validates "Priority*" as "Minor"
    And user validates "Root Cause Code" as ""
    And user validates "Root Cause Details" as ""
    And user validates "Service Affected" as ""
    And user validates "Estimated Ready" as ""
    And user validates "Actual Finish" as ""
    And user validates "Decision Go/NoGo" as ""
    And user validates "Workaround" as ""
    And user validates "RC found date" as ""
    And user validates "Category" as "Computer Equipment"
    And user validates "Type" as "Media Storage Devices"
    And user validates "Item" as "Backup Robot"
    And user validates "Technology" as "Radio"
    And user validates "Model" as ""
    And user validates "Manufacturer" as ""
    And user validates "Location ID+" as ""
    And user validates "Location Name +" as ""
    And user validates "Region ID" as ""
    And user validates "Region Name as ""
    And user validates "Latitude" as ""
    And user validates "Longitude" as ""
    And user validates "Location Details" as ""
    And user validates "Owner Profile" as "OSS Workflow-Common"
    And user validates "Owner*" as "OSS-Wflow2"
    And user validates "Assigned Profile" as "Problem Manager"
    And user validates "Assignee" as "stesla"
    And user validates "Last Ack By" as ""
    And user validates "Reassignment Count" as ""
    And user validates "To Date" as ""
    And user validates "Reason" as ""
    And user validates "Vendor Name +" as "TestVendor"
    And user validates "Onsite Engineer(s)" as "Testengineer"
    And user validates "Account Number" as ""
    And user validates "Telephone Number" as ""
    And user validates "Hours of Operation" as "10"
    And user validates "Vendor Ref" as "TestVendorRef"
    And user validates "Onsite Contact" as ""
    And user validates "Travel Time" as ""
    And user validates "Resolving Group" as ""
    And user validates "Resolving Person" as ""
    And user validates "Review Details" as ""
    And user validates "Closure Code" as ""
    And user validates "Solution" as ""
    And user validates "Withdrawn Reason" as ""
    And user validates "Solution Found Date" as ""
    When user clicks on "timeline" tab
    Then user validates timeline entry is present
    And user validates timeline date present
    When user clicks on "Interested Parties" tab
    Then user validates Interested Parties entry is present
    When user clicks on "Linked Items" tab
    Then user validates Linked Items entry is present
    When user clicks on "Additional Info" tab
    Then user validates Additional Info entry is present
    When user clicks on "TCAD Info" tab
    Then user validates TCAD Info entry is present













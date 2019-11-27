@ValidateTroubleOpen
  #API Created Ticket needed
Feature: Validate all fields are correct from API created ticket
  Scenario: Validate all fields are correct from API created ticket

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Trouble Event"
    And user enters ticket id as ""
    Then user should see trouble ticket
    When user clicks on CTI details under sections
    And user clicks on location under sections
    And user clicks on owner under sections
    And user clicks on assignment under sections
    And user clicks on details under sections
    And user clicks on On Hold under sections
    And user clicks on vendor under sections
    And user clicks on attachments under sections
    And user clicks on root cause under sections
    And user clicks on closure under sections
    Then user validates "Status" as "Closed"
    And user validates "Source*" as "One Workflow"
    And user validates "Source ID" as "OP_11"
    And user validates "Service Provider*" as "Telia Company"
    And user validates "Affected BU" as "Sweden"
    And user validates "Cust. Remaining SLA" as ""
    And user validates "OLA Target Time" as ""
    And user validates "Template" as "null"
    And user validates "Title*" as "Personal Data Breach |"
    And user validates "Request Type*" as "Third Party"
    And user validates "Description*" as "TroubleAPIDescription"
    And user validates "Priority*" as "Unknown"
    And user validates "Event Start Time*" as "2019-09-06T11:08:56Z"
    And user validates "Estimated Ready" as ""
    And user validates "Fault Type" as "Transmission Fault"
    And user validates "WO Status" as ""
    And user validates "Fault Domain" as ""
    And user validates "Rejection Reason" as ""
    And user validates "Re-assigned Reason" as ""
    And user validates "Auto Close Date" as ""
    And user validates "Auto Close" as ""
    And user validates "Request sent to FM" as ""
    And user validates "Servicedesk Escalated Incidents" as ""
    And user validates "Customer Escalated Incidents" as ""
    And user validates "Hierarchic escalation level" as ""
    And user validates "Importance" as ""
    And user validates "Impact" as ""
    And user validates "Priority Check" as ""
    And user validates "Creator" as ""
    And user validates "Category" as "OSS"
    And user validates "Type" as "Inventory"
    And user validates "Item" as "Fenix"
    And user validates "Technology" as "GSM900|UMTS2100"
    And user validates "Model" as ""
    And user validates "Manufacturer" as ""
    And user validates "Location ID+" as ""
    And user validates "Location Name +" as ""
    And user validates "Region ID" as ""
    And user validates "Region Name" as ""
    And user validates "Latitude" as ""
    And user validates "Longitude" as ""
    And user validates "Location Details" as ""
    And user validates "Owner Profile*" as "Mobile Tech Care-LIT"
    And user validates "Owner*" as "vytgrz"
    And user validates "Assigned Profile" as "CC IP/TV"
    And user validates "Assignee" as "yys044"
    And user validates "Last Ack By" as ""
    And user validates "Response Time" as ""
    And user validates "Response Reason" as ""
    And user validates "Reassignment Count" as ""
    And user validates "Vendor Name +" as "TestVendor"
    And user validates "Onsite Engineer(s)" as "Testengineer"
    And user validates "Account Number" as ""
    And user validates "Telephone Number" as ""
    And user validates "Hours of Operation" as "2"
    And user validates "Editor for Hours of OperationVendor Ref" as "TestVendorRef"
    And user validates "Root Cause same as Primary Cause?" as ""
    And user validates "Root Cause" as ""
    And user validates "Description" as ""
    And user validates "Fault Position" as "Fixed | Transmission | Synchronization Network"
    And user validates "Equipment" as ""
    And user validates "Cause" as ""
    And user validates "Action" as "Level adjustment | Third Party"
    And user validates "Closure Info" as "Test Closure Info"
    And user validates "Resolved Group" as "Test Closure Info"
    And user validates "Resolved Person" as ""
    And user validates "Event End Time" as ""
    And user validates "Withdrawn Reason" as ""
    When user clicks on timeline tab
    Then user validates timeline entry is present
    And user validates timeline date present
    When user clicks on Diagnosis tab
    Then user validates CI availability
    #TODO
    And user validates CI details
    When user clicks on "Interested Parties" tab
    Then user validates Interested Parties entry is present

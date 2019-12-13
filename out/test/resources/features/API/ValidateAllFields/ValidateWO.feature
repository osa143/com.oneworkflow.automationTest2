@ValidateWorkOrder
  #API Created Ticket needed
Feature: Validate all fields are correct from API created ticket
  Scenario: Validate all fields are correct from API created ticket

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user enters ticket id as ""
    Then user should see Work Order ticket
    When user clicks on CTI details under sections
    And user clicks on location under sections
    And user clicks on owner under sections
    And user clicks on assignment under sections
    And user clicks on On Hold under sections
    And user clicks on vendor under sections
    And user clicks on attachments under sections
    And user clicks on closure under sections
    And user validates "Change Type"as "Work Order"
    Then user validates "Status*" as "New"
    Then user validates "Service Provider*" as "Telia Company"
    Then user validates "Source" as "One Workflow"
    Then user validates "Source ID" as "WO_57"
    Then user validates "Affected BU's" as "Sweden"
    Then user validates "Template" as "Fokus operation (DK)"
    Then user validates "Title*" as "DNKIA: GSM IB tests with Somalia - Golis / MLI02 / IMSI = 63730"
    Then user validates "Request Type*" as "Third Party"
    Then user validates "Description" as "WOAPIDescription"
    Then user validates "Priority" as "Minor"
    Then user validates "Estimated Ready" as ""
    Then user validates "Parent Ticket ID" as ""
    Then user validates "Reason" as ""
    Then user validates "SLA with Customer" as ""
    Then user validates "SLA Class" as ""
    Then user validates "Event Start Time" as ""
    Then user validates "Service Type" as ""
    Then user validates "AM Status details" as ""
    Then user validates "Hierarchic escalation level" as ""
    Then user validates "Category" as "Core"
    Then user validates "Type" as "Mobile PS Core Network"
    Then user validates "Item" as "DNS"
    Then user validates "Technology" as "Broadband"
    Then user validates "Model" as ""
    Then user validates "Manufacturer" as ""
    Then user validates "Location ID+" as ""
    Then user validates "Location Name +" as ""
    Then user validates "Region ID" as ""
    Then user validates "Region Name" as ""
    Then user validates "Latitude" as ""
    Then user validates "Longitude" as ""
    Then user validates "Location Details" as ""
    Then user validates "Site Access Status" as ""
    Then user validates "Owner Profile*" as "OSS Distribution-Common"
    Then user validates "Owner" as "scd3910"
    Then user validates "Assigned Profile" as "Transport Mobile-Common"
    Then user validates "Assignee" as "ghza01"
    Then user validates "Last Ack By" as ""
    Then user validates "Reassignment Count" as ""
    Then user validates "To Date" as ""
    Then user validates "Reason" as ""
    Then user validates "Vendor Name +" as ""
    Then user validates "Onsite Engineer(s)" as ""
    Then user validates "Account Number" as ""
    Then user validates "Telephone Number" as ""
    Then user validates "Hours of Operation" as ""
    Then user validates "Vendor Ref" as ""
    Then user validates "Onsite Contact" as ""
    Then user validates "Travel Time" as ""
    Then user validates "Resolved Group" as ""
    Then user validates "Resolved Person" as ""
    Then user validates "Actual Impact" as ""
    Then user validates "Completion Code" as ""
    Then user validates "Withdrawn Reason" as ""
    When user clicks on "Timeline" tab
    Then user validates timeline entry is present
    And user validates timeline data is present
    When user clicks on "Diagnosis" tab
    Then user validates CI entry is present
    When user clicks on "Interested Parties" tab
    Then user validates interested parties entry is present

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
    Then user validates ticket status as "Closed"
    And user validates source field as "One Workflow"
    And user validates source id as "OP_11"
    And user validates service provider as "Telia Company"
    And user validates Sweden is selected as Affected BU
    And user validates "Cust. Remaining SLA" as ""
    And user validates "OLA Target Time" as ""
    And user validates template as "null"
    And user validates title field as "Personal Data Breach |"
    And user validates request type as "Third Party"
    And user validates description as "TroubleAPIDescription"
    And user validates ticket priority as "Unknown"
    And user validates "Event Start Time*" as "2019-09-06T11:08:56Z"
    And user validates estimated ready time as ""
    And user validates fault type as "Transmission Fault"
    And user validates "WO Status" as ""
    And user validates "Fault Domain" as ""
    And user validates "Rejection Reason" as ""
    And user validates "Re-assigned Reason" as ""
    And user validates "Auto Close Date" as ""
    And user validates "Auto Close" as ""
    And user validates "Request sent to FM" as ""
    And user validates "Servicedesk Escalated Incidents" as ""
    And user validates "Customer Escalated Incidents" as ""
    And user validates hierarchic escalation level as ""
    And user validates "Importance" as ""
    And user validates Impact as ""
    And user validates "Priority Check" as ""
    And user validates "Creator" as ""
    And user validates Category as "OSS"
    And user validates type as "Inventory"
    And user validates item as "Fenix"
    And user validates technology as "GSM900|UMTS2100"
    And user validates model as ""
    And user validates manufacturer as ""
    And user validates location id as ""
    And user validates location name as ""
    And user validates region id as ""
    And user validates region name as ""
    And user validates latitude as ""
    And user validates longitude as ""
    And user validates location details as ""
    And user validates owner profile as "Mobile Tech Care-LIT"
    And user validates owner as "vytgrz"
    And user validates assigned profile as "CC IP/TV"
    And user validates assignee is "yys044"
    And user validates last ack by as ""
    And user validates "Response Time" as ""
    And user validates "Response Reason" as ""
    And user validates reassignment count as ""
    And user validates vendor name as "TestVendor"
    And user validates onsite engineers as "Testengineer"
    And user validates account number as ""
    And user validates telephone number as ""
    And user validates hours of operation as "2"
    And user validates "Editor for Hours of OperationVendor Ref" as "TestVendorRef"
    And user validates "Root Cause same as Primary Cause?" as ""
    And user validates "Root Cause" as ""
    And user validates description as ""
    And user validates "Fault Position" as "Fixed | Transmission | Synchronization Network"
    And user validates equipment as ""
    And user validates "Cause" as ""
    And user validates "Action" as "Level adjustment | Third Party"
    And user validates "Closure Info" as "Test Closure Info"
    And user validates resolved group as "Test Closure Info"
    And user validates resolved person as ""
    And user validates "Event End Time" as ""
    And user validates withdrawn reason as ""
    When user clicks on timeline tab
    Then user validates timeline entry is present
    And user validates timeline date present
    When user clicks on Diagnosis tab
    Then user validates CI availability
    #TODO
    And user validates CI details
    When user clicks on "Interested Parties" tab
    Then user validates Interested Parties entry is present

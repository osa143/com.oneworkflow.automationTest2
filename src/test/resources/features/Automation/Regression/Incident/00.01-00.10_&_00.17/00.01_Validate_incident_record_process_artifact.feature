@00.01 @00 @Incident
  #Passed
  Feature: 00.01 - Validate incident record process artifact

    Scenario: Validate incident record process artifact

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      And user validates "Ticket Number" is present
      And user validates "Status" is present
      And user validates "Source" is present
      And user validates "ID" is present
      And user validates "Service Provider" is present
      And user validates BU availability
      And user validates "Created by Light GUI" is present
      And user validates "Cust. Remaining SLA" is present
      And user validates "OLA Target Time" is present
      And user validates "Template" is present
      And user validates "Title" is present
      And user validates "Request Type" is present
      And user validates "Description" is present
      And user validates "Priority" is present
      And user validates "Event Start Time" is present
      And user validates "Estimated Ready" is present
      And user validates "Fault Type" is present
      And user validates WO's Status is present
      And user validates "Fault Domain" is present
      And user validates "Rejection Reason" is present
      And user validates "Re-Assigned Reason" is present
      And user validates "Auto Close Date" is present
      And user validates "Do Not AutoClose" is present
      And user validates "Auto Close" is present
      And user validates "Request sent to FM" is present
      And user validates "Servicedesk Escalated Incidents" is present
      And user validates "Customer Escalated Incidents" is present
      And user validates "Hierarchic escalation level" is present
      And user validates "Importance" is present
      And user validates "Impact" is present
      And user validates "Priority Check" is present
      And user validates "Creator" is present
      And user validates "Assignment" is present
      And user validates "Assignment Profile" is present
      And user validates "Assignee" is present
      And user validates "Last Ack By" is present
      And user validates "Response Time" is present
      And user validates "Response Reason" is present
      And user validates "Reassignment Count" is present
      And user validates CTI Details is present
      Then user clicks on CTI details under sections
      And user validates "Category" is present
      And user validates "Type" is present
      And user validates "Item" is present
      And user validates "Technology" is present
      And user validates "Model" is present
      And user validates "Manufacturer" is present
      Then user clicks on location under sections
      And user validates Location Information is present
      And user validates "Location ID+" is present
      And user validates "Location Name +" is present
      And user validates "Region ID" is present
      And user validates "Region Name" is present
      And user validates "Latitude" is present
      And user validates "Longitude" is present
      And user validates "Location Details" is present
      And user validates "X Degree" is present
      And user validates "Y Degree" is present
      And user clicks on owner under sections
      And user validates Owner is present
      And user validates "Owner Profile" is present
      And user validates "Owner*" is present
      Then user clicks on On Hold under sections
      And user validates On Hold Until is present
      And user validates "To Date" is present
      And user validates "Reason" is present
      Then user clicks on vendor under sections
      And user validates Vendor is present
      And user validates "Vendor Name +" is present
      And user validates "Onsite Engineer(s)" is present
      And user validates "Account Number" is present
      And user validates "Telephone Number" is present
      And user validates "Hours of Operation" is present
      And user validates "Hours of Operation" is present
      And user validates "Vendor Ref" is present
      Then user clicks on attachments under sections on trouble event page
      And user validates Internal is present
      And user validates Add is present
      And user validates internal Open is present
      And user validates Delete is present
      And user validates internal Preferences is present
      And user validates internal Refresh is present
      And user validates External is present
      And user validates external Open is present
      And user validates external Preferences is present
      And user validates external Refresh is present
      And user clicks on root cause under sections
      And user validates root cause is present
      And user validates "Root Cause same as Primary Cause?" is present
      And user validates "Root Cause" is present
      And user validates "Description" is present
      Then user clicks on closure under sections
      And user validates Closure Codes is present
      And user validates "Fault Position" is present
      And user validates "Equipment" is present
      And user validates Cause is present
      And user validates "Action" is present
      And user validates "Closure Info" is present
      And user validates "Resolved Group" is present
      And user validates "Resolved Person" is present
      And user validates "Event End Time" is present
      And user validates "Withdrawn Reason" is present
      And user validates Save is present
      When user clicks on sweden checkbox under affected BU's
      When user enters "Test case 00.01 validate incident artifact" in Title field
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Test case 00.01 validate incident artifact"
      And user clicks on save button
      Then ticket should be created and status should be assigned



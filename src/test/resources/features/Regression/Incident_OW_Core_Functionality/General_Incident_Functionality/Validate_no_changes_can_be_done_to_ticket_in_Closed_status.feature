@Validate_no_changes_can_be_done_to_ticket_in_Closed_status @Incident
  Feature: validation of no changes being able to be made in closed incident
    Scenario: user validates you cant make any changes to closed incident ticket

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Test case validate no changes can be done to a ticket in closed status" in Title field in Trouble event
      And user selects request type as "Customer"
      And user enters description as "Test case validate no changes can be done to a ticket in closed status"
      And user clicks on save button on the problem form
      Then ticket should be created and status should be assigned
      When user changes status to "Cleared"
      And user selects fault position as "N/A:N/A"
      And user selects cause as "N/A:N/A:N/A"
      And user selects action dropdown as "N/A:N/A"
      And user enters closure info as "Test Ticket"
      And user clicks on save button on the problem form
      Then user validates ticket status as "Cleared"
      When user changes status to "Closed"
      And user clicks on save button on the problem form
      Then user validates ticket status as "Closed"
      And user clicks on CTI details under sections
      And user clicks on location under sections
      And user clicks on owner under sections
      And user clicks on assignment under sections
      And user clicks on On Hold under sections
      And user clicks on vendor under sections
      And user clicks on attachments under sections
      And user clicks on root cause under sections
      Then user validates "Ack" is readonly
      And user validates "Status*" is readonly
      And user validates "Source*" is readonly
      And user validates "Service Provider*" is readonly
      And user validates "Affected BU's" is readonly
      And user validates "Created by Light GUI" is readonly
      And user validates "Cust. Remaining SLA" is readonly
      And user validates "OLA Target Time" is readonly
      And user validates "Template" is readonly
      And user validates "Title*" is readonly
      And user validates "Request Type*" is readonly
      And user validates "Description*" is readonly
      And user validates "Priority*" is readonly
      And user validates "Event Start Time*" is readonly
      And user validates "Estimated Ready" is readonly
      And user validates "Fault Type" is readonly
      And user validates "WO's Status" is readonly
      And user validates "Fault Domain" is readonly
      And user validates "Rejection Reason" is readonly
      And user validates "Re-Assigned Reason" is readonly
      And user validates "Auto Close Date" is readonly
      And user validates "Do Not AutoClose" is readonly
      And user validates "Auto Close" is readonly
      And user validates "Request sent to FM" is readonly
      And user validates "Servicedesk Escalated Incidents" is readonly
      And user validates "Customer Escalated Incidents" is readonly
      And user validates "Hierarchic escalation level" is readonly
      And user validates "Importance" is readonly
      And user validates "Impact" is readonly
      And user validates "Priority Check" is readonly
      And user validates "Creator" is readonly
      And user validates "Category" is readonly
      And user validates "Type" is readonly
      And user validates "Item" is readonly
      And user validates "Technology" is readonly
      And user validates "Model" is readonly
      And user validates "Manufacturer" is readonly
      And user validates "Location ID+" is readonly
      And user validates "Location Name +" is readonly
      And user validates "Region ID" is readonly
      And user validates "Region Name" is readonly
      And user validates "Latitude" is readonly
      And user validates "Longitude" is readonly
      And user validates "Location Details" is readonly
      And user validates "Owner Profile*" is readonly
      And user validates "Owner*" is readonly
      And user validates "Assignment Profile" is readonly
      And user validates "Assignee" is readonly
      And user validates "Last Ack By" is readonly
      And user validates "Response Time" is readonly
      And user validates "Response Reason" is readonly
      And user validates "Reassignment Count" is readonly
      And user validates "To Date" is readonly
      And user validates "Reason" is readonly
      And user validates "Vendor Name +" is readonly
      And user validates "Onsite Engineer(s)" is readonly
      And user validates "Account Number" is readonly
      And user validates "Telephone Number" is readonly
      And user validates "Hours of Operation" is readonly
      And user validates "Vendor Ref" is readonly
      And user validates "Add" is readonly
      And user validates "Open" is readonly
      And user validates "Delete" is readonly
      And user validates "Root Cause same as Primary Cause" is readonly
      And user validates "Root Cause" is readonly
      And user validates "Description" is readonly
      And user validates "Fault Position" is readonly
      And user validates "Equipment" is readonly
      And user validates "Cause*" is readonly
      And user validates "Action*" is readonly
      And user validates "Closure Info*" is readonly
      And user validates "Resolved Group" is readonly
      And user validates "Resolved Person" is readonly
      And user validates "Event End Time*" is readonly
      And user validates "Withdrawn Reason" is readonly
      And user validates "Save" is readonly
      Then user validates no timeline entries can be made
      When user clicks on Diagnosis tab
      Then user validates "CI Search" is readonly
      When user clicks on "Interested Parties" tab
      And user validates "Add" under interested parties is readonly
      And user validates "Remove" is readonly
      And user validates "Bulk Update" is readonly
      And user validates "Add Email" is readonly
      When user clicks on "Notifications" tab
      And user validates "Method" is readonly
      And user validates "Sent To" is readonly
      And user validates "Subject" is readonly
      And user validates "Body" is readonly
      And user validates "Preview" is readonly
      When user clicks on "Sent/Received" tab
      And user validates "Reply" is readonly
      When user clicks on "Linked Items" tab
      And user validates "Target Application" is readonly
      And user validates "Link" is readonly
      And user validates "Unlink" is readonly
      And user validates "Create" is readonly
      When user clicks on "Work Orders" tab
      And user validates "Create From Ticket" is not visible
      And user validates "Create From Template" is not visible
      When user clicks on "Alarms" tab
      And user validates "Detach&Create" is readonly
      And user validates "Refresh Status" is readonly
      And user validates "Terminate Alarm" is readonly
      And user validates "Refresh Status Time" is readonly
      And user validates "Display Child Active Alarms" is readonly
      When user clicks on "Service Info" tab
      And user validates "Insert" is readonly
      And user validates "Enable" is readonly
      And user validates "Disable" is readonly

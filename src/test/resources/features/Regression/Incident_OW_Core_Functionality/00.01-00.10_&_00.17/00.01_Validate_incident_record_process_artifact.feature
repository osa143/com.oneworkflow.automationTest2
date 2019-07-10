@Validate_Incident_Record_Process_Artifact @Incident
  Feature: user validates incident record fields availability
    Scenario: user validates incident record fields availability

      Given user is on the OneWorkflow login page
      When user logs in with valid username "Change_Automation_1" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      And user validates "Ticket Number" is present
      And user validates "Status" is present
      And user validates "Source" is present
      And user validates "Source ID" is present
      And user validates "service Provider" filed is present
      And user validates BU availability
      #ALM step 10 - check availability of create by light GUI?
      And user validates "customer remaining SLA" is present
      And user validates "OLA target time field" is present
      And user validates "Template" is present
      And user validates "Title" is present
      And user validates "Request Type" is present
      And user validates "Description" is present
      And user validates "Priority" is present
      And user validates "Event Start Time" is present
      And user validates "Estimated Ready Time" field is present
      And user validates "Fault Type" is present
      And user validates "WO Status" is present
      And user validates "Fault Domain" is present
      And user validates "Rejection Reason" is present
      And user validates "Re-assigned Reason" is present
      And user validates "Auto Close Date" is present
      And user validates "Do Not Auto Close Checkbox" is present
      And user validates "Auto Close Field" is present
      And user validates "Request Sent To FM" is present
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
      And user validates "Reassignment count" is present
      Then user clicks on "CTI details" under sections
      And user validates "CTI Details" is present
      And user validates "Category" is present
      And user validates "Type" is present
      And user validates "Item" is present
      And user validates "Technology" is present
      And user validates "Model" is present
      And user validates "Manufacturer" is present
      Then user clicks on "location" under sections
      And user validates "Location Information" is present
      And user validates "Location ID+" is present
      And user validates "Location Name +" is present
      And user validates "Region ID" is present
      And user validates "Region Name" is present
      And user validates "Latitude" is present
      And user validates "Longitude" is present
      And user validates "Location Details" is present
      And user validates "X Degree" is present
      And user validates "Y Degree" is present
      Then user clicks on "Owner" under sections
      And user validates "Owner" is present
      And user validates "Owner Profile" is present
      And user validates "Owner*" is present
      Then user clicks on "On Hold" under sections
      And user validates "On Hold Until" is present
      And user validates "To Date" is present
      And user validates "Reason" is present
      Then user clicks on "Vendor" under sections
      And user validates "Vendor" is present
      And user validates "Vendor Name +" is present
      And user validates "Onsite Engineer(s)" is present
      And user validates "Account Number" is present
      And user validates "Telephone Number" is present
      And user validates "Hours of Operation" is present
      And user validates "Hours of Operation" is present
      And user validates "Vendor Ref" is present
      Then user clicks on attachments under sections
      And user validates "Internal" is present
      And user validates "Add" is present
      And user validates "Open" is present
      And user validates "Delete" is present
      And user validates "Preferences" is present
      And user validates "Refresh" is present
      And user validates "External" is present
      And user validates "Open" is present
      And user validates "Preferences" is present
      And user validates "Refresh" is present
      Then user clicks on "Closure" under sections
      And user validates "Closure Codes" is present
      And user validates "Fault Position" is present
      And user validates "Equipment" is present
      And user validates "Cause" is present
      And user validates "Action" is present
      And user validates "Closure Info" is present
      And user validates "Resolved Group" is present
      And user validates "Resolved Person" is present
      And user validates "Event End Time" is present
      And user validates "Withdrawn Reason" is present
      And user validates "Save" is present

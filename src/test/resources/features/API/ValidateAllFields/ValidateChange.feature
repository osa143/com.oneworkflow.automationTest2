@ValidateChange
  #API Created Ticket needed
  Feature: Validate all fields are correct from API created ticket
    Scenario: Validate all fields are correct from API created ticket

      Given user is on the OneWorkflow login page
      When user logs in with valid username "ChangeManager1_Automation" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
      And user enters ticket id as ""
      Then user should see change record ticket
      When user clicks on CTI details under sections
      And user clicks on location under sections
      And user clicks on owner under sections
      And user clicks on assignment under sections
      And user clicks on details under sections
      And user clicks on On Hold under sections
      And user clicks on vendor under sections
      And user clicks on attachments under sections
      And user clicks on closure under sections
      Then user validates "Change Type" as "Change Record"
      And user validates ticket status as "New"
      And user validates "Service Provider*" as "Telia Company"
      And user validates source field as "One Workflow"
      And user validates "Affected BU's" as "Sweden"
      And user validates "Request Type*" as "Normal Change"
      And user validates "Change Initiator" as ""
      And user validates "Template" as ""
      And user validates "Title*" as ""
      And user validates "Description*" as ""
      And user validates "Reason*" as ""
      And user validates "Priority*" as ""
      And user validates "Project Code" as ""
      And user validates "Change Builder+*" as ""
      And user validates "Change Builder Email" as ""
      And user validates "Change Builder Phone" as ""
      And user validates "Category" as ""
      And user validates "Type" as ""
      And user validates "Item" as ""
      And user validates "Technology" as ""
      And user validates "Model" as ""
      And user validates "Manufacturer" as ""
      And user validates "Location ID+" as ""
      And user validates "Location Name +" as ""
      And user validates "Region ID" as ""
      And user validates "Region Name" as ""
      And user validates "Latitude" as ""
      And user validates "Longitude" as ""
      And user validates "Location Details" as ""
      And user validates "Owner Profile*" as ""
      And user validates "Owner*" as ""
      And user validates "Assigned Profile" as ""
      And user validates "Assignee" as ""
      And user validates "Last Ack By" as ""
      And user validates "Reassignment Count" as ""
      And user validates "Implementation*" as ""
      And user validates "Test Plan*" as ""
      And user validates "Rollback*" as ""
      And user validates "Communication Plan*" as ""
      And user validates "Ver of Functionality*" as ""
      And user validates "Risk Description*" as ""
      And user validates "To Date" as ""
      And user validates "Reason" as ""
      And user validates "Vendor Name +" as ""
      And user validates "Onsite Engineer(s)" as ""
      And user validates "Account Number" as ""
      And user validates "Telephone Number" as ""
      And user validates "Hours of Operation" as ""
      And user validates "Vendor Ref" as ""
      And user validates "Onsite Contact" as ""
      And user validates "Resolved Group" as ""
      And user validates "Resolved Person" as ""
      And user validates "Review Details" as ""
      And user validates "Closure Code" as ""
      And user validates "Failure Code" as ""
      And user validates "Withdrawn Reason" as ""
      When user clicks on timeline tab
      Then user validates timeline entry is present
      And user validates timeline entry has date present
      When user clicks on Diagnosis tab
      Then user validates CI availability
      And user validates CI details
      When user clicks on "Interested Parties" tab
      Then user validates interested party is visible

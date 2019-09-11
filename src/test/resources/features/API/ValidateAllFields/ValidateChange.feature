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
      And user validates "" as ""
      And user validates "" as ""
      And user validates "" as ""





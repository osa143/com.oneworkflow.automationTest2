@Validate_Change_Record_Process_Artifact @Change
  #Passed
Feature: Validate Change record process artifact

  Scenario: Validate Change record process artifact
    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create change record
    Then user switches to window 1
    Then change record page should be opened and Change form is displayed
#    And user validates "Change Record #" is present
#    And user validates "Change Type" is present
    And user validates "Status" is present
    And user validates "Source" is present
    And user validates "ID" is present
    And user validates "Service Provider" is present
    And user validates BU availability
    And user validates "Request Type*" is present
    And user validates "Change Initiator" is present
    And user validates "Template" is present
    And user validates "Title" is present
    And user validates "Request Category" is present
    And user validates "Description" is present
    And user validates "Reason" is present
    And user validates "Priority" is present
    And user validates "Project Code" is present
    And user validates "Change Builder+*" is present
    And user validates "Change Builder Email" is present
    And user validates "Change Builder Phone" is present
    And user validates "Implementation*" is present
    And user validates "Test Plan*" is present
    And user validates "Rollback*" is present
    And user validates "Communication Plan*" is present
    And user validates "Ver of Functionality*" is present
    And user validates "Risk Description*" is present
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
    Then user clicks on closure under sections
    And user validates Closure Codes is present
    And user validates "Resolved Group" is present
    And user validates "Resolved Person" is present
    And user validates "Review Details" is present
    And user validates "Failure Code" is present
    And user validates "Closure Code" is present
    And user validates "Withdrawn Reason" is present
    And user validates "Service & Customer Impact" is present
#    And user validates "Requested Schedule" is present
    And user validates "Request Start" is present
    And user validates "Request End" is present
    And user validates "Estimated Impact" is present
    And user validates "Expected Alarms" is present
#    And user validates "Impact Duration" is present
    And user validates "Days*" is present
    And user validates "Hrs*" is present
    And user validates "Mins*" is present
    And user validates "Secs*" is present
#    And user validates "Agreed Schedule" is present
    And user validates "Agreed Start" is present
    And user validates "Agreed End" is present
    And user validates "CAB Required" is present
    And user validates "No" is present
    And user validates "Yes" is present
#    And user validates "Actual Schedule" is present
    And user validates "Actual Start +" is present
    And user validates "Actual End +" is present
    And user validates "Actual Impact" is present
    And user validates "Completed Code" is present
    And user validates "External Parent Ticket ID" is present
    And user validates "Subscription id" is present
    And user validates "Address of Issue" is present
    And user validates "Actual downtime" is present
    And user validates Save is present
    And user logsOut and accepts alert

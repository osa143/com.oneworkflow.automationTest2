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
    And user validates change type as "Work Order"
    Then user validates ticket status as "New"
    Then user validates service provider as "Telia Company"
    Then user validates source field as "One Workflow"
    Then user validates source id as "WO_57"
    Then user validates Sweden is selected as Affected BU
    Then user validates template as "Fokus operation (DK)"
    Then user validates title field as "DNKIA: GSM IB tests with Somalia - Golis / MLI02 / IMSI = 63730"
    Then user validates request type as "Third Party"
    Then user validates description as "WOAPIDescription"
    Then user validates ticket priority as "Minor"
    Then user validates estimated ready time as ""
    Then user validates parent ticket id as ""
    Then user validates reason as ""
    Then user validates sla with customer as ""
    Then user validates sla class as ""
    Then user validates event start time as ""
    Then user validates service type as ""
    Then user validates am status details as ""
    Then user validates hierarchic escalation level as ""
    Then user validates hierarchic escalation level as ""
    Then user validates Category as "Core"
    Then user validates type as "Mobile PS Core Network"
    Then user validates item as "DNS"
    Then user validates technology as "Broadband"
    Then user validates model as ""
    Then user validates manufacturer as ""
    Then user validates location id as ""
    Then user validates location name as ""
    Then user validates region id as ""
    Then user validates region name as ""
    Then user validates latitude as ""
    Then user validates longitude as ""
    Then user validates location details as ""
    Then user validates site access status as ""
    Then user validates owner profile as "OSS Distribution-Common"
    Then user validates owner as "scd3910"
    Then user validates assigned profile as "Transport Mobile-Common"
    Then user validates assignee is "ghza01"
    Then user validates last ack by as ""
    Then user validates reassignment count as ""
    Then user validates to date as ""
    Then user validates reason as ""
    Then user validates vendor name as ""
    Then user validates onsite engineers as ""
    Then user validates account number as ""
    Then user validates telephone number as ""
    Then user validates hours of operation as ""
    Then user validates vendor ref as ""
    Then user validates onsite contact as ""
    Then user validates travel time as ""
    Then user validates resolved group as ""
    Then user validates resolved person as ""
    Then user validates actual impact as ""
    Then user validates completion code as ""
    Then user validates withdrawn reason as ""
    When user clicks on "Timeline" tab
    Then user validates timeline entry is present
    And user validates timeline data is present
    When user clicks on "Diagnosis" tab
    Then user validates CI entry is present
    When user clicks on "Interested Parties" tab
    Then user validates interested parties entry is present

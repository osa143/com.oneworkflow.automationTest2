@ValidateProblem
  #API Created Ticket needed
Feature: Validate all fields are correct from API created ticket
  Scenario: Validate all fields are correct from API created ticket

    Given user is on the OneWorkflow login page
    When user logs in with valid username "Tohall_copy" and password as "Test@1234"
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user selects search menu as "Open Search Form:Change Record/Project/Freeze"
    And user enters ticket id as ""
    Then user should see problem ticket
    When user clicks on CTI details under sections
    And user clicks on location under sections
    And user clicks on owner under sections
    And user clicks on assignment under sections
    And user clicks on On Hold under sections
    And user clicks on vendor under sections
    And user clicks on attachments under sections
    Then user validates change type as "Problem Record"
    And user validates ticket status as "New"
    And user validates service provider as "Telia Company"
    And user validates source field as "One Workflow"
    And user validates Sweden is selected as Affected BU
    And user validates title field as "ProblemTitle"
    And user validates request type as "CPS | IT | Other"
    And user validates description as "ProblemAPIDescription"
    And user validates Impact as "Moderate/Limited"
    And user validates urgency as "Low*"
    And user validates ticket priority as "Minor"
    And user validates root cause code is ""
    And user validates root cause details as ""
    And user validates service affected as ""
    And user validates estimated ready time as ""
    And user validates actual finish as ""
    And user validates decision go no go as ""
    And user validates workaround as ""
    And user validates RC found date as ""
    And user validates Category as "Computer Equipment"
    And user validates type as "Media Storage Devices"
    And user validates item as "Backup Robot"
    And user validates technology as "Radio"
    And user validates model as ""
    And user validates manufacturer as ""
    And user validates location id as ""
    And user validates location name as ""
    And user validates region id as ""
    And user validates region name as ""
    And user validates latitude as ""
    And user validates longitude as ""
    And user validates location details as ""
    And user validates owner profile as "OSS Workflow-Common"
    And user validates owner as "OSS-Wflow2"
    And user validates assigned profile as "Problem Manager"
    And user validates assignee is "stesla"
    And user validates last ack by as ""
    And user validates reassignment count as ""
    And user validates to date as ""
    And user validates reason as ""
    And user validates vendor name as "TestVendor"
    And user validates onsite engineers as "Testengineer"
    And user validates account number as ""
    And user validates telephone number as ""
    And user validates hours of operation as "10"
    And user validates vendor ref as "TestVendorRef"
    And user validates onsite contact as ""
    And user validates travel time as ""
    And user validates "Resolving Group" as ""
    And user validates "Resolving Person" as ""
    And user validates review details as ""
    And user validates closure code as ""
    And user validates "Solution" as ""
    And user validates withdrawn reason as ""
    And user validates "Solution Found Date" as ""
    When user clicks on "timeline" tab
    Then user validates timeline entry is present
    And user validates timeline date present
    When user clicks on "Interested Parties" tab
    Then user validates Interested Parties entry is present
    When user clicks on "Linked Items" tab
    Then user validates Linked Items entry is present 
    When user clicks on "Additional Info" tab
    Then user validates Additional Info entry is present
    When user clicks on "TCAD Info" tab
    Then user validates TCAD Info entry is present













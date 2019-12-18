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
      And user validates change type as "Change Record"
      And user validates ticket status as "New"
      And user validates service provider as "Telia Company"
      And user validates source field as "One Workflow"
      And user validates source id as "CM_002"
      And user validates Sweden is selected as Affected BU
      And user validates request type as "Standard Change"
      And user validates change initiator as ""
      And user validates template as "RAN Swap"
      And user validates title field as "IT | Mobile | BSS"
      And user validates request category as "Configuration"
      And user validates description as "AutomationAPIDescription"
      And user validates reason as "AutomationAPIReason"
      And user validates ticket priority as "Critical"
      And user validates project code as ""
      And user validates change builder+* as ""
      And user validates change builder email as ""
      And user validates change builder phone as ""
      And user validates Category as "Core"
      And user validates type as "Mobile CS Core Network"
      And user validates item as "MSC"
      And user validates technology as "DTTV"
      And user validates model as ""
      And user validates manufacturer as ""
      And user validates location id as ""
      And user validates location name as ""
      And user validates region id as ""
      And user validates region name as ""
      And user validates latitude as ""
      And user validates longitude as ""
      And user validates location details as ""
      And user validates owner profile as "DC DK Billing"
      And user validates owner as "dc_itdk2"
      And user validates assigned profile as "OSS Monitoring Mob"
      And user validates assignee is "daxe00"
      And user validates last ack by as ""
      And user validates reassignment count as ""
      And user validates implementation as "ImplementationAPI"
      And user validates test plan as "APITestPlan"
      And user validates rollback as "APIRollback"
      And user validates communication plan as "APICommPlan"
      And user validates ver of functionality* as "${verificationOfFunctionality}"
      And user validates risk description* as "APIRiskDesc"
      And user validates to date as ""
      And user validates reason as ""
      And user validates vendor name as "TestVendor"
      And user validates onsite engineers as "Testengineer"
      And user validates account number as ""
      And user validates telephone number as ""
      And user validates hours of operation as "2"
      And user validates vendor ref as "TestVendorRef"
      And user validates onsite contact as ""
      And user validates resolved group as ""
      And user validates resolved person as ""
      And user validates review details as ""
      And user validates closure code as ""
      And user validates failure code as ""
      And user validates withdrawn reason as ""
      And user validates service and customer impact as "Service And Customer Impact"
      And user validates request start as "2019-09-06T09:16:53Z"
      And user validates request end as "2019-09-10T09:16:53Z"
      And user validates estimated impact as "Loss of Service"
      And user validates expected alarms as "TestExpectedAlarm"
      And user validates impact duration days as "1"
      And user validates impact duration hours as ""
      And user validates impact duration minutes as ""
      And user validates impact duration seconds as ""
      And user validates agreed start as "2019-09-06T09:16:53Z"
      And user validates agreed end as "2019-09-10T09:16:53Z"
      And user validates actual start as "2019-09-05T09:16:53Z"
      And user validates actual end as "2019-09-10T09:16:53Z"
      And user validates actual impact as ""
      And user validates completed code as ""
      And user validates external parent ticket id as ""
      And user validates actual downtime as ""
      And user validates subscription id as ""
      And user validates address of issue as ""


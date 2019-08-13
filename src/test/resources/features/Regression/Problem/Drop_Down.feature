@Drop_Down
  #passed
  Feature: user validates drop-downs for problem record
    Scenario: user verifies available information

      Given user is on the OneWorkflow login page
      When user logs in with valid username "syvaptu1_auto" and password as "Telia@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create problem record
      And user switches to window 1
      Then problem record form should appear in new tab
      Then user validates BU availability
      And user clicks on internal checkbox under affected BU's
      Then user enters "Reactive investigation of:Tohall_copy" in Title field
      And user selects request type as "Core & Switching:CNDB" in problem form
      And user enters description as "Drop Down Verification"
      #Impact levels that should be available are: Extensive/Widespread, Significant/Large, Moderate Limited
      Then multiple statuses "Extensive/Widespread:Significant/Large:Moderate Limited" should be available in "Impact" dropdown
      And user selects impact as "Extensive/Widespread"
      #urgency dropdown includes: Critical, High, Medium, low
      And multiple statuses "Critical:High:Medium:Low" should be available in "Urgency" dropdown
      Then user selects urgency as High
      When user clicks on save button on the problem form
      #status' available include: Assigned, Pending, Under investigation, Withdrawn
      Then multiple statuses "Assigned:Pending:Under Investigation:Withdrawn" should be available in "Status*" dropdown
      When user changes status to "Under Investigation" on problem record page
      And user clicks on save button on the problem form
      Then user validates ticket status as "Under Investigation"
      And change should also be reflected in the timeline as ""
      When user clicks on linked items tab
      #Target application that should be available are: Change, Known Error, Operations, Problem, Work Order
      Then multiple statuses "OS3-Change:Os3-Known Error:OS3-Operations:Os3-Problem:OS3-Work Order:(Clear)" should be available in "Target Application" dropdown
      When user selects target application first dropdown as "OS3 - Change"
      #Second dropdown should include: Caused by, is related to, is workaround for, solution for
      Then multiple statuses "Caused by:Is related to:Is workaround for:Solution for" should be available in "Fld-SourceRelationshipType" dropdown
      When user selects target application first dropdown as "OS3 - Known Error"
      #Second dropdown should include: Caused by, is related to, is workaround for, solution for
      Then multiple statuses "Caused by:Is related to:Is workaround for:Solution for" should be available in "Fld-SourceRelationshipType" dropdown
      When user selects target application first dropdown as "OS3 - Operations"
      #Second dropdown should include: Caused by, is related to, is workaround for, solution for
      Then multiple statuses "Caused by:Is related to:Is workaround for:Solution for" should be available in "Fld-SourceRelationshipType" dropdown
      When user selects target application first dropdown as "OS3 - Problem"
      #Second dropdown should include: Caused by, is related to, is workaround for, solution for
      Then multiple statuses "Caused by:Is related to:Is workaround for:Solution for" should be available in "Fld-SourceRelationshipType" dropdown
      When user selects target application first dropdown as "OS3 - Work Order"
      #Second dropdown should include: Caused by, is related to, is workaround for, solution for
      Then multiple statuses "Caused by:Is related to:Is workaround for:Solution for" should be available in "Fld-SourceRelationshipType" dropdown
      When user changes status to investigation complete
      #Change Management:concurrent changes, poor execution or implementation plan, poor testing and validation - after implementation, poor testing and validation - before implementation, violation of approval flow.
      #New implementation: Design issues, Known error introduced in production upon launch, Unsupported elements
      #Production Execution: Lack of RACI, Preventive actions, process violations.
      #For Rejected: Ticket rejected.
      #Risks and failure: insufficient tools, logs,test environment, alarms, lack of RA/BIA, unexpected non-calculated hardware/software failures
      #Upgrades, Patches and modifications: Hardware failures.
      #user error: Insufficient knowledge, unintended use of product, service, features, systems.
      #Vendor management: Insufficient prioritization of resource allocation, Technical vendor interaction
      And user validates route cause code availability
      Then user selects root cause code as "People:Emotional stress"
      And user enters route cause details as "Vendor contracts to be reviewed"
      And user enters RC found date as current date
      Then user clicks on save button on the problem form
      When user changes status to "Closed" on problem record page
      Then multiple statuses "No solution identified:Not repeatable:Rejected:Risk accepted:Solved:Workaround:(clear)" should be available in "Closure Code" dropdown readonly
      And User selects "Root Cause Code" as dropdownValue and should see values for "notreadonly"

        | DropdownValue | DropdownValuesToBePresent|
        | External:3rd Party Failure | External value chains:Interference:Mobile terminals |
        | External:External factor | Digging:Fire:Power outage:Weather |
        | External | Other |
        | People | Emotional stress:Lack of competence:Missing training:Other:Poor Judgement:Time pressure:Too much over time,too tired |
        | Process and Organisation | Caused by Delivery (project or customer deliveries:Caused by Maintenance:Caused by Trouble shooting:Lack of resources:Other:Process misssing or inadequate:Process not followed in organisation:Process not fully implemented:Too complex organisation,unclear RACI |
        | Process and Organisation:Caused by Change | Approval flow violated:Inadequate risk assessment:Parallel Changes:Poor testing:Poor Verification |
        | Process and Organisation:Documentation missing or inadequate | Checks list and procedures:CI inadequately documented:CI not documented in inventory |
        | Process and Organisation:Vendor | Lack of documentation:Lack of unclear SLA, WLA, RACI:Not complying to vendor recommendations / requirements:Use of non approved contractor |
        | Technical | HW error:Lack of capacity,licenses:Lack of patching:Missing inadequate monitoring and alarms:Other:Redundancy didn't work as expected:Root Cause Not Found:Security,hacker attack,SW & Config error:The design does not meet expectation:The implementation is not according to architecture |
        | Technical:Infrastructure | Cooling & Heating:Power |




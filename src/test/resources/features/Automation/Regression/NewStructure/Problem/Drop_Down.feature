@Dropdown @ProblemRegression_1
#  This testcase also covers 3 other stories from P2S1 Sprint
#  SAO-5196:Accountable Organisation drop down menu
#  SAO-5203:Affected Organisation drop down menu,
#  SAO-5206: Remove 5 existing fields
  #passed
  Feature: DropDown
    Scenario: DropDown - user verifies available information

      Given user is on the OneWorkflow login page
      When user logs in with valid username "syvaptu1_auto" and password as "Test@1234"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create problem record
#      When user clicks on agent console create problem record
      And user switches to window 1
      Then problem record form should appear in new tab
      Then "Estimated Ready:Actual Finish:Decision Go/NoGo:Resolving Group:Resolving Person" shouldn't be visible on problem record form
#      Then user validates BU availability
      And user clicks on internal checkbox under affected BU's
      Then user enters "Reactive investigation of:Tohall_copy" in Title field
      And user selects request type as "CPS:IT:Other" in problem form
      And user enters description as "Drop Down Verification"
      Then multiple statuses "Extensive/Widespread:Significant/Large:Moderate/Limited:(clear)" should be available in "Impact" dropdown
      And user selects impact as "Extensive/Widespread"
      And multiple statuses "Critical:High:Medium:Low:(clear)" should be available in "Urgency" dropdown
      And user selects urgency as High
      And user selects accountable organisation as "DivX"
#      And multiple statuses "CA_Infra:CA_IT:CA_Provider:DivX:External:TeliaFinance:(clear)" should be available in "Accountable Org." dropdown
#      And User selects "Accountable Org." as dropdownValue and should see values for "notreadonly"
#        | DropdownValue | DropdownValuesToBePresent |
#        | CA_NSD        | IP:ServCore               |
#        | InfraDK       | CableSites:NW             |
#        | InfraEE       | CableSites:NW             |
#        | InfraFI       | CableSites:NW             |
#        | InfraLT       | CableSites:NW             |
#        | InfraNO       | CableSites:NW             |
#        | InfraSE       | CableSites:NCS:PSTN       |
#        | IT            | CustEng:EntServ:Infra:OSS:Workplace |
#        | NO            | OC&MC:Phonero             |
#        | NSD           | ConvAccess:IP:NSMA:ServCore    |
#        | PAComm        | Conv:VAS:Voice            |
#        | PAConn        | BusNW:Internet:MobVD      |
#        | PAITServ      | MDM_DAAS:PaaS:Security    |
#        | PAMedia       | ConnHome:TV               |

      And user selects affected organisation as "DivX"
#      And multiple statuses "CA_Infra:CA_IT:CA_Provider:DivX:External:TeliaFinance:(clear)" should be available in "Organisations" dropdown
#      And User selects "Affected Orgs." as dropdownValue and should see values for "notreadonly"
#        | DropdownValue | DropdownValuesToBePresent |
#        | CA_NSD        | IP:ServCore               |
#        | InfraDK       | CableSites:NW             |
#        | InfraEE       | CableSites:NW             |
#        | InfraFI       | CableSites:NW             |
#        | InfraLT       | CableSites:NW             |
#        | InfraNO       | CableSites:NW             |
#        | InfraSE       | CableSites:NCS:PSTN       |
#        | IT            | CustEng:EntServ:Infra:OSS:Workplace |
#        | NO            | OC&MC:Phonero             |
#        | NSD           | ConvAccess:IP:ServCore    |
#        | PAComm        | Conv:VAS:Voice                |
#        | PAConn        | BusNW:Internet:MobVD      |
#        | PAITServ      | MDM_DAAS:PaaS:Security         |
#        | PAMedia       | ConnHome:TV               |
      When user clicks on save button on the problem form
      Then "Estimated Ready:Actual Finish:Decision Go/NoGo:Resolving Group:Resolving Person" shouldn't be visible on problem record form
      Then multiple statuses "Assigned:Pending:Under Investigation:Withdrawn:(clear)" should be available in "Status*" dropdown
      When user changes status to "Under Investigation" on problem record page
      And user clicks on save button on the problem form
      Then user validates ticket status as "Under Investigation"
      Then "Estimated Ready:Actual Finish:Decision Go/NoGo:Resolving Group:Resolving Person" shouldn't be visible on problem record form
      When user clicks on linked items tab
      Then multiple statuses "OS3 - Change:OS3 - Known Error:OS3 - Operations:OS3 - Problem:OS3 - Work Order:(clear)" should be available in "Target Application" dropdown
      When user selects target application first dropdown as "OS3 - Change"
      Then multiple statuses "Caused by:Is related to:Is workaround for:Solution for:(clear)" should be available in "Fld-SourceRelationshipType" dropdown
      When user selects target application first dropdown as "OS3 - Known Error"
      Then multiple statuses "Caused by:Related to:Solution for:Workaround for:(clear)" should be available in "Fld-SourceRelationshipType" dropdown
      When user selects target application first dropdown as "OS3 - Operations"
      Then multiple statuses "Caused by:Is related to:Is workaround for:Solution for:(clear)" should be available in "Fld-SourceRelationshipType" dropdown
      And user waits 3 secs
      When user selects target application first dropdown as "OS3 - Problem"
      Then multiple statuses "Caused by:Related to:Solution for:Workaround for:(clear)" should be available in "Fld-SourceRelationshipType" dropdown
      When user selects target application first dropdown as "OS3 - Work Order"
      Then multiple statuses "Caused by:Is related to:Is workaround for:Solution for:(clear)" should be available in "Fld-SourceRelationshipType" dropdown
      When user changes status to investigation complete
      And user validates route cause code availability
      Then user selects root cause code as "People:Emotional stress"
      And user enters route cause details as "Vendor contracts to be reviewed"
      And user enters RC found date as current date
      Then user clicks on save button on the problem form
      When user changes status to "Closed" on problem record page
      Then "Estimated Ready:Actual Finish:Decision Go/NoGo:Resolving Group:Resolving Person" shouldn't be visible on problem record form
      Then multiple statuses "Solved:Rejected:Test ticket:(clear)" should be available in "Closure Code" dropdown readonly
      And User selects "Closure Code" as dropdownValue and should see values for "notreadonly"
      | Dropdown Value | DropdownValuesToBePresent |
      | RC found       | Moved to KE               |
      | RC not found   | Moved to KE               |

      And User selects "Root Cause Code" as dropdownValue and should see values for "notreadonly"
        | DropdownValue | DropdownValuesToBePresent|
        | External:3rd Party Failure | External value chains:Interference:Mobile terminals |
        | External:External factor | Digging:Fire:Power outage:Weather |
        | External | Other |
        | People | Emotional stress:Lack of competence:Missing training:Other:Poor Judgement:Time pressure:Too much over time, too tired |
        | Process and Organisation | Caused by Delivery (project or customer deliveries):Caused by Maintenance:Caused by Trouble shooting:Lack of resources:Other:Process missing or inadequate:Process not followed in organisation:Process not fully implemented:Too complex organisation,unclear RACI |
        | Process and Organisation:Caused by Change | Approval flow violated:Inadequate risk assessment:Parallel Changes:Poor testing:Poor Verification |
        | Process and Organisation:Documentation missing or inadequate | Checks list and procedures:CI inadequately documented:CI not documented in inventory |
        | Process and Organisation:Vendor | Lack of documentation:Lack of unclear SLA, WLA, RACI:Not complying to vendor recommendations / requirements:Use of non approved contractor |
        | Technical | HW error:Lack of capacity,licenses:Lack of patching:Missing inadequate monitoring and alarms:Other:Redundancy didn't work as expected:Root Cause Not Found:Software Bug:Security,hacker attack,SW & Config error:The design does not meet expectation:The implementation is not according to architecture |
        | Technical:Infrastructure | Cooling & Heating:Power |
      And user selects solved under closure code
      And user enters solution as "A change in processes"
      And user enters solution found date as current date
      Then user clicks on save button
      And user validates ticket status as "Closed"
      Then "Estimated Ready:Actual Finish:Decision Go/NoGo:Resolving Group:Resolving Person" shouldn't be visible on problem record form



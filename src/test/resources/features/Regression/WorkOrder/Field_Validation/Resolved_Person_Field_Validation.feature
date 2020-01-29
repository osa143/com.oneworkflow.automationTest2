@workorder_field_validation @workorder_Resolved_Person_field_validation

Feature:Work Order Resolved Person field validation
  Scenario: Work Order Resolved Person  validation

    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create work order
    Then user switches to window 1
    When user verifies status is read only
    Then user validates ticket status as "New"
    When user enters title as "<title>"
    And user selects request type as "Maintenance" on work order page
    And user enters description as "Description"
    And user selects priority as "Info"
#    Then user selects assigned profile dropdown as "Acc Mob RAN Ericsson-SE"
    Then user selects assignment profile dropdown as "Acc Mob RAN Ericsson-SE"
#    And user enters "PLAZA" in assignee
    Then user clicks on save button


    And user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user switches to frame
    And CI search tab should be opened
    And user selects Category as "Core"
    And user selects Type as "Mobile CS Core Network"
    Then user enters "FI_MGW_SMG03TRE" in the name+ field
    Then user clicks on search button on CI search window
    And user selects a CI from list
    And user selects impact level as "Degradation of Service"
    And user clicks on relate CI
    Then user closes warning message
    And user clicks on close button on CI search window
    And user waits
    And user clicks on Ack button
    Then user clicks on save button
#    And user changes status to "Cleared" on work order page
    Then user changes status to "Cleared" on work order page
   And User selects "Resolved Group" as dropdownValue and should see values for "notreadonly"

    |resolved group                                                    |resolved person dropdown values|
    |Access network:Mobile:RAN:Acc Mob RAN Ericsson-SE                 |agnebj:andegy:aniter:bokors:dgl578:kzz036:magnlu:magzey:mari58:matssn:peresj:robcar:robmak:sven27:tomben:(clear)|
    |VAS:Application Services                                          |bdw2222:caw8237:crm2090:dpy4386:jwe1358:mks1538:rgg6827:thk9453:yaw9469:(clear)                              |
    |VAS:IN Services:VAS IN CGW                                        |jabjer:lmx567:(clear)                                                                                        |
    |VAS:IN Services:VAS IN Entry                                      |jabjer:kzz036:lmx567:(clear)          |
    |VAS:IN Services:VAS IN Managed Voice                              |jabjer:lmx567:(clear)          |
    |VAS:IN Services:VAS IN Services KY&Cleanmail                      |helinma1:henrija1:tahvaju1:(clear)          |
    |VAS:IN Services:VAS IN Services Meridix Hawkey                    |ewa647:fdy089:helinma1:lyytiee2:pahe12:raro08:(clear)          |
    |VAS:IN Services:VAS IN Services NGIN CIVR                         |helinma1:kokkoto1:lyytiee2:ojalame1:putkoto1:wen2547:(clear)          |
    |VAS:IN Services:VAS IN Services NSEE                              |helinma1:henrija1:tahvaju1:(clear)          |
    |VAS:IN Services:VAS IN Services Other                             |helinma1:henrija1:kokkoto1:ojalame1:putkoto1:tahvaju1:wen2547:(clear)          |
    |VAS:IN Services:VAS IN Services SGW OCSC SIG                      |helinma1:henrija1:tahvaju1:(clear)          |
    |VAS:IN Services:VAS IN Services Touchpoint-DK                     |ewa647:fdy089:helinma1:lyytiee2:pahe12:raro08:(clear)          |
    |VAS:IN Services:VAS IN Services Touchpoint-SE                     |andmal:ewa647:fdy089:helinma1:lyytiee2:pahe12:raro08:(clear)          |










  






@00.20 @Incident1 @00
#passed
  Feature: validation Fault type field availability in incident record

    Scenario: validation Fault type field availability in incident record

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user validates fault type dropdown availability
      Then multiple statuses "Access Fault:Application fault:Data Fault:Infra Fault:Network Fault:Power Fault:Roaming-Data Fault:Roaming-Voice Fault:Site Fault:Transmission Fault:TV Fault:Voice Fault:(clear)" should be available in "Fault Type" dropdown
      And user logsOut and accepts alert

    @00.21
    Scenario: validation CTI fields

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on CTI details under sections
      Then user selects category and verifies Type dropdown values then selects Type and verifies item dropdown values
        |category|                     TypeDropdownValues                  |       Type         |               ItemDropdownValues            |
        |Access  |Radio Access Network:RAN:Telia Owned CPE:WLAN:WLAN Access|Radio Access Network|BSC:eNodeB:GSMCell:MFNCell:nodeB:Repeater:RNC|

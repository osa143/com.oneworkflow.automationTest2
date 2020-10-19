@Set_BU_CTI_based_on_CI
 # This test also cover SAO-3937
  Feature: Work order creation from incident and validate set country based on CI


    Scenario: Affected BU should updated from CI

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "Set Country based on CI" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "Set Country based on CI Test for OP and WO"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user adds below CI's to the ticket
        |   CI Name     |
        |SE_CPE_FRECPE5 |
        |FI_LTECell_Valpe4H|
      And user validates finland as affected BU
      When user clicks on CTI details under sections
      Then user validates Category as "Packet_Transport"
      And user validates type as "Other"
      And user validates item as "CPE"
      When user clicks on "Work Orders" tab
      And user clicks on create from ticket
      Then user switches to window 2
      When user clicks on save button
      And user validates ticket status as "New"
      And user validates Sweden is selected as Affected BU
      And user validates finland as affected BU
      When user clicks on CTI details under sections
      Then user validates Category as "Packet_Transport"
      And user validates type as "Other"
      And user validates item as "CPE"
      When user selects Category as "DS"
      Then user validates type as ""
      And user validates item as ""
      When user selects Type as "MIS"
      Then user validates item as ""
      When user switches to window 1
      And user selects Category as "DS"
      Then user validates type as ""
      And user validates item as ""
      When user selects Type as "MIS"
      Then user validates item as ""
      


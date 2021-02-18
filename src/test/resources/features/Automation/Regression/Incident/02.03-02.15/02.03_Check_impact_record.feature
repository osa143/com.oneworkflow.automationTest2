@02.03 @Incident @02
  #CORE in ST, Core in SIT
  #passed
  Feature: check impact record
    Scenario: check impact record

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user creates an incident with following details
        |Title                    |RequestType|Description     |
        |02:03 Check Impact Record|Customer   |02:03 Check Impact Record|
      Then ticket should be created and status should be assigned
      When user adds below CI's to the ticket
        |   CI Name     |
        |SE_SGSN_FREMME2|
        |SE_SGSN_HYMME2 |
        |SE_SGSN_LDHMME1|
        |SE_SGSN_VRRMME1|
      And user clicks on "Diagnosis" tab
      Then user validates CI columns "Category:Type:Item:Site Name:Impact Type:Impact Category:Impact Level:Impact Status:Impact From:Impact To:CI Class Type:CI Name:PrimarySecondary:CI Priority:Business Hours:Custom Attribute4" availability
      #Impact to and CI class, type wont have data - this is fine (based on ALM test)
      And user validates columns have data present
      When user right clicks on CI "SE_SGSN_HYMME2" and selects "Impact:Update"
      And user switches to frame
      Then user selects impact name as "Loss of Service"
      And user clicks confirm checkbox
      And user clicks on bulk update save button
      Then user validates CI "SE_SGSN_HYMME2" impact level is "Loss of Service"
      And user right clicks on CI "SE_SGSN_FREMME2" and clears impact for check impact record
      And user validates CI "Impact Status" is "Inactive"



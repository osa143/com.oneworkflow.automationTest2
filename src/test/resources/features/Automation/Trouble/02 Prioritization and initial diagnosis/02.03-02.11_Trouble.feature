@02.03-02.08_Trouble
  #testcase covers 02.03,02.05,02.07 and 02.08
  Feature: 02.03-02.11 trouble
    Scenario: 02.03-02.11 trouble

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "02:07 Change Incident Start Time" in Title field in Trouble event
      And user selects request type as "Customer" on trouble event page
      And user enters description as "02:07 Change Incident Start Time"
      And user changes event start time as "12-31-2021 11:59:59" future date and time
      Then user clicks on save button
      And an error message should appear: "The Event Start Time cannot be set in the future (ARERR 999001300)"
      When user changes event start time as "12-31-2019 11:59:59" past date and time
      Then user clicks on save button
      And ticket should be created and status should be assigned
      Then user validates availability of tabs "Timeline:Diagnosis:Interested Parties:Notifications:Linked Items:Work Orders:Service Level:Alarms:Recurring Incidents:Service Info"
      When user clicks on Ack button
      And user clicks on assignment under sections
      Then user validates last ack by field has data present
      When user selects assignment profile dropdown as "Core:Mobile:Mobile PS:Mob PS Core WEST"
      #assignee needs to be the same as the user who last ack'd ticket (in this case will be ticket creator)
      Then user enters "Change_Automation_1" in assignee
      And user clicks on save button
      When user clicks on assignment under sections
      Then user validates assignee is "Change_Automation_1"
      When user adds below CI's to the ticket
        |   CI Name     |
        |SE_SGSN_FREMME2|
        |SE_SGSN_HYMME2 |
        |SE_SGSN_LDHMME1|
        |SE_SGSN_VRRMME1|
      And user clicks on "Diagnosis" tab
      Then user validates CI columns "Category:Type:Item:Site Name:Impact Type:Impact Category:Impact Level:Impact Status:Impact From:Impact To:CI Class Type" availability
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
      When user selects importance as "Critical"
      And user selects impact as "Critical" on trouble event page
      And user clicks on priority check button
      And user clicks on save button
      Then user validates that priority changes to "Emergency"
      And change should also be reflected in the timeline as "The Ticket Priority has been updated to :  Emergency" on row 2
      When user selects search menu as "Open Search Form:Trouble Event"
      And user switches to window 2
      And user enters ticket id as "OP-000000539006"
      Then user validates OLA value is set
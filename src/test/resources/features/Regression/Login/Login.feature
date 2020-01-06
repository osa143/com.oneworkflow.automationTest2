@Login
  Feature: Login test

    Scenario Outline: Test to see if all user profiles are working correctly

      Given user is on the OneWorkflow login page
      When user logs in with valid username "<User>" and password as "<Password>"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      And user validates agent console is displayed correctly
      Then user validates availability of "Timeline:Details:List:Search / Quick Create" tabs
      #And user logsOut from One workflow


      Examples:

      |User                        |Password |
      #|Tohall_copy                 |Test@1234|
      #|Tohall_copy2                |Test@1234|
      #|Tohall_copy3                |Test@1234|
      #|Tohall_copy4                |Test@1234|
      #|Tohall_copy5                |Test@1234|
      #|Tohall_copy6                |Test@1234|
      #|Tohall_copy7                |Test@1234|
      #|Change_Automation_1         |Test@1234|
      #|Change_Automation_2         |Test@1234|
      #|Change_Automation_3         |Test@1234|
      #|Change_Automation_4         |Test@1234|
#      |Change_Automation_5         |Test@1234|
#      |Change_Automation_6         |Test@1234|
#      |Change_Automation_7         |Test@1234|
#      |Change_Automation_8         |Test@1234|
#      |Change_Automation_9         |Test@1234|
#      |Change_Automation_10        |Test@1234|
      #|ChangeInitiator/Builder1    |Test@1234|
      #|ChangeInitiatorInternal1    |Test@1234|
      #|ChangeManager1_Automation   |Test@1234|
      #|frvi96_auto                 |Test@1234|
      #|DC CS Core (Voice)_auto     |Test@1234|
      #|EscalationManager1          |Test@1234|
      #|ChangeImplementationControl1|Test@1234|
      #|DC IMS Core_auto            |Test@1234|
      #|mina09_auto                 |Test@1234|
      #|syvaptu1_auto               |Test@1234|
#      |PlazaTest                   |Test@1234|
#      |ow_basic2_auto              |Test@1234|
#      |ow_CCMobAccess_auto         |Test@1234|
#      |ow_CCMobAccess1_auto        |Test@1234|
      #|cm_appadmin1_auto           |Test@1234|
      #|cm_adminaccess1_auto        |Test@1234|
#      |ow_windows_auto             |Test@1234|
#      |frvi96_auto4                |Test@1234|
#      |dc_itfi1_auto               |Test@1234|
#      |ow_external0                |Test@1234|
#      |ow_external1                |Test@1234|
      |ow_external2                |Test@1234|
#      |ow_basic1                   |Test@1234|
#      |ow_basic2                   |Test@1234|
#      |ow_basic3                   |Test@1234|
#      |Assignment_admin            |Test@1234|






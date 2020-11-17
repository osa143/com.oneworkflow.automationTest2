@Login
  Feature: Login test

    Scenario Outline: Test to see if all user profiles are working correctly

      Given user is on the OneWorkflow login page
      When user logs in with valid username "<User>" and password as "<Password>"
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      And user validates agent console is displayed correctly
      Then user validates availability of "Timeline:Details:List:Search / Quick Create" tabs
      When user selects "Nav-Username" menu as "My Account"
      Then user information window should be opened
      And user clicks on "Profiles" tab
      And user validates "<Profiles>" are present under "Profile ID" column


      Examples:
        |User                        |Password |Profiles|
#        |Tohall_copy                 |Test@1234|2003:2001:2005|
#        |Tohall_copy2                |Test@1234|2003:2279:2005:2210|
#        |Tohall_copy3                |Test@1234|2001:2005:2003:2279:2210|
#        |Tohall_copy4                |Test@1234|2210:2003:2196:2279|
#        |Tohall_copy5                |Test@1234|2210:2003:2196:2279|
#        |Tohall_copy6                |Test@1234|2003:2279:2210:2001:2005|
#        |Tohall_copy7                |Test@1234|2210:2001:2003:2005:2279|
#        |Change_Automation_1         |Test@1234|2126:2003:2182:2189|
#        |Change_Automation_2         |Test@1234|2126:2003:2182:2189:2007:2196|
#        |Change_Automation_3         |Test@1234|2126:2003:2182:2189|
#        |Change_Automation_4         |Test@1234|2126:2003:2134:2157:2181:2182:2189:2222:2223:2279:2006|
#        |Change_Automation_5         |Test@1234|2003:2279:2181:2157:2126:2222:2223:2134:2182:2189:2196:2578:2006|
#        |Change_Automation_6         |Test@1234|2007:2157:2181:2182:2189:2222:2006:2126:2003:2279:2134:2223|
#        |Change_Automation_7         |Test@1234|2126:2003:2279:2134:2157:2181:2189:2222:2223:2006:2182|
#        |Change_Automation_8         |Test@1234|2182:2189:2007:2134:2126:2003:2279:2006:2181:2157:2222:2223|
#        |Change_Automation_9         |Test@1234|2126:2003:2279:2007:2181:2182:2189:2222:2223:2134:2157|
#        |Change_Automation_10        |Test@1234|2126:2003:2007:2134:2157:2181:2182:2189:2222:2223:2279:2006|
#        |ChangeInitiator/Builder1    |Test@1234|2218|
#        |ChangeInitiatorInternal1    |Test@1234|2196|
#        |ChangeManager1_Automation   |Test@1234|2007:2006|
#        |frvi96_auto                 |Test@1234|2196:2005:2279:2001|
#        |DC CS Core (Voice)_auto     |Test@1234|2181|
#        |EscalationManager1          |Test@1234|2008|
#        |ChangeImplementationControl1|Test@1234|2011|
#        |DC IMS Core_auto            |Test@1234|2186|
#        |mina09_auto                 |Test@1234|2185:2005:2184:2001:2002|
#        |syvaptu1_auto               |Test@1234|2002|
#        |PlazaTest                   |Test@1234|2003:2279:2196:2438:2578|
#        |ow_basic2_auto              |Test@1234|2006:2136:2003:2279:2196:2007:2011|
#        |ow_CCMobAccess_auto         |Test@1234|2003:2279:2126:2189:2182:2158:2100|
#        |ow_CCMobAccess1_auto        |Test@1234|2126:2003:2100:2158:2182:2189:2279|
#        |cm_appadmin1_auto           |Test@1234|2006:2007|
#        |cm_adminaccess1_auto        |Test@1234|2006:2007|
#        |ow_windows_auto             |Test@1234|2003:2279:2005:2001|
#        |frvi96_auto4                |Test@1234|2005:2003:2279|
#        |dc_itfi1_auto               |Test@1234|2100:2158:2279:2126:2189:2182:2136|
#        |ow_external0                |Test@1234|2196:2218|
#        |ow_external1                |Test@1234|2218|
#        |ow_external2                |Test@1234|2218|
#        |ow_basic1                   |Test@1234|2136:2003:2279:2196|
#        |ow_basic2                   |Test@1234|2196:2003:2136:2279|
#        |ow_basic3                   |Test@1234|2196:2249|
        |Assignment_admin            |Test@1234|2015:2692:2003:2279:2196|




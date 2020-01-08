@Bulk_Loading_Format_Trouble_50CIs_Manual @SAO-427
    #passed
   Feature: checking of bulk loading format
  Scenario Outline: user checks the format of bulk loading format

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      When user clicks on sweden checkbox under affected BU's
      And user enters "SAO-427 Test Bulk Loading 50 CI's" in Title field
      And user selects request type as "Event" on trouble event page
      And user enters description as "SAO-427 Test Bulk Loading 50 CI's"
      And user clicks on save button
      Then ticket should be created and status should be assigned
      When user clicks on Diagnosis tab
      And user clicks on Add Bulk Import button
      And user switches to frame
      Then user should see bulk ci loading window
      When user selects impact level as "No Impact"
      And user clicks on Manual Input radio button
      And user enters "<50CIs>" in manual CI search box
      Then user clicks on save button under bulk import
      And first error message should display as "The manually identified CIs are now being processed..." on bulk ci window
      And second error message should display as "Please Check for the progress of this process in \"Show Bulk Import\". (ARNOTE 10000)" on bulk ci window
      And user waits 59 secs
      When user clicks on Show Bulk Import button
      And user switches to frame
      When user clicks on "Related CIs" tab
      Then user validates at least one CI has "Completed" under "Status"
      And user validates total rows as "50"
      And user validates Rows OK as "50"
      And user validates with errors as "0"
      And user validates with warnings as "0"
      Then user clicks on bulk loading close button


      Examples:

      |50CIs|
      | SE;SE OSS RC;SE_AAA_AAA01SE;SE_AAA_AAA02SE;SE_AAA_AAA03SE;SE_AAA_AAA04SE;SE_AAA_AAA98SE;SE_AAA_AAA99SE;LT_AC_AC-KONDIC_202;LT DNS SIP;LT_023A_ID_MISSEDCI;LT_2C964012_ID_MISSEDCI;LT_2C975011_ID_MISSEDCI;LT_2F180011_ID_MISSEDCI;LT_2F196011_ID_MISSEDCI;LT_2F198011_ID_MISSEDCI;LT_57FA_ID_MISSEDCI;NO_AC_AC-AKH902-350-1-201;NO_AC_AC-AKH902-350-1-401;NO_AC_AC-AKH902-350-1-402;NO_AC_AC-AKH902-350-1-403;NO_AC_AC-AKH902-350-1-404;NO_AC_AC-AKH902-350-1-405;NO_AC_AC-AKH902-350-2-201;NO_AC_AC-AKH902-350-2-401;NO_AC_AC-AKH902-350-2-402;NO_AC_AC-AKH902-350-2-403;FI_AS_hkpswbe01;FI_AFG_AFG01FI;FI_AFG_AFG02FI;FI_AFG_AFG99FI;FI_AS_emk10-3krs-c2960-z3;FI_AS_emk8-3krs-c3560-z3;FI_AS_emk8-5krs-c2950-1;FI_AS_hkiswbe01;FI_AS_hkiswbe02;EE_eNodeB_200001;EE_eNodeB_200002;EE_eNodeB_200004;EE_eNodeB_200007;EE_eNodeB_200010;EE_eNodeB_200011;EE_eNodeB_200012;EE_eNodeB_200014;EE_eNodeB_200015;EE_eNodeB_200017;DK_AAA_AAA01DK;dk gdpr purpose test;dk gdpr purpose;DK_AAA_AAA02DK |
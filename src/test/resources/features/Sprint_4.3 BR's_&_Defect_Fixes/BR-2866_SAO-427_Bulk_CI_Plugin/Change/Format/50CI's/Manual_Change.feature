@Bulk_Loading_Format_change_50CIs_Manual @SAO-427
    #passed
Feature: checking of bulk loading format
  Scenario Outline: user checks the format of bulk loading format

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
      Then user switches to window 1
      And user selects request type as "Normal Change"
      Then user selects title as "Mobile:CS Core (Voice)" on Change record page
      And user selects request category as "Software Installation" on change record page
      And user enters description as "TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading 50 CI's"
      And user enters reason field as "Regression"
      And user selects priority as "Critical"
      And user enters "Privacy Data: Just Testing" in the change builder field
      When user enters "Regression - Change Management Process" in the implementation field
      And user enters "Regression - Change Management Process" in the test plan field
      And user enters "Regression - Change Management Process" in the rollback field
      And user enters "Regression - Change Management Process" in the communication plan field
      And user enters "Regression - Change Management Process" in the ver of functionality field
      And user enters "Regression - Change Management Process" in the risk description field
      Then user enters as "Test Data - Ignore Ticket" in service and customer impact
      Then user enters request start time 24 hours ahead of current date
      And user enters request end time 28 hours ahead of current date
      And user enters impact duration as "45" minutes
      And user selects estimated impact dropdown as "Degradation of Service"
      And user clicks on save button
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
          | FI_AS_hkpswbe03;FI_AS_hkpswbe04;SE;SE_99999_ID_MISSEDCI;SE OSS RC;SE_AAA_AAA01SE;SE_AAA_AAA02SE;SE_AAA_AAA03SE;SE_AAA_AAA04SE;SE_AAA_AAA98SE;SE_AAA_AAA99SE;SE_AAA_TestMartinx;SE_ActixOne;SE_AFG_AFG89FI;SE_AFG_AFG98SE;SE_AFG_REFAFG;SE_ALE_hogalid-ale2;SE_ALE_m-hyllie-ale1;SE_ALE_m-hyllie-ale2;SE_ALE_test-ale;SE_ALE_vrr-ale1;SE_AP_1246521-ap;SE_AP_1247809-ap;SE_AP_1255052-ap;SE_AP_1267993-ap;SE_AP_8028420-ap;SE_AP_ahus-cigarrkungenshus-ap1;SE_AP_ahus-cigarrkungenshus-ap2;SE_AP_akersberga-enebacken-ap1;SE_AP_akersberga-enebacken-ap10;SE_AP_akersberga-enebacken-ap11;SE_AP_akersberga-enebacken-ap12;SE_AP_akersberga-enebacken-ap13;SE_AP_akersberga-enebacken-ap14;SE_AP_akersberga-enebacken-ap15;SE_AP_akersberga-enebacken-ap16;SE_AP_akersberga-enebacken-ap17;SE_AP_akersberga-enebacken-ap18;SE_AP_akersberga-enebacken-ap2;SE_AP_akersberga-enebacken-ap3;SE_AP_akersberga-enebacken-ap4;SE_AP_akersberga-enebacken-ap5;SE_AP_akersberga-enebacken-ap6;SE_AP_akersberga-enebacken-ap7;SE_AP_akersberga-enebacken-ap8;SE_AP_akersberga-preem-ap;SE_AP_akersberga-preem-ap1;SE_AP_alem-preem-ap;LT_AC_AC-KONDIC_54_2;LT_AC_AC-KONDIC_610_1|


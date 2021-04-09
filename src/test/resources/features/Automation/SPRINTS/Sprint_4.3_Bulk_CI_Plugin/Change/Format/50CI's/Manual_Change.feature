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
    And user enters start time as 24 hours fast from current sweden time in "MM/dd/YYYY HH:mm:ss" format
    And user enters end time as 28 hours fast from current sweden time in "MM/dd/YYYY HH:mm:ss" format
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
  |SE_LTECell_103392011;SE_LTECell_100895010;FI_LTECell_Valpe4H;FI_LTECell_Hauci1L;NO_LTECell_TLM150_L18-1;SE_AFG_AFG01SE;EE_LTECell_AABLAK2;SE_UMTSCell_100021;DK_UMTSCell_B0001S11;FI_UMTSCell_3G Labra2A;EE_UMTSCell_AABLAW2;SE_AFG_AFG02SE;SE_AFG_AFG89FI;SE_SGSN_FREMME2;DK_SGSN_AMBMME1;FI_SGSN_HKIMME02;EE_SGSN_KOORTMME1;NO_SGSN_OSL800MME1;LT_SGSN_VLMMME02;SE_MSCSERVER_FRE1MS;DK_MSCSERVER_AMB3MSC;FI_MSS_SMS01HKI;SE_AFG_AFG98SE;NO_MSS_OSLMSS01;SE_AFG_AFG99SE;FI_GSMCell_Maunu1;SE_AFG_REFAFG;tiksu PROD;aa325;aa323iptvapp03;fre-rep-s3;aa243as01;aa243as02;aa243as03;aa245as01;aa687bias03;aa687bias04;aa687biast03;aa687bias06;aa687bias07;gai-dhcp11-sn91;mordo;SE_ALARMMAP_ALARMMAP;SE_ALE_hogalid-ale1;ingest8;SE_ALE_hogalid-ale2;lamba;SE_ALE_m-hyllie-ale1;fd100;mta2|

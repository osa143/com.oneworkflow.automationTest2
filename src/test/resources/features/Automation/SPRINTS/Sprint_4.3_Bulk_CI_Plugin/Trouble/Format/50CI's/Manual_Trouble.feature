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
      And user waits 50 secs
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
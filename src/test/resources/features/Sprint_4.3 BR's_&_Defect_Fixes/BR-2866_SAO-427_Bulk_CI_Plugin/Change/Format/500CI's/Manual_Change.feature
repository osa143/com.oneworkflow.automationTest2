@Bulk_Loading_Format_Change_Manual_500CI's_1
Feature: checking of bulk loading format
  Scenario: user checks the format of bulk loading format

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
      Then user switches to window 1
      And user selects request type as "Normal Change"
      Then user selects title as "Mobile:CS Core (Voice)" on Change record page
      And user selects request category as "Software Installation" on change record page
      And user enters description as "TEST TICKET PLEASE IGNORE - SAO-427 Test Bulk Loading CI not found Prompt Change"
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
      When user clicks on "Diagnosis" tab
      And user clicks on Add Bulk Import button
      And user switches to frame
      Then user should see bulk ci loading window
      When user selects impact level as "No Impact"
      And user clicks on Manual Input radio button
      And user clicks on Ignore Duplicate CIs checkbox
#      And user enters "<500CIs>" in manual CI search box
#      Then user clicks on save button under bulk import
#      And first error message should display as "The manually identified CIs are now being processed..." on bulk ci window
#      And second error message should display as "Please Check for the progress of this process in \"Show Bulk Import\". (ARNOTE 10000)" on bulk ci window
#      And user waits 5 secs
#      When user clicks on Show Bulk Import button
#      And user switches to frame
#      When user clicks on "Related CIs" tab
#      Then user validates at least one CI has "Completed" under "Status"
#      And user validates total rows as "500"
#      And user validates Rows OK as "500"
#      And user validates with errors as "0"
#      And user validates with warnings as "0"
#      Then user clicks on bulk loading close button
#
#
#      Examples:
#
#          |500CIs|
#          | Test |
#
#          |SE;SE_99999_ID_MISSEDCI;SE OSS RC;SE_AAA_AAA01SE;SE_AAA_AAA02SE;SE_AAA_AAA03SE;SE_AAA_AAA04SE;SE_AAA_AAA98SE;SE_AAA_AAA99SE;SE_AAA_TestMartinx;SE_ActixOne;SE_AFG_AFG01SE;SE_AFG_AFG02SE;SE_AFG_AFG89FI;SE_AFG_AFG98SE;SE_AFG_AFG99SE;SE_AFG_REFAFG;SE_ALE_hogalid-ale2;SE_ALE_m-hyllie-ale1;SE_ALE_m-hyllie-ale2;SE_ALE_test-ale;SE_ALE_vrr-ale1;SE_AP_1246521-ap;SE_AP_1247809-ap;SE_AP_1255052-ap;SE_AP_1267993-ap;SE_AP_8028420-ap;SE_AP_ahus-cigarrkungenshus-ap1;SE_AP_ahus-cigarrkungenshus-ap2;SE_AP_akersberga-enebacken-ap1;SE_AP_akersberga-enebacken-ap10;SE_AP_akersberga-enebacken-ap11;SE_AP_akersberga-enebacken-ap12;SE_AP_akersberga-enebacken-ap13;SE_AP_akersberga-enebacken-ap14;SE_AP_akersberga-enebacken-ap15;SE_AP_akersberga-enebacken-ap16;SE_AP_akersberga-enebacken-ap17;SE_AP_akersberga-enebacken-ap18;SE_AP_akersberga-enebacken-ap2;SE_AP_akersberga-enebacken-ap3;SE_AP_akersberga-enebacken-ap4;SE_AP_akersberga-enebacken-ap5;SE_AP_akersberga-enebacken-ap6;SE_AP_akersberga-enebacken-ap7;SE_AP_akersberga-enebacken-ap8;_SE_AP_akersberga-enebacken-ap9;SE_AP_akersberga-preem-ap;SE_AP_akersberga-preem-ap1;SE_AP_alem-preem-ap;SE_AP_alem-preem-ap1;SE_AP_alingsas-preem-ap;SE_AP_alingsas-preem-ap1;SE_AP_almhult-jarnvagsstation-ap1;SE_AP_alvesta-radmannen-ap1;SE_AP_alvesta-radmannen-ap10;SE_AP_alvesta-radmannen-ap2;SE_AP_alvesta-radmannen-ap3;SE_AP_alvesta-radmannen-ap4;SE_AP_alvesta-radmannen-ap5;SE_AP_alvesta-radmannen-ap6;SE_AP_alvesta-radmannen-ap7;SE_AP_alvesta-radmannen-ap8;SE_AP_alvesta-radmannen-ap9;SE_AP_alvkarleby-hot-dragonsgate-ap1;SE_AP_alvkarleby-hot-dragonsgate-ap10;SE_AP_alvkarleby-hot-dragonsgate-ap11;SE_AP_alvkarleby-hot-dragonsgate-ap12;SE_AP_alvkarleby-hot-dragonsgate-ap13;SE_AP_alvkarleby-hot-dragonsgate-ap14;SE_AP_alvkarleby-hot-dragonsgate-ap15;SE_AP_alvkarleby-hot-dragonsgate-ap16;SE_AP_alvkarleby-hot-dragonsgate-ap17;SE_AP_alvkarleby-hot-dragonsgate-ap18;SE_AP_alvkarleby-hot-dragonsgate-ap19;SE_AP_alvkarleby-hot-dragonsgate-ap2;SE_AP_alvkarleby-hot-dragonsgate-ap20;SE_AP_alvkarleby-hot-dragonsgate-ap21;
#  SE_AP_alvkarleby-hot-dragonsgate-ap22;SE_AP_alvkarleby-hot-dragonsgate-ap23;SE_AP_alvkarleby-hot-dragonsgate-ap24;SE_AP_alvkarleby-hot-dragonsgate-ap25;SE_AP_alvkarleby-hot-dragonsgate-ap26;SE_AP_alvkarleby-hot-dragonsgate-ap27;SE_AP_alvkarleby-hot-dragonsgate-ap28;SE_AP_alvkarleby-hot-dragonsgate-ap29;SE_AP_alvkarleby-hot-dragonsgate-ap3;SE_AP_alvkarleby-hot-dragonsgate-ap30;SE_AP_alvkarleby-hot-dragonsgate-ap31;SE_AP_alvkarleby-hot-dragonsgate-ap32;SE_AP_alvkarleby-hot-dragonsgate-ap33;SE_AP_alvkarleby-hot-dragonsgate-ap4;SE_AP_alvkarleby-hot-dragonsgate-ap5;SE_AP_alvkarleby-hot-dragonsgate-ap6;SE_AP_alvkarleby-hot-dragonsgate-ap7;SE_AP_alvkarleby-hot-dragonsgate-ap8;EE_99999_ID_MISSEDCI;EE_AAA_AAA01EE;EE_AAA_AAA02EE;EE_ActixOne;EE_AFG_AFG01EE;EE_AFG_AFG02EE;EE_AIR1_ID_MISSEDCI;EE_AIR2_ID_MISSEDCI;EE_AIR3_ID_MISSEDCI;EE_AIR4_ID_MISSEDCI;EE_Atoll;EE_BSC_BSC5;EE_BSC_EE_DEF_BSC;EE_BSC_KRT2B;EE_BSC_PET1B;EE_CDDS;EE_CEM;EE_CH_SW02_ID_MISSEDCI;EE_CH_SW07_ID_MISSEDCI;EE_CH_SW08_ID_MISSEDCI;EE_CMG_ee-cmg01;
#  EE_CMG_ee-cmg02;EE_CMG_ee-cmg03;EE_CMG_ee-cmg04;EE_CPL;EE_CRS02_ID_MISSEDCI;EE_CSCF_CSCF01EE;EE_CSCF_CSCF02EE;EE_DDN_krt-vr01;EE_DDN_krt-vr02;EE_DDN_pet-vr01;EE_DDN_pet-vr02;EE_DSC_DSC01EE;EE_DSC_DSC02EE;EE_Eniq;EE_eNodeB_200001;EE_eNodeB_200002;EE_eNodeB_200004;EE_eNodeB_200007;EE_eNodeB_200010;EE_eNodeB_200011;EE_eNodeB_200012;EE_eNodeB_200014;EE_eNodeB_200015;EE_eNodeB_200017;EE_eNodeB_200018;EE_eNodeB_200019;EE_eNodeB_200020;EE_eNodeB_200021;EE_eNodeB_200022;EE_eNodeB_200023;EE_eNodeB_200024;EE_eNodeB_200025;EE_eNodeB_200026;EE_eNodeB_200027;EE_eNodeB_200029;EE_eNodeB_200030;EE_eNodeB_200031;EE_eNodeB_200032;EE_eNodeB_200033;EE_eNodeB_200034;EE_eNodeB_200035;EE_eNodeB_200036;EE_eNodeB_200037;EE_eNodeB_200038;EE_eNodeB_200039;EE_eNodeB_200040;EE_eNodeB_200041;EE_eNodeB_200042;EE_eNodeB_200045;EE_eNodeB_200046;EE_eNodeB_200047;EE_eNodeB_200048;EE_eNodeB_200049;EE_eNodeB_200050;EE_eNodeB_200051;EE_eNodeB_200052;EE_eNodeB_200053;EE_eNodeB_200054;EE_eNodeB_200055;EE_eNodeB_200056;EE_eNodeB_200057;
#  EE_eNodeB_200058;EE_eNodeB_200059;EE_eNodeB_200060;EE_eNodeB_200061;EE_eNodeB_200062;EE_eNodeB_200063;EE_eNodeB_200064;EE_eNodeB_200065;EE_eNodeB_200066;EE_eNodeB_200067;EE_eNodeB_200068;EE_eNodeB_200069;EE_eNodeB_200070;EE_eNodeB_200071;EE_eNodeB_200072;EE_eNodeB_200073;EE_eNodeB_200595;NO DNS External;NO DNS Internal;NO DNS Mobile Gi;NO DNS Mobile Gn;NO.DECOM.2017Q4;NO.DUMMY;NO.DUMMY.INFRASTRUCTURE;NO.DUMMY.MANAGEMENT;NO.DUMMY.OLD.TELE2.DECOM;NO.DUMMY.RANDOM.UNKNOWN;NO.MONITOR;NO_99999_ID_MISSEDCI;NO_AAA_AAA01NO;NO_AAA_AAA02NO;NO_AAD064_G9-1_ID_MISSEDCI;NO_AAD080_G9-1_ID_MISSEDCI;NO_AC_AC-AKH902-350-1-201;NO_AC_AC-AKH902-350-1-401;NO_AC_AC-AKH902-350-1-402;NO_AC_AC-AKH902-350-1-403;NO_AC_AC-AKH902-350-1-404;NO_AC_AC-AKH902-350-1-405;NO_AC_AC-AKH902-350-2-201;NO_AC_AC-AKH902-350-2-401;NO_AC_AC-AKH902-350-2-402;NO_AC_AC-AKH902-350-2-403;NO_AC_AC-AKH902-350-2-404;NO_AC_AC-AKH902-350-2-405;NO_AC_AC-AKH902-3702CB05_1;NO_AC_AC-AKH902-3702CB06_1;NO_AC_AC-BSK300;NO_AC_AC-HDM200;NO_AC_AC-HLK014-3701/2CB04;
#  NO_AC_AC-HLK014-3701/2CB05;NO_AC_AC-HLK014-3701/2CB06;NO_AC_AC-HLK014-3701_1;NO_AC_AC-HLK014-3701CB02;NO_AC_AC-HLK014-3701CB14_1;NO_AC_AC-HLK014-3702/3CB09;NO_AC_AC-HLK014-3702/3CB10;NO_AC_AC-HLK014-3702/3CB11;NO_AC_AC-HLK014-3702/3CB12;NO_AC_AC-HLK014-3702_1;NO_AC_AC-HLK014-3702CB01;NO_AC_AC-HLK014-3702CB14;NO_AC_AC-HLK014-3703_1;NO_AC_AC-HLK014-3703CB13;NO_AC_AC-HLK014-3710/2CB03;NO_AC_AC-HLK017-3701_1;NO_AC_AC-HRD400;NO_AC_AC-MOR222;NO_AC_AC-OSL800-3701_1;NO_AC_AC-OSL800-3701CB01_1;NO_AC_AC-OSL800-3701CB02_1;NO_AC_AC-OSL800-3701CB03_1;NO_AC_AC-OSL800-3701CB04_1;NO_AC_AC-OSL800-3701CB05_1;NO_AC_AC-OSL800-3701CB06_1;NO_AC_AC-OSL800-3702_1;NO_AC_AC-OSL800-3702CB01_1;NO_AC_AC-OSL800-3702CB02_1;NO_AC_AC-OSL800-3702CB03_1;NO_AC_AC-OSL800-3702CB04_1;NO_AC_AC-OSL800-3702CB05_1;NO_AC_AC-OSL800-3702CB06_1;NO_AC_AC-OSL900-3701_;NO_AC_AC-OSL900-3701CB01_1;NO_AC_AC-OSL900-3701CB02_1;NO_AC_AC-OSL900-3701CB03_1;NO_AC_AC-OSL900-3701CB04_1;NO_AC_AC-OSL900-3702_1;NO_AC_AC-OSL900-3702CB01_1;NO_AC_AC-OSL900-3702CB02_1;
#  NO_AC_AC-OSL900-3702CB03_1;NO_AC_AC-OSL900-3702CB04_1;NO_AC_AC-ROG100-3701_1;NO_AC_AC-STR300-3701_1;NO_AC_AC-STR300-3701CB01_1;NO_AC_AC-STR300-3701CB02_1;NO_AC_AC-STR300-3701CB03_1;NO_AC_AC-STR300-3701CB04_1;NO_AC_AC-STR300-3701CB05_1;NO_AC_AC-STR300-3702_1;NO_AC_AC-STR300-3702CB01_1;NO_AC_AC-STR300-3702CB02_1;NO_AC_AC-STR300-3702CB03_1;NO_AC_AC-STR300-3702CB04_1;NO_AC_AC-STR300-3702CB05_1;NO_AC_AC-TRM200;NO_AC_AC-VAD010;NO_AC_AC-VSF035-3701_1;NO_ACC_ACCC-AKH902-KORTLESE;NO_ACC_ACCC-OSL800-KORTLESE;NO_ACC_ACCC-OSL900-KORTLESE;NO_ACC_ACCC-ROG100-KORTLESE;NO_ACC_ACCC-STR300-KORTLESE;FI DNS ENUM;FI DNS Gi;FI DNS Gn;DK_AAA_AAA01DK;FI_99999_ID_MISSEDCI;FI_AAA_AAA01FI;FI_AAA_AAA02FI;FI_ActixOne;FI_AFG_AFG02FI;FI_AS_emk10-3krs-c2960-z3;FI_AS_emk8-3krs-c3560-z3;FI_AS_emk8-5krs-c2950-1;FI_AS_hkiswbe01;FI_AS_hkiswbe02;FI_AS_hkiswbe03;FI_AS_hkiswbe04;FI_AS_hkiswbr01;FI_AS_hkiswbr02;FI_AS_hkiswfe01;FI_AS_hkiswfe02;FI_AS_hkiswfe03;FI_AS_hkiswfe04;FI_AS_hkiswstp01;FI_AS_hkiswstp02;FI_AS_hkp-ak02-c2960-sw-1;
#  FI_AS_hkp-ak02-c2960-sw-2;FI_AS_hkp-ak03-c2970-sw-1;FI_AS_hkp-ak15-c2960-z1-1;FI_AS_hkp-ak15-c2960-z1-2;FI_AS_hkp-ak15-c3750-mmsc;FI_AS_hkp-ak15c3750mmscz1T;FI_AS_hkp-ak15-c4506-z1;FI_AS_hkp-ak15-c4506-z3;FI_AS_hkp-ak15-rno-sw-1;FI_AS_hkp-ak16-c4506-z1;FI_AS_hkp-ak16-c4506-z3;FI_AS_hkp-ak25-c2970-z1;FI_AS_hkp-mmsc-z1-3750;FI_AS_hkp-mmsc-z1-3750-new;FI_AS_hkpswbe01;FI_AS_hkpswbe02;FI_AS_hkpswbe03;FI_AS_hkpswbe04;FI_AS_hkpswfe01;FI_AS_hkpswfe02;FI_AS_hkpswfe03;FI_AS_hkpswfe04;FI_AS_hkp-yk25-c3750-z3;FI_AS_hml-123-c2611;FI_AS_hml-58-c2970-1;FI_AS_hml-58-c2970-2;FI_AS_jkl-124-c2960-1;FI_AS_jkl-138-c1720;FI_AS_jkl-138-c2960-z3;FI_AS_jkl-143-c1720;FI_AS_jkl-143-c2960-z3;FI_AS_jkl-2286-c1720;FI_AS_jkl-2286-c2960-z3;FI_AS_jkl-afg01fi-cps;FI_AS_kvl-41-c2611;FI_AS_lht-214-cxl-1;FI_AS_lht-214-cxl-2;FI_AS_lht-214-cxl-3;FI_AS_lht-214-cxl-4;FI_AS_lht-214-cxl-5;FI_AS_lht-214-rno-sw-1;FI_AS_lht-230-c3560-tswo-1;FI_AS_lht-230-c3560-tswo-2;FI_AS_lht-230-c4506-1;FI_AS_lht-236-c2611-1;FI_AS_lht-236-c4506-1;
#  FI_AS_lht-329-c3560-tswo-1;FI_AS_lht-329-c3560-tswo-2;FI_AS_olu-333-cxl-1;FI_AS_olu-333-cxl-2;FI_AS_stu-1krs-c3560-z3;FI_AS_stu-2krs-c2960-1;FI_AS_stug00;FI_AS_stu-testb-c3560-z3-2;FI_AS_stu-testbed-c2960-1;FI_AS_stu-testbed-c2960-2;FI_AS_stu-testbed-c2960-3;FI_AS_stu-testbed-c2960-z3;FI_AS_stu-testbed-c3560;FI_AS_stu-testbed-c3560-z3;FI_AS_tku-545-c2960-1;FI_AS_tku-545-rno-sw-1;FI_AS_tms-c2621-1-mvnet;FI_AS_tre-103-c2960-1;FI_AS_tre-103-c3560-z1;FI_AS_tre-114-c2960-z3-1;FI_AS_tre-114-c2960-z3-2;LT DNS SIP;LT_023A_ID_MISSEDCI;LT_2C964012_ID_MISSEDCI;LT_2C975011_ID_MISSEDCI;LT_2F180011_ID_MISSEDCI;LT_2F196011_ID_MISSEDCI;LT_2F198011_ID_MISSEDCI;LT_31CA_ID_MISSEDCI;LT_57FA_ID_MISSEDCI;lt_99999_ID_MISSEDCI;LT_AC_AC-KONDIC_001;LT_AC_AC-KONDIC_002;LT_AC_AC-KONDIC_003;LT_AC_AC-KONDIC_004;LT_AC_AC-KONDIC_005;LT_AC_AC-KONDIC_007;LT_AC_AC-KONDIC_008;LT_AC_AC-KONDIC_009;LT_AC_AC-KONDIC_010;LT_AC_AC-KONDIC_101;LT_AC_AC-KONDIC_102;LT_AC_AC-KONDIC_102_1;LT_AC_AC-KONDIC_102_2;LT_AC_AC-KONDIC_102_3;LT_AC_AC-KONDIC_103;
#  LT_AC_AC-KONDIC_103_1;LT_AC_AC-KONDIC_103_2;LT_AC_AC-KONDIC_103_3;LT_AC_AC-KONDIC_103_4;LT_AC_AC-KONDIC_103_5;LT_AC_AC-KONDIC_104;LT_AC_AC-KONDIC_104_1;LT_AC_AC-KONDIC_104_2;LT_AC_AC-KONDIC_105;LT_AC_AC-KONDIC_106;LT_AC_AC-KONDIC_106_1;LT_AC_AC-KONDIC_106_2;LT_AC_AC-KONDIC_106_3;LT_AC_AC-KONDIC_107;LT_AC_AC-KONDIC_108;LT_AC_AC-KONDIC_110_1;LT_AC_AC-KONDIC_110_2;LT_AC_AC-KONDIC_201;LT_AC_AC-KONDIC_202;LT_AC_AC-KONDIC_202_1;LT_AC_AC-KONDIC_202_2;LT_AC_AC-KONDIC_202_3;LT_AC_AC-KONDIC_202_4;LT_AC_AC-KONDIC_202_5;LT_AC_AC-KONDIC_202_6;LT_AC_AC-KONDIC_203;LT_AC_AC-KONDIC_203_1;LT_AC_AC-KONDIC_203_2;LT_AC_AC-KONDIC_203_3;LT_AC_AC-KONDIC_203_4;LT_AC_AC-KONDIC_203_5;LT_AC_AC-KONDIC_203_6;LT_AC_AC-KONDIC_203_7;LT_AC_AC-KONDIC_204;LT_AC_AC-KONDIC_205;LT_AC_AC-KONDIC_206;LT_AC_AC-KONDIC_207;LT_AC_AC-KONDIC_208;LT_AC_AC-KONDIC_209;LT_AC_AC-KONDIC_210;LT_AC_AC-KONDIC_3_1;LT_AC_AC-KONDIC_3_2;LT_AC_AC-KONDIC_51_1;LT_AC_AC-KONDIC_52_1;LT_AC_AC-KONDIC_52_2;LT_AC_AC-KONDIC_52_3;LT_AC_AC-KONDIC_53_1;LT_AC_AC-KONDIC_54_1;
#  LT_AC_AC-KONDIC_54_2;LT_AC_AC-KONDIC_610_1;LT_AC_AC-KONDIC_615_1;LT_AC_AC-KONDIC_615_2;LT_AC_AC-KONDIC_615_3;LT_AC_AC-KONDIC_615_4;LT_ActixOne;LT_AFG_AFG01LT;LT_AFG_AFG02LT;LT_AS_agr-cs-mui1;LT_AS_agr-cs-mui2;LT_AS_agr-ims-kn-tai1;LT_AS_agr-ims-kn-tai2;LT_AS_agr-ims-vl-mui1;LT_AS_agr-ims-vl-mui2;LT_AS_agr-ran-000a;LT_AS_agr-ran-000b;LT_AS_agr-ran-000c;LT_AS_agr-ran-038;LT_AS_agr-ran-045;LT_AS_agr-ran-047;One Workflow UAT;One Workflow Training;One Workflow System Test;One Workflow System Integration Test;One Workflow System Continuous Integration Test;One Workflow Reference System;One Workflow Production;One Workflow Pre Production;One Workflow Development;One Workflow Automation System Test;One Workflow Automation Development;test-in1a;Test Directory;Test New Production;TEST TEAM CENTER;TESTAS;TESTAPP;DK AWS DevToolsMaster;DK DNS External- STOP;DK email sender;dk gdpr purpose test;dk gdpr purpose;DK_AAA_AAA02DK|




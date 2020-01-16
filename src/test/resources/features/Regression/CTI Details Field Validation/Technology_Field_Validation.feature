@Technology_Validation

  Feature: Technology field validation
    Scenario: Technology field validation

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      And user clicks on CTI details under sections
#      Then user validates technology field availibility
      Then multiple statuses "Analogue Radio:Broadband:CORE:Digital Radio:DTTV:GSM:GSM1800:GSM1800|GSM900:GSM1800|UMTS2100:GSM900:GSM900|LTE1800|UMTS2100:GSM900|LTE2600|UMTS2100:GSM900|LTE800|UMTS900:GSM900|UMTS2100:GSM900|UMTS900:GSM901:LTE:LTE1800:LTE2100:LTE2600:LTE2600|UMTS2100:LTE700:LTE800:LTE800|UMTS900:LTE900:Radio:REP:ROUTER:UMTS:UMTS2100:UMTS2100|UMTS900:UMTS900:WLAN" should be available in "Technology" dropdown

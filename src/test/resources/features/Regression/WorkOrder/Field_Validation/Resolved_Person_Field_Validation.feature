@workorder_field_validation @workorder_Resolved_Person_field_validation

Feature:Work Order Resolved Person field validation
  Scenario: Work Order Resolved Person  validation

    Given user is on the OneWorkflow login page
    And user logs in with valid user and password
    Then user successfully logged in to OneWorkflow and agent console should be displayed
    When user clicks on create work order
    Then user switches to window 1
    When user verifies status is read only
    Then user validates ticket status as "New"
    When user enters title as "<title>"
    And user selects request type as "Maintenance" on work order page
    And user enters description as "Description"
    And user selects priority as "Info"
#    Then user selects assigned profile dropdown as "Acc Mob RAN Ericsson-SE"
    Then user selects assignment profile dropdown as "Acc Mob RAN Ericsson-SE"
#    And user enters "PLAZA" in assignee
    Then user clicks on save button


    And user clicks on Diagnosis tab
    And user clicks on CI search button
    Then user switches to frame
    And CI search tab should be opened
    And user selects Category as "Core"
    And user selects Type as "Mobile CS Core Network"
    Then user enters "FI_MGW_SMG03TRE" in the name+ field
    Then user clicks on search button on CI search window
    And user selects a CI from list
    And user selects impact level as "Degradation of Service"
    And user clicks on relate CI
    Then user closes warning message
    And user clicks on close button on CI search window
    And user waits
    And user clicks on Ack button
    Then user clicks on save button
#    And user changes status to "Cleared" on work order page
    Then user changes status to "Cleared" on work order page
   And User selects "Resolved Group" as dropdownValue and should see values for "notreadonly"

    |resolved group                                                    |resolved person dropdown values|
    |Access network:Mobile:RAN:Acc Mob RAN Ericsson-SE                 |agnebj:andegy:aniter:bokors:dgl578:kzz036:magnlu:magzey:mari58:matssn:peresj:robcar:robmak:sven27:tomben:(clear)|
    |VAS:Application Services                                          |bdw2222:caw8237:crm2090:dpy4386:jwe1358:mks1538:rgg6827:thk9453:yaw9469:(clear)                              |
    |VAS:IN Services:VAS IN CGW                                        |jabjer:lmx567:(clear)|
    |VAS:IN Services:VAS IN Entry                                      |jabjer:kzz036:lmx567:(clear)|
    |VAS:IN Services:VAS IN Managed Voice                              |jabjer:lmx567:(clear)|
    |VAS:IN Services:VAS IN Services KY&Cleanmail                      |helinma1:henrija1:tahvaju1:(clear)|
    |VAS:IN Services:VAS IN Services Meridix Hawkey                    |ewa647:fdy089:helinma1:lyytiee2:pahe12:raro08:(clear) |
    |VAS:IN Services:VAS IN Services NGIN CIVR                         |helinma1:kokkoto1:lyytiee2:ojalame1:putkoto1:wen2547:(clear)  |
    |VAS:IN Services:VAS IN Services NSEE                              |helinma1:henrija1:tahvaju1:(clear)    |
    |VAS:IN Services:VAS IN Services Other                             |helinma1:henrija1:kokkoto1:ojalame1:putkoto1:tahvaju1:wen2547:(clear)   |
    |VAS:IN Services:VAS IN Services SGW OCSC SIG                      |helinma1:henrija1:tahvaju1:(clear)   |
    |VAS:IN Services:VAS IN Services Touchpoint-DK                     |ewa647:fdy089:helinma1:lyytiee2:pahe12:raro08:(clear) |
    |VAS:IN Services:VAS IN Services Touchpoint-SE                     |andmal:ewa647:fdy089:helinma1:lyytiee2:pahe12:raro08:(clear)  |
    |VAS:IoT:IoT-operation                                             |ayf010:bqn7152:magehr:magfro:mija09:rofr01:salmioi2:scg451:(clear)    |
    |VAS:MAS:Linux:VAS MAS Linux                                       |alex00:jorlju:maan21:minorb:niah02:raj335:(clear)          |
    |VAS:MAS:Windows:VAS MAS Windows                                   |jlm284:kuf909:mafo50:niah02:tosm00:toto14:xz1074:xz1074:clear)          |
    |VAS:Messaging Services:VAS Messaging Linux                        |crm2090:jwe1358:mks1538:yaw9469:clear)          |
    |VAS:Messaging Services:VAS Messaging Windows                      |bdw2222:rgg6827:clear)          |
    |VAS:Mobile:Common:Development:Collaboration Solution-SE           |geshel:mikaja:clear)          |
    |VAS:Mobile:Enterprise:Com Solutions-SE                            |toka43:clear)          |
    |VAS:Mobile:IN Services:IN Services-Common                         |ewa647:helinma1:henrija1:kokkoto1:lyytiee2:oikarra1:ojalame1:pahe12:putkoto1:raro08:tahvaju1:wen2547:clear)          |
    |VAS:Mobile:Messaging:Messaging Operation-EE                       |ahto:erikki:teet.meesak:clear)          |
    |VAS:Mobile:Messaging:Messaging Services-Common                    |ahto:beho40:hosioma1.jan196:kengeb:larsei:lce447:magbol:mijo03:niskapa2:pesa40:rinnees1:stebla:ytu4896:clear)          |
    |VAS:Mobile:Service:112/114 DK                                     |alhe03:clda52:maal11:maal11:nilu39:thol13:clear)          |
    |VAS:Mobile:Service:3de Party Content-DK                           |gien01:kiha76:clear)          |
    |VAS:Mobile:Service:Core NW Development-Common                     |lappiar1:puukaka1:roca31:suontju1:clear)          |
    |VAS:Mobile:Service:IME-DK                                         |jeba10:thoost:clear)           |
    |VAS:Mobile:Service:IME-LT                                         |chma19:jeba10:pean32:thoost:clear)            |
    |VAS:Mobile:Service:IME-NO                                         |chma19:jeba10:pean32:thoost:clear)            |
    |VAS:Mobile:Service:Mobiz Link-DK                                  |alhe03:clda52:maal11:maal11:nilu39:thol13:clear)           |
    |VAS:Mobile:Service:Mobiz SP-DK                                    |alhe03:clda52:maal11:maal11:nilu39:thol13:clear)           |
    |VAS:Mobile:Service:Mobiz Status-DK                                |alhe03:clda52:maal11:maal11:nilu39:thol13:clear)          |
    |VAS:Mobile:Service:Policy manager-DK                              |hps3436:jeslar:samdav:clear)           |
    |VAS:Mobile:Service:Touchpoint Plus-DK                             |ewa647:fdy089:lyytiee2:pahe12:raro08:clear)           |
    |VAS:Mobile:Service:Touchpoint Soho-DK                             |alhe03:clda52:maal11:maal11:nilu39:thol13:clear)           |
    |VAS:Mobile:Service:UBP-DK                                         |pean32:clear)           |
    |VAS:Mobile:Service:UC miscellaneous-DK                            |alhe03:clda52:maal11:maal11:nilu39:thol13:clear)         |
    |VAS:Mobile:Service:VCDR-DK                                        |chma19:clear)           |
    |TV:Backend                                                        |(no entries in menu)           |
    |TV:Development                                                    |(no entries in menu)          |
    |TV:Playout                                                        |(no entries in menu)           |
    |Transmission:Mobile:Engineering:NW Transmission - ENG             |(no entries in menu)          |
    |Transmission:Mobile:Network:Deployment:Roll Out transmission -DK  |amq3848:arje53:dera00:dwa8122:fwz5659:gby3179:gyi3172:gzv6075:hdp4202:jeslar:kamo57:maro72:mxo8620:qdh8704:skn1832:syw8776:uma2626:clear)         |
    |Transmission:Mobile:Network:Deployment:Roll Out transmission Eltel-DK   |amq3848:arje53:dera00:dwa8122:fwz5659:gby3179:gyi3172:gzv6075:hdp4202:jeslar:kamo57:maro72:mxo8620:qdh8704:skn1832:syw8776:uma2626:clear          |
    |Transmission:Mobile:NW Transmission-NO                            |epk7989:flj9367:sgr1124:tty3378:ulwa09:clear)           |
    |Transmission:Mobile:Planning:NW Transmission -PLAN                |(no entries in menu)              |
    |Transmission:Mobile:Planning:NW Transmission-DK                   |jeku09:clear)           |
    |Transmission:Mobile:Radio Link:Planning:MW PLANNING CAPACITY-DK   |aldlmr:jeku09:kono87:nih4941:phpe00:thva04:clear)           |
    |Third Parties:Mobile:NOKIA_TTN_DK                                 |Nokia_TTN_DK:clear)           |
    |Third Parties:Mobile:Telenor Denmark                              |Tele2 Sweden:Telenor Denmark:clear)           |
    |Security service:SOC:SOC-Common-L1                                |(no entries in menu)    )           |
    |Security service:SOC:SOC-Common-L2                                |(no entries in menu)    )           |
    |Security service:SOC:SOC-Common-L3_SE                             |(no entries in menu)    )           |
    |Packet Transport:Mobile:Transport Mobile-Common                   |ciggok:erbj1825:erth05:ghza01:hokkaar1:kaso0449:kassisa1:kytolto1:onikkma1:riay00:ryur20:clear)           |
    |OSS Tech Mahindra                                                 |(no entries in menu)             |
    |OSS ADM CGI                                                       |(no entries in menu)           |
    |OSS:Distribution:OSS Distribution-Common                          |dbz4511:erj8534:jeer05:OSS-Dist:oven00:scd3910:scm304:scp596:scq9252:suurmma1:zbf0269:clear)           |
    |VAS:Mobile:Service:3de Party Content-DK                           |:::::::::::::::::::::clear)           |
    |VAS:Mobile:Service:3de Party Content-DK                           |:::::::::::::::::::::clear)           |
    |VAS:Mobile:Service:3de Party Content-DK                           |:::::::::::::::::::::clear)           |
    |VAS:Mobile:Service:3de Party Content-DK                           |:::::::::::::::::::::clear)           |
    |VAS:Mobile:Service:3de Party Content-DK                           |:::::::::::::::::::::clear)           |
    |VAS:Mobile:Service:3de Party Content-DK                           |:::::::::::::::::::::clear)           |
    |VAS:Mobile:Service:3de Party Content-DK                           |:::::::::::::::::::::clear)           |
    |VAS:Mobile:Service:3de Party Content-DK                           |:::::::::::::::::::::clear)           |


















  






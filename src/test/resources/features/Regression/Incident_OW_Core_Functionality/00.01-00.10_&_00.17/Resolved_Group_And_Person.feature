@Resolved_Group_And_Person

  Feature: Resolved Group And Person
    Scenario: Resolved Group And Person

      Given user is on the OneWorkflow login page
      When user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create trouble event
      And user switches to window 1
      Then trouble record form should appear in new tab
      And user clicks on sweden checkbox under affected BU's
      Then user enters title as "Test"
      And user selects request type as "Event"
      Then user enters description as "Test Description"
      And user clicks save button
      Then user clicks on Ack button
      And user validates ticket status as "Work In Progress"
      Then user changes status to "Cleared"
      And user clicks on closure under sections
#      Then user validates Resolved group availability
#     Then user validates Resolved person availability
      Then multiple values should be available in "Fault Position" dropdown
      And User selects "Resolved Group" as dropdownValue and should see values for "notreadonly"
      Then user selects "<resolved group>" and verifies resolved person dropdown values


      |resolved group                                                    |resolved person dropdown values|
      |Access network:Mobile:RAN:Acc Mob RAN Ericsson-SE                 |anbl04:anbr00:anek28:anla13:chel05:clasbe:dick00:erth04:fqr0174:frsa18:haat00:heni43:jono64:krist4:lennyb:makelmi4:matuhl:oao241:rfy065:taka01:thgi00 |
      |Access network:Mobile:RAN:Acc Mob RAN NSN-SE                      |anbl04:anbr00:anek28:anla13:chel05:clasbe:dick00:erth04:fqr0174:frsa18:haat00:heni43:jono64:krist4:lennyb:makelmi4:matuhl:oao241:rfy065:taka01:thgi00 |
      |Access network:Mobile:RAN:Common:Mobile Services-DS               |anbl04:anbr00:anek28:anla13:chel05:clasbe:dick00:erth04:fqr0174:frsa18:haat00:heni43:jono64:krist4:lennyb:makelmi4:matuhl:oao241:rfy065:taka01:thgi00 |
      |Access network:Mobile:RAN:Common:NW Radio Quality-NO              |ptl6229                                                                                                                                               |
      |Access network:Mobile:RAN:Common:RAN Customer Tickets SE          |chel05:dick00:thgi00                                                                                                                                  |
      |Access network:Mobile:RAN:Deployment:Rollout NO                   |                                                                                                                                                      |
      |Access network:Mobile:RAN:Deployment SE:NW Deployment Eltel-SE    |anderw:birros:helebe:many55:miti08:peha20:roho04:sci894:scm112:scs175:scw467                                                                          |
      |Access network:Mobile:RAN:Deployment SE:NW Deployment KPI Team-SE |helebe:many55:miti08:rogryl:roho04                                                                                                                    |
      |Access network:Mobile:RAN:Deployment SE:NW Deployment Netel-SE    |anderw:birros:chsu06:helebe:many55:mifo05:miti08:msal00:pegu23:peha20:roho04:sano13:sch840:sci894:scm112:scs175:scw467:tojo23                         |
      |Access network:Mobile:RAN:Deployment SE:NW Deployment Relacom-SE  |anderw:birros:consan:dwa8122:gorann:gzv6075:helebe:joli88:laengs:many55:meland:miti08:olhj00:peha20:pewi14:roho04:sca945:scd225:sci894:sck527:scm112:scs175:scw467:scy443:syw8776:thpa03:togu43:ulf127:uma2626 |
      |Access network:Mobile:RAN:Deployment SE:NW Deployment Scanmast-SE |anderw:birros:helebe:jane18:many55:mattli:miti08:patstr:peha20:roho04:sca041:scb816:scc846:scd332:sci111:sci894:sck785:scm112:scs175:sct776:scw467:scy707:scy922                                               |
      |Access network:Mobile:RAN:Deployment SE:NW Deployment Support-SE  |anderw:birros:helebe:many55:miti08:peha20:rogryl:roho04:sci894:scm112:scs175:scw467:scv513                                                                                                                     |
      |Access network:Mobile:RAN:Design:Design RAN&Core-SE               |agla05:erda07:jaan14:matr26:misp00:sci226                                                                                                                                                                      |
      |Access network:Mobile:RAN:Ericsson:RAN Ericsson-Common            |inp445:jyle00:lbw597:olan06:toha25:tojo43:tonvir                                                                                                                                                               |
      |Access network:Mobile:RAN:Huawei:RAN Huawei-Common                |autr30:daut02:mina09:nqk3164:ugj2436:vaku33:zkx6509                                                                                                                                                            |
      |Access network:Mobile:RAN:Mobile service-FLEN                     |ama1570:anba33:bbp0288:bqv7905:brba49:brp063:brv8778:cnt6071:dianle:gxr3460:hirvoma3:joanka:jono64:jooslo:kelloma1:korhoma5:kriskov:makelmi4:matuhl:ojalame1:peetkir:qom1048:ulg8156:upr7552:vaju00:vizm36:wtf0000:vzp5693 |
      |Access network:Mobile:RAN:NSN:RAN NSN-Common                      |jpu5400:kainuha1:korkean1:oksalti1:soderpe1:uio6452                                                                                                                                                                        |
      |Access network:Mobile:RAN:Planning:NW Planning Last Mile-SE       |chbe11:joed00:torflo                                                                                                                                                                                                       |
      |Access network:Mobile:RAN:Planning:NW RAN Deployment DK           |                                                                                                                                                                                                                           |
      |Access network:Mobile:RAN:Planning:RAN Engineering-Common         |arkv50:maso21:niwi06:olaahl:raassha1:rool64                                                                                                                                                                                |
      |Access network:Mobile:RAN:Planning:RAN Engineering-SE             |                                                                                                                                                                                                                           |
      |Access network:Mobile:RAN:RAN improve-Common                      |ayf010:jono64:kelloma1:krist4:lennyb:makelmi4:matuhl:mikmag:sabe02:ulg8156                                                                                                                                                 |
      |Access network:Mobile:Transmission:BtB Solution-DK                |gyi3172:mxo8620                                                                                                                                                                                                            |
      |Access network:Mobile:Transmission:MBH Design-DK                  |kono87:mxo8620                                                                                                                                                                                                             |
      |Access network:Mobile:Transmission:MBH Fiber-DK                   |mxo8620:phpe00                                                                                                                                                                                                             |
      |Access network:Mobile:Transmission:MBH Implementing-DK            |mxo8620:phpe00:qdh8704                                                                                                                                                                                                     |
      |Access network:Mobile:Transmission:MBH Main-DK                    |jeku09:kono87:mxo8620:phpe00                                                                                                                                                                                               |
      |Access network:Mobile:WIFI:Core support Wlan                      |anbr00:mikmag:sabe02:telu01                                                                                                                                                                                                |
      |Access network:Mobile:WLAN:Common                                 |RAN Telia Wifi                                                                                                                                                                                                             |
      |Access network:Mobile:WLAN:WLAN Agreement                         |mikmag:sabe02                                                                                                                                                                                                              |
      |Access network:Mobile:WLAN:WLAN Coverage                          |mikmag:sabe02                                                                                                                                                                                                              |
      |Access network:Mobile:WLAN:WLAN TG-EL                             |mikmag:sabe02                                                                                                                                                                                                              |
      |BSS:Billing:Amdocs-DK                                             |aspa05:beam62:bebi00:bpe6397:fata01:ggi9718:hega02:jeslar:jowe22:masc22:rqa2504:samdav:saya00:sce9995:scw3455:toni35:ulfboy:wko4106                                                                                        |
      |BSS:Billing:AOFokus-DK                                            |bebi00:laku05:masc72:sist44:thos04:vck6755                                                                                                                                                                                 |
      |BSS:Billing:Axapta-DK                                             |                                                                                                                                                                                                                           |
      |BSS:Billing:Bill Management-SE                                    |carbac:mias05:monino:ulli32                                                                                                                                                                                                |
      |BSS:Billing:Billing L2-FI                                         |ale8563:hnz4041:izp7595:mnp3209:scf349:scy8680:sfy1082:ysi4592                                                                                                                                                             |
      |BSS:Billing:Bruce/Rosetta                                         |ggi9718                                                                                                                                                                                                                    |
      |BSS:Billing:Bruce/Rosetta-DK                                      |bpe6397                                                                                                                                                                                                                    |
      |BSS:Billing:Charging & Rating-SE                                  |caro10:goha15:mael29:
@Resolved_Group_And_Persons

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
      And user selects request type as "Event" on trouble event page
      Then user enters description as "Test Description"
      And user clicks save button
      Then user clicks on Ack button
      And user validates ticket status as "Work In Progress"
      Then user changes status to "Cleared"
      And user selects resolved group as "Access network:Mobile:RAN:Acc Mob RAN Ericsson-SE"
      Then user selects resolved group and verifies resolved person dropdown values
      |resolved group                                                    |resolved person dropdown values|
      |Access network:Mobile:RAN:Acc Mob RAN Ericsson-SE                 |anbl04:anbr00:anek28:anla13:chel05:clasbe:dick00:erth04:fqr0174:frsa18:haat00:heni43:jono64:krist4:lennyb:makelmi4:matuhl:oao241:rfy065:taka01:thgi00 |
      |Access network:Mobile:RAN:Acc Mob RAN NSN-SE                      |anbl04:anbr00:anek28:anla13:chel05:clasbe:dick00:erth04:fqr0174:frsa18:haat00:heni43:jono64:krist4:lennyb:makelmi4:matuhl:oao241:rfy065:taka01:thgi00 |
      |Access network:Mobile:RAN:Common:Mobile Services-DS               |anbl04:anbr00:anek28:anla13:chel05:clasbe:dick00:erth04:fqr0174:frsa18:haat00:heni43:jono64:krist4:lennyb:makelmi4:matuhl:oao241:rfy065:taka01:thgi00 |
#      |Access network:Mobile:RAN:Common:NW Radio Quality-NO              |ptl6229                                                                                                                                               |
#      |Access network:Mobile:RAN:Common:RAN Customer Tickets SE          |chel05:dick00:thgi00                                                                                                                                  |
#      |Access network:Mobile:RAN:Deployment:Rollout NO                   |                                                                                                                                                      |
#      |Access network:Mobile:RAN:Deployment SE:NW Deployment Eltel-SE    |anderw:birros:helebe:many55:miti08:peha20:roho04:sci894:scm112:scs175:scw467                                                                          |
#      |Access network:Mobile:RAN:Deployment SE:NW Deployment KPI Team-SE |helebe:many55:miti08:rogryl:roho04                                                                                                                    |
#      |Access network:Mobile:RAN:Deployment SE:NW Deployment Netel-SE    |anderw:birros:chsu06:helebe:many55:mifo05:miti08:msal00:pegu23:peha20:roho04:sano13:sch840:sci894:scm112:scs175:scw467:tojo23                         |
#      |Access network:Mobile:RAN:Deployment SE:NW Deployment Relacom-SE  |anderw:birros:consan:dwa8122:gorann:gzv6075:helebe:joli88:laengs:many55:meland:miti08:olhj00:peha20:pewi14:roho04:sca945:scd225:sci894:sck527:scm112:scs175:scw467:scy443:syw8776:thpa03:togu43:ulf127:uma2626 |
#      |Access network:Mobile:RAN:Deployment SE:NW Deployment Scanmast-SE |anderw:birros:helebe:jane18:many55:mattli:miti08:patstr:peha20:roho04:sca041:scb816:scc846:scd332:sci111:sci894:sck785:scm112:scs175:sct776:scw467:scy707:scy922                                               |
#      |Access network:Mobile:RAN:Deployment SE:NW Deployment Support-SE  |anderw:birros:helebe:many55:miti08:peha20:rogryl:roho04:sci894:scm112:scs175:scw467:scv513                                                                                                                     |
#      |Access network:Mobile:RAN:Design:Design RAN&Core-SE               |agla05:erda07:jaan14:matr26:misp00:sci226                                                                                                                                                                      |
#      |Access network:Mobile:RAN:Ericsson:RAN Ericsson-Common            |inp445:jyle00:lbw597:olan06:toha25:tojo43:tonvir                                                                                                                                                               |
#      |Access network:Mobile:RAN:Huawei:RAN Huawei-Common                |autr30:daut02:mina09:nqk3164:ugj2436:vaku33:zkx6509                                                                                                                                                            |
#      |Access network:Mobile:RAN:Mobile service-FLEN                     |ama1570:anba33:bbp0288:bqv7905:brba49:brp063:brv8778:cnt6071:dianle:gxr3460:hirvoma3:joanka:jono64:jooslo:kelloma1:korhoma5:kriskov:makelmi4:matuhl:ojalame1:peetkir:qom1048:ulg8156:upr7552:vaju00:vizm36:wtf0000:vzp5693 |
#      |Access network:Mobile:RAN:NSN:RAN NSN-Common                      |jpu5400:kainuha1:korkean1:oksalti1:soderpe1:uio6452                                                                                                                                                                        |
#      |Access network:Mobile:RAN:Planning:NW Planning Last Mile-SE       |chbe11:joed00:torflo                                                                                                                                                                                                       |
#      |Access network:Mobile:RAN:Planning:NW RAN Deployment DK           |                                                                                                                                                                                                                           |
#      |Access network:Mobile:RAN:Planning:RAN Engineering-Common         |arkv50:maso21:niwi06:olaahl:raassha1:rool64                                                                                                                                                                                |
#      |Access network:Mobile:RAN:Planning:RAN Engineering-SE             |                                                                                                                                                                                                                           |
#      |Access network:Mobile:RAN:RAN improve-Common                      |ayf010:jono64:kelloma1:krist4:lennyb:makelmi4:matuhl:mikmag:sabe02:ulg8156                                                                                                                                                 |
#      |Access network:Mobile:Transmission:BtB Solution-DK                |gyi3172:mxo8620                                                                                                                                                                                                            |
#      |Access network:Mobile:Transmission:MBH Design-DK                  |kono87:mxo8620                                                                                                                                                                                                             |
#      |Access network:Mobile:Transmission:MBH Fiber-DK                   |mxo8620:phpe00                                                                                                                                                                                                             |
#      |Access network:Mobile:Transmission:MBH Implementing-DK            |mxo8620:phpe00:qdh8704                                                                                                                                                                                                     |
#      |Access network:Mobile:Transmission:MBH Main-DK                    |jeku09:kono87:mxo8620:phpe00                                                                                                                                                                                               |
#      |Access network:Mobile:WIFI:Core support Wlan                      |anbr00:mikmag:sabe02:telu01                                                                                                                                                                                                |
#      |Access network:Mobile:WLAN:Common                                 |RAN Telia Wifi                                                                                                                                                                                                             |
#      |Access network:Mobile:WLAN:WLAN Agreement                         |mikmag:sabe02                                                                                                                                                                                                              |
#      |Access network:Mobile:WLAN:WLAN Coverage                          |mikmag:sabe02                                                                                                                                                                                                              |
#      |Access network:Mobile:WLAN:WLAN TG-EL                             |mikmag:sabe02                                                                                                                                                                                                              |
#      |BSS:Billing:Amdocs-DK                                             |aspa05:beam62:bebi00:bpe6397:fata01:ggi9718:hega02:jeslar:jowe22:masc22:rqa2504:samdav:saya00:sce9995:scw3455:toni35:ulfboy:wko4106                                                                                        |
#      |BSS:Billing:AOFokus-DK                                            |bebi00:laku05:masc72:sist44:thos04:vck6755                                                                                                                                                                                 |
#      |BSS:Billing:Axapta-DK                                             |                                                                                                                                                                                                                           |
#      |BSS:Billing:Bill Management-SE                                    |carbac:mias05:monino:ulli32                                                                                                                                                                                                |
#      |BSS:Billing:Billing L2-FI                                         |ale8563:hnz4041:izp7595:mnp3209:scf349:scy8680:sfy1082:ysi4592                                                                                                                                                             |
#      |BSS:Billing:Bruce/Rosetta                                         |ggi9718                                                                                                                                                                                                                    |
#      |BSS:Billing:Bruce/Rosetta-DK                                      |bpe6397                                                                                                                                                                                                                    |
#      |BSS:Billing:Charging & Rating-SE                                  |caro10:goha15:mael29:magabr:mame42:mohe10:peab41:pebu40:sawe09:siwist                                                                                                                                                      |
#      |BSS:Billing:DK Tech IT Billing                                    |                                                                                                                                                                                                                           |
#      |BSS:Billing:DLG NaviBilling                                       |bpe6397                                                                                                                                                                                                                    |
#      |BSS:Billing:Focus Op-DK                                           |hehj55:samdav:saya00                                                                                                                                                                                                       |
#      |BSS:Billing:Fokus Finance Approve-DK                              |hehj55                                                                                                                                                                                                                     |
#      |BSS:Billing:Fokus Operations QA-DK                                |samdav:saya00                                                                                                                                                                                                              |
#      |BSS:Billing:Fokus Ops Business Approve-DK                         |chgr22:hehj55                                                                                                                                                                                                              |
#      |BSS:Billing:Fokus Price & Parameters-DK                           |beam62:gien01:hega02:hps3436:jowe22:rqa2504:samdav:saya00:uek5898:ulfboy:wko4106                                                                                                                                           |
#      |BSS:Billing:Fokus Test                                            |beam62                                                                                                                                                                                                                     |
#      |BSS:Billing:Foton-DK                                              |sist44:thos04:vck6755                                                                                                                                                                                                      |
#      |BSS:Billing:ICH-DK                                                |                                                                                                                                                                                                                           |
#      |BSS:Billing:Invoicing&Cust Interact-SE                            |anne30                                                                                                                                                                                                                     |
#      |BSS:Billing:KisbiGeneva Operations-DK                             |leu0570:stni08                                                                                                                                                                                                             |
#      |BSS:Billing:KisbiGeneva Price & Para-DK                           |leu0570:stni08                                                                                                                                                                                                             |
#      |BSS:Billing:KisbiGeneva-DK                                        |leu0570:stni08                                                                                                                                                                                                             |
#      |BSS:Billing:Mit Tele Navibilling-DK                               |bpe6397                                                                                                                                                                                                                    |
#      |BSS:Billing:Ninja-DK                                              |helead:jono64:mafo12:makelmi4:olan06:rism00:rogtro:scq9102:teli0780:tgo5483tmp:xjj2236                                                                                                                                     |
#      |BSS:Billing:OCS Operation-EE                                      |tanelr                                                                                                                                                                                                                     |
#      |BSS:Billing:OCS Operation-SE                                      |sca746:sci894:scv513                                                                                                                                                                                                       |
#      |BSS:Billing:Port&Bill -Common                                     |tomo40                                                                                                                                                                                                                     |
#      |BSS:Billing:Prepaid-FI                                            |ece4452:efj8842                                                                                                                                                                                                            |
#      |BSS:Billing:StateEvent-DK                                         |                                                                                                                                                                                                                           |
#      |BSS:Billing:VERO-DK                                               |wko4106                                                                                                                                                                                                                    |
#      |BSS:Channels:BSS Ch Vart Telia-SE                                 |anlu36:bnt979:bup931:cvt125:daf847:hvo135:obz674:sre331:sxf878:sxo332:vkd149:znj650                                                                                                                                        |
#      |BSS:Channels:Channels L2-FI                                       |saaripe4:scf349:scr0450:scy8680:scz6066:ylarajo2                                                                                                                                                                           |
#      |BSS:Channels:Omni Channels-SE                                     |beka40:jeju00:kryt00:stostm                                                                                                                                                                                                |
#      |BSS:Channels:Portal Channels L2-SE                                |dpx816:gtl540:jabe313:joth51:kjs888:pnf370:roho42:yur763                                                                                                                                                                   |
#      |BSS:CRM:CRM L2-FI                                                 |axk5653:blh4623:eko8707:ijp3569:kappima1:scf349:wyf1401:ysi4592:zpa4833:zzc119                                                                                                                                             |
#      |BSS:CRM:Cust & Order Mgmt -SE                                     |andmal:anett6:avq559:cast12:dju278:frth03:haka21:hanjac:lolu40:moni13:per161:stma00:svenyb:ucy714:yvothe                                                                                                                   |
#      |BSS:Data&Analytics:Data&Analytics L2-FI                           |bzg8904:gjz8313:hsq6518:mankipi1:rwp1034:scf349:ulg8156:urg2999:wxz9471                                                                                                                                                    |
#      |BSS:Etray-DK                                                      |                                                                                                                                                                                                                           |
#      |BSS:GDPR:GDPR Manager-DK                                          |joo4157:lost38:mzx4130:pqg9361:rwe850:ykc6874                                                                                                                                                                              |
#      |BSS:MicroServices:Microservice-DK                                 |fos8738:lost38:maja58:ptg5122:sist44:ykc6874:ypt2594                                                                                                                                                                       |
#      |BSS:NEO:NEO IT Awaiting BU-DK                                     |scc3127:scc9870:scg3176:scl6116:scn7285:scn8791:scs7162:scw3964:scv8577:uox7408:wak5028                                                                                                                                    |
#      |BSS:NEO:NEO IT DK Services-DK                                     |bkk4030:scc3127:sch4739:scm3622:scn8791:scs7162:scu3481:uox7408:wak5028                                                                                                                                                    |
#      |BSS:NEO:NEO IT Ninja-DK                                           |scc3127:scn8791:scs0574:scs7162:uox7408:wak5028                                                                                                                                                                            |
#      |BSS:NEO:NEO IT Tango/Copa-DK                                      |scc3127:scg3176:scn8791:sco8139:scs7162:sct8237:scy3744:wak5028                                                                                                                                                            |
#      |BSS:NEO:NEO IT-DK                                                 |bkk4030:scc3127:scc9870:scd5619:scg3176:sch4739:sci1912:scl5204:scl6116:scm3622:scn7285:scn8791:sco8139:scs7162:scs7819:sct8237:scu3481:scw3964:scv6970:scv8577:scx7074:scy3744:uox7408                                    |
#      |BSS:Online-DK                                                     |csc0356:cti1930:dach06:emv5158:ilz9397:jwk9578:krek04:Ick9803:msy4335:qxp4829:sael08:sio6842:vgo5352:wgs2311:wxc1258:zbn4976                                                                                               |
#      |BSS:Other:BSS COPE-DK                                             |jqi1422:nvt6660:qyh8218:sca720:scl300:scm632:scv976:tww6470:vjf0076:ykc6874:zgk8657                                                                                                                                        |
#      |BSS:Provisioning:Provisioning_EMANG-SE                            |Igrand:sca746                                                                                                                                                                                                              |
#      |BSS:Provisioning:Provisioning-SE                                  |ingbh1:kefo40                                                                                                                                                                                                              |
#      |BSS:Sales:Sales&Partner-SE                                        |andmal:jti114:kekass:pelu13:pelu25                                                                                                                                                                                         |
#      |Control Center:Improvement:SA Process Improvements                |annadt:antm00:mane03:stbe00                                                                                                                                                                                                |
#      |Control Center:Incident Manager                                   |daxe00:esv393:mri3193:mrp140:scj418:tokr1513                                                                                                                                                                               |
#      |Control Center:Monitoring:CC Fixed access-FI                      |agla05:bmb026:CC Fixed access-FI:ccn294:con587:ddo453:eib461:erdu01:eve697:gwj686:hvb315:jaan14:jhg899:jofr61:karbir:krsv10:labo10:ljj184:mane03:mar135:pefr51:pwn643:qaz982:qcw229:qhb776:ribe09:rme152:rofa05:rtv492:sco520:ssz668:tomolm:ttc194:zhg513:zhg513Test:zsk532 |
#      |Control Center:Monitoring:CC Fixed access-SE                      |agla05:bmb026:CC Fixed access-SE:ccn294:con587:ddo453:eib461:erdu01:eve697:gwj686:hvb315:jaan14:jhg889:jofr61:karbir:krsv10:labo10:ljj184:mane03:mar135:pefr51:pwn643:qaz982:qcw229:qhb776:ribe09:rme152:rofa05:rtv492:sco520:ssz668:tomolm:ttc194:zhg513:zhg513Test:zsk532 |
#      |Control Center:Monitoring:CC IP/TV                                |aoa424:auv185:doz788:hlw730:ieg961:krgu09:leka40:saz470:thom13:yys044                                                                                                                                                                                                       |
#      |Control Center:Monitoring:CC IT                                   |CC IT:eivo10:gix477:jmc744:jxb012:kean08:mvb902:petsac:pol711:rioh00:rolkaw:rsn436:vht443:yvj779:zha318:zmv157:zvq227                                                                                                                                                       |
#      |Control Center:Monitoring:CC Mob Core/IMS/Fixed Voice/IN          |anla54:birg44:bosols:CC MobCore/IMS/FixedVoice/IN:Change_Automation_4:Change_Automation_5:efy412:eot742:knc414:marp06:mawo15:miksan:rjk909:scy083:sokh00:susman:ulfjos                                                                                                      |
#      |Control Center:Monitoring:CC Mob&Access-Common                    |agla05:anba33:anbl04:anbr00:anek28:bbp0288:bmb026:bqv7905:brba49:brv8778:CC Mob&Access-Common:ccn294:chel05:chgr08:clasbe:cnt6071:con587:ddo453:dick00:eib461:erdu01:erth04:eve697:fmg706:fqr0174:gwj686:gxr3460:haat00:hala27:heni43:hirvoma3:hvb315:jaan14:jhg899:jofr61:jono64:karbir:kelloma1:korhoma5:krist4:krsv10:labo10:lennyb:ljj184:makelmi4:mamo67:mar135:maro81:matuhl:mikmag:oao241:ojalame1:pefr43:pefr51:pwn643:qaz982:qcw229:qhb776:qom1048:ribe09:rme152:rofa05:rtv492:scd332:sck785:sco520:scw467:scv513:sjx998:ssz668:telu01:tomolm:ttc194:ulg8156:upr7552:wtf0000:zhg513:zhg513Test:zsk532 |
#      |Control Center:Monitoring:CC Monitoring Management                |antm00:maro81:stbe00                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
#      |Control Center:Monitoring:CC WDM                                  |bti776:ivu5840:janele:mani77:mimo19:miwe04:togu00:xkp235                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
#      |Control Center:Monitoring:Not to be used:CC Monitor FM Connection Issue |krsv10:mane03:stbe00                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
#      |Control Center:Performance:CC Perf&Quality                              |daka03:lar210:pani07:Tohall_copy4:Tohall_copy5                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
#      |Control Center:Performance:CC Prod&proc                                 |annadt:atb720:azy127:bodj00:chkr06:chri55:egc610:henmi:mauh41:ncv487:orjbec:sbx149:thom18:zae878                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
#      |Core:Mobile:Core Production-Common                                      |bjmo11:blombol1:cani11:gronqan1:hakvit:hautame1:helund:hiltuha2:lautivi1:purolpi1:rozi22:rvg1533:saloma4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
#      |Core:Mobile:Mobile CS:Development:Development Voice-Common              |Change_Automation_4:Change_Automation_5:grgu1735:makelkl1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
#      |Core:Mobile:Mobile CS:Network Design Rejlers PRA-SE                     |agla05:erda07:jaan14:matr26:misp00:sci226                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
#      |Core:Mobile:Mobile CS:Voice&IMS EAST                                    |artevma1:atk2436:big7000:brp063:Change_Automation_4:Change_Automation_5:dianle:ffm5470:joanka:jooslo:jugr01:jukr02:kaarapa1:karjaes:karpppe2:kriskov:lbt3344:nho3022:niemihe1:nyberpe1:peetkir:psa8202:ramkbl:ruuttti1:vibo40:vibo47                                                                                                                                                                                                                                                                                                                                                                     |
#      |Core:Mobile:Mobile CS:Voice&IMS WEST                                    |brre83:Change_Automation_4:Change_Automation_5:chrbos:emar0548:ghogli:hqb155:iris00:jaha85:jorebe:klundv:lenfah:magcen:markub:mast1101:nini54:nrf2124:pwd314:qfd8033:tofr10:tompoh                                                                                                                                                                                                                                                                                                                                                                                                                       |
#      |Core:Mobile:Mobile IP:Mobile Core IP EAST                               |alhoto1:hautame1:hautato1:heikkju5:


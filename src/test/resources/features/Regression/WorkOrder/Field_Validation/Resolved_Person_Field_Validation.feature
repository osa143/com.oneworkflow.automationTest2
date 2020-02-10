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
    |Access network:Mobile:RAN:Acc Mob RAN Ericsson-SE                 |agnebj:andegy:aniter:bokors:dgl578:kzz036:magnlu:magzey:mari58:matssn:peresj:robcar:robmak:sven27:tomben:((clear)|
    |VAS:Application Services                                          |bdw2222:caw8237:crm2090:dpy4386:jwe1358:mks1538:rgg6827:thk9453:yaw9469:((clear)                              |
    |VAS:IN Services:VAS IN CGW                                        |jabjer:lmx567:((clear)|
    |VAS:IN Services:VAS IN Entry                                      |jabjer:kzz036:lmx567:((clear)|
    |VAS:IN Services:VAS IN Managed Voice                              |jabjer:lmx567:((clear)|
    |VAS:IN Services:VAS IN Services KY&Cleanmail                      |helinma1:henrija1:tahvaju1:((clear)|
    |VAS:IN Services:VAS IN Services Meridix Hawkey                    |ewa647:fdy089:helinma1:lyytiee2:pahe12:raro08:((clear) |
    |VAS:IN Services:VAS IN Services NGIN CIVR                         |helinma1:kokkoto1:lyytiee2:ojalame1:putkoto1:wen2547:((clear)  |
    |VAS:IN Services:VAS IN Services NSEE                              |helinma1:henrija1:tahvaju1:((clear)    |
    |VAS:IN Services:VAS IN Services Other                             |helinma1:henrija1:kokkoto1:ojalame1:putkoto1:tahvaju1:wen2547:((clear)   |
    |VAS:IN Services:VAS IN Services SGW OCSC SIG                      |helinma1:henrija1:tahvaju1:((clear)   |
    |VAS:IN Services:VAS IN Services Touchpoint-DK                     |ewa647:fdy089:helinma1:lyytiee2:pahe12:raro08:((clear) |
    |VAS:IN Services:VAS IN Services Touchpoint-SE                     |andmal:ewa647:fdy089:helinma1:lyytiee2:pahe12:raro08:((clear)  |
    |VAS:IoT:IoT-operation                                             |ayf010:bqn7152:magehr:magfro:mija09:rofr01:salmioi2:scg451:((clear)    |
    |VAS:MAS:Linux:VAS MAS Linux                                       |alex00:jorlju:maan21:minorb:niah02:raj335:((clear)          |
    |VAS:MAS:Windows:VAS MAS Windows                                   |jlm284:kuf909:mafo50:niah02:tosm00:toto14:xz1074:xz1074:((clear)          |
    |VAS:Messaging Services:VAS Messaging Linux                        |crm2090:jwe1358:mks1538:yaw9469:((clear)          |
    |VAS:Messaging Services:VAS Messaging Windows                      |bdw2222:rgg6827:((clear)          |
    |VAS:Mobile:Common:Development:Collaboration Solution-SE           |geshel:mikaja:((clear)          |
    |VAS:Mobile:Enterprise:Com Solutions-SE                            |toka43:((clear)          |
    |VAS:Mobile:IN Services:IN Services-Common                         |ewa647:helinma1:henrija1:kokkoto1:lyytiee2:oikarra1:ojalame1:pahe12:putkoto1:raro08:tahvaju1:wen2547:(clear)          |
    |VAS:Mobile:Messaging:Messaging Operation-EE                       |ahto:erikki:teet.meesak:(clear)          |
    |VAS:Mobile:Messaging:Messaging Services-Common                    |ahto:beho40:hosioma1.jan196:kengeb:larsei:lce447:magbol:mijo03:niskapa2:pesa40:rinnees1:stebla:ytu4896:(clear)          |
    |VAS:Mobile:Service:112/114 DK                                     |alhe03:clda52:maal11:maal11:nilu39:thol13:(clear)          |
    |VAS:Mobile:Service:3de Party Content-DK                           |gien01:kiha76:(clear)          |
    |VAS:Mobile:Service:Core NW Development-Common                     |lappiar1:puukaka1:roca31:suontju1:(clear)          |
    |VAS:Mobile:Service:IME-DK                                         |jeba10:thoost:(clear)           |
    |VAS:Mobile:Service:IME-LT                                         |chma19:jeba10:pean32:thoost:(clear)            |
    |VAS:Mobile:Service:IME-NO                                         |chma19:jeba10:pean32:thoost:(clear)            |
    |VAS:Mobile:Service:Mobiz Link-DK                                  |alhe03:clda52:maal11:maal11:nilu39:thol13:(clear)           |
    |VAS:Mobile:Service:Mobiz SP-DK                                    |alhe03:clda52:maal11:maal11:nilu39:thol13:(clear)           |
    |VAS:Mobile:Service:Mobiz Status-DK                                |alhe03:clda52:maal11:maal11:nilu39:thol13:(clear)          |
    |VAS:Mobile:Service:Policy manager-DK                              |hps3436:jeslar:samdav:(clear)           |
    |VAS:Mobile:Service:Touchpoint Plus-DK                             |ewa647:fdy089:lyytiee2:pahe12:raro08:(clear)           |
    |VAS:Mobile:Service:Touchpoint Soho-DK                             |alhe03:clda52:maal11:maal11:nilu39:thol13:(clear)           |
    |VAS:Mobile:Service:UBP-DK                                         |pean32:(clear)           |
    |VAS:Mobile:Service:UC miscellaneous-DK                            |alhe03:clda52:maal11:maal11:nilu39:thol13:(clear)         |
    |VAS:Mobile:Service:VCDR-DK                                        |chma19:(clear)           |
    |TV:TV 3CS                                                         |daiptr:elvrtl:hakolte1:holmbki2:jobo06:nii7547:(clear)           |
    |TV:Backend                                                        |bjha01:hakolte1:holmbki2::jobo06:nii7547:orjrod:paah00:thar02:(clear)           |
    |TV:Development                                                    |ajr532:dqr862:elz830:fkn471:fran40:frja44:gufage:ifq994:jfr246:nab114:osbo00:pimark:qww745:sojo25:zzf698:::::::clear         |
    |TV:TV Editorial-SE                                                |scg034:vyq630:(clear)         |
    |TV:Playout                                                        |jfa951:jonl04:juholmi1:niiraar1:petmed:pirkkja1:salonpe1:thomaz:turties1:ylihoju1:(clear))           |
    |Transmission:Mobile:Engineering:NW Transmission - ENG             |(no entries in menu)          |
    |Transmission:Mobile:NW Transmission-NO                            |epk7989:flj9367:sgr1124:tty3378:ulwa09:(clear)           |
    |Third Parties:Mobile:Cygate Sweden                                 |(no entries in menu)          |
    |Third Parties:Mobile:TIETO                                         |Tieto:(clear)         |
    |Third Parties:Mobile:SYV Finland                                   |(no entries in menu)         |
    |Third Parties:Mobile:NOKIA_TTN_DK                                 |Nokia_TTN_DK:(clear)           |
    |Third Parties:Mobile:Tele2 Sweden                                 |Tele2 Sweden:(clear)           |
    |Security service:SOC:SOC-Common-L1                                |(no entries in menu)    )           |
    |Security service:SOC:SOC-Common-L2                                |(no entries in menu)    )           |
    |Security service:SOC:SOC-Common-L3_SE                             |(no entries in menu)    )           |
#    |Problem Management:Problem Initiator                              |:::::::::::::::::::::(clear)           | //TODO Resolved Person list too long
    |Problem Management:Problem Management Office                      |cast09:chrsta:crlu00:gou259:joba52:mina09_auto:olbj04:rolfjo:saaripe4:stesla:stlonn:syvaptu1:then05:ylvwik:(clear)           |
#    |Problem Management:Problem Manager                              |:::::::::::::::::::::(clear)           | //TODO Resolved Person list too long
    |PLAZA                                                             |PLAZA:(clear)             |
    |Packet Transport:DNS:IP Registry                                  |lisw40:pebi40:xz1898:(clear)           |
    |Packet Transport:Fixed:CDN:Telia CDN                              |squ120:(clear)           |
    |Packet Transport:Mobile:Transport Mobile-Common                   |ciggok:erbj1825:erth05:ghza01:hokkaar1:kaso0449:kassisa1:kytolto1:onikkma1:riay00:ryur20:(clear)           |
    |OSS:Inventory:ADDM-Common                                         |janres:lisepe:soiniki1:(clear)|
    |OSS:Inventory:IT CMDB-Common                                      |janres:lisepe:soiniki1:(clear)   |
    |OSS:Monitoring:OSS Monitoring-Common                              |OSS-masc18:mato17:qru7635:rena17:scm2418:(clear)           |
    |OSS:Monitoring:OSS Distribution-Common:OSS Mon-TEMIP              |andj44:anen30:chga14:eka4650:eros10:joer18:mafo50:maho15:maho16:mcl765:nna7552:OSS Mon-TEMIP:paka18:qol463:robsaf:roge16:sce5858:scl400:scm602:scm914:scn7117:scy8333:tojo10:u_vanra2:u_vuoja2:u9029690:vaza00:xz1862:(clear)           |
    |OSS:Multiple:OSS ADM CGI                                          |(no entries in menu)              |
    |OSS:Multiple:OSS Tech Mahindra                                    |(no entries in menu)              |
    |OSS:NEMS:Ericsson:RAN Ericsson NEMS-Common                        |egn5648:lfp5717:miik00:stehak:thu4004:vie2288:(clear)           |
    |OSS:NEMS:Huawei:RAN Huawei NEMS-Common                            |eun5496:lfp5717:miik00:vie2288:(clear)           |
    |OSS:NEMS:NSN:RAN NSN NEMS-Common                                  |hany08:lfp5717:malj25:miik00:vaarijo1:vie2288:(clear)           |
    |OSS:NEMS:RAN Other NEMS-Common                                    |egn5648:hany08:lfp5717:malj25:miik00:stehak:thu4004:vaarijo1:vie2288:(clear)           |
    |OSS:Performance:OSS Perf Probing                                  |cmx3672:pxr748:ror7873:(clear)   |
    |OSS:Performance:OSS Perf-ENIQ                                     |kalu06:lasu42:mano21:nda412:scc623:scm021:stekol:xz2345:(clear)   |
    |OSS:OSS Performance-Common                                        |kalu06:lei131:peltohe2:pulkkar4:pxr748:ror7873:scc623:tomaoh:(clear)   |
    |OSS:Plan&Pres:OSS Data-Common                                     |dbz4511:dgl578:gpq896:gtx7367:gus621:oinonmi1:petaikr1:sce073:scg547:suurmma1:yfr939:ykh9095:(clear)   |
    |OSS:Plan&Pres:OSS Distribution-Common                             |dbz4511:dgl578:erj8534:exx763:jeer05:nqk1090:oven00:qru7635:scm304:scq9252:usw811:zbf0269:(clear)   |
    |OSS:Plan&Pres:OSS Optimization-Common                             |dgl578:gpq896:iqz346:nqk1090:oinonmi1:qru7635:sce073:scg547:yfr939:ykh9095:(clear)   |
    |OSS:Plan&Pres:OSS Planning-Common                                 |hyvarta1:oinonmi1:soiniki1:suurmma1:(clear)   |
    |OSS:Plan&Pres:OSS Presentation-Common                             |cajo01:then05:vesteti2:(clear)   |
    |OSS:Remote Access:OSS Netguard                                    |dgl578:iqz346:roge16:(clear)   |
    |OSS:Workflow:OW:OSS WF OW Assignment Profiles                     |lei100:pami06:(clear)   |
    |OSS:Workflow:OW:OSS Workflow-Common                               |alj189:alx539:dwk298:esv393:fhr501:savolha2:vanhajo1:viau01:(clear)   |
    |OSS:Workflow:OW_Support:OW_ANS                                    |(no entries in menu)    |
    |OSS:Workflow:SIA-common                                           |jcx7673:jukape1:savolha2:(clear)     |
    |OSS:Workflow:SIA-Tieto                                            |erj8534:scf1095:sirenpa1:u_ihasa2:u_tuoti1:usw811:yat707:zbf0269:(clear)     |
    |IT:Workplace:IT Workplace Operations                              |cch3384:dhz7428:gdx8337:kvl7117:nyb8343:rwr1284:uor3470:yht2112:yqq8115:(clear)   |
    |IT:Service:Core-NO                                                |char1030:esco1083:pebe1256:(clear)   |
    |IT:Service:NEO-NO                                                 |efy5446:hagu1198:hajo1199:ooj0584:qva2427:tebj8740:tin1359:(clear)   |
    |IT:Service:Service-NO                                             |guto0450:hws8972:ntf4928:pese1356:toav1787:(clear)   |
    |IT:Application:Billing-NO                                         |anhv0341:brfi8010:dala8014:frsk04:izt5785:josl8026:sch7153:stli15:svkn0156:tobj1039:voi1041:(clear)   |
    |IT:Server:Linux/Unix L2                                           |afk0396:ftj9047:gvv6534:hedcar:hhp9370:jeni19:pakarar1:pal121:riwa02:szt5297:(clear)   |
    |IT:Server:Linux/Windows L2                                        |gim9551:hedcar:igj787:mage48:mikekl:movi03:pal121:riwa02:tortro:u_karti1:vkk5315:wvh208:vyz6172:(clear)   |
    |IT:Security:Firewall L2                                           |akny00:baq667:cariax:chi534:geq7451:jerics:jopi40:maderi:scs206:ubg854:(clear)   |
    |IT:Security:Firewall L3                                           |aneott:baq667:geq7451:jopi40:maderi:matyde:qzj1939:tolu09:vti950:zoa2572:(clear)   |
    |IT:Security:FW Orchestration:IT Sec FW Orchestration              |akny00:eyj3278:tolu09:(clear)   |
    |IT:Security:IT Sec Firewall Auth MobilePAS                        |jxr5805:olopal:(clear)   |
    |IT:Security:PAM                                                   |aneott:jorgoh:ofo828:pal121:riwa02:(clear)   |
    |IT:Security:Proxy L2                                              |akny00:cariax:chi534:jerics:jopi40:jopi40:scs206:ubg854:(clear)   |
    |IT:Security:Proxy L3                                              |aneott:chi534:chi534:jopi40:maderi:matyde:qzj1939:tolu09:vti950:(clear)   |
    |IT:Security:Remote Access L2                                      |chi534:jerics:jorgoh:jorgoh:ofo828:tnoren:ulrost:(clear)   |
    |IT:Security:Remote Access L3                                      |aneott:jorgoh:ofo828:(clear)   |
    |IT:OSS:Keycom-FI                                                  |emr4257:svahnmi1:u9027258:(clear)   |
    |IT:OSS:Satellite-FI                                               |mattiar1:pakkato1:(clear)   |























  






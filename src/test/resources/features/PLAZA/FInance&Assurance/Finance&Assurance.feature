@Alpha2_etl_prod @Plaza
  Feature: Plaza Alpha ETL Prod form test
    Scenario Outline: user validates information sent to OW from Plaza

      Given user is on the Plaza login page
      When user enters username "testauto" and password as "test123" and clicks on login
      Then user should see the plaza home page
      Then user clicks on plaza portal
      When user clicks on "Facility Management"
      And user clicks on order
      And user clicks on IT Infrastructure dropdown
      And user clicks on "Application"
      When user clicks on Finance & Assurance
      Then user should see Finance & Assurance form
      #Then user selects "System Name in Haiti" as "Other"
      When user selects role dropdown as "Application Operation Engineer"
      And user enters "<Request>" in the request field
      And user selects system dropdown as "<System>"
      And user enters planned start time as current time
      And user enters planned end time as current time
      And user enters plaza description as "<Description>"
      And user enters additional comments as "<AdditionalComments>"
      Then user clicks on "Submit"
      And user gets plaza request id
      And user clicks on plaza request id
      Then user should see service request form
      When user opens new tab
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user selects search menu as "Open Search Form:Work Order"
      And user switches to window 2
      Then user enters plaza request id in the source id field
      And user clicks Search on ticket search
      Then user should see plaza ticket
      And user validates source field as "PLAZA"
      And user validates title field as "Service Request | Finance & Assurance"
      And user validates Finance & Assurance description same as plaza
      Then user clicks on owner under sections
      And user clicks on assignment under sections
      Then user validates owner profile as "PLAZA"
      And user validates owner as "PLAZA"
      And user should see assigned profile as "Assurance"
      Then user clicks on "Interested Parties" tab
      And user validates "PLAZA" is listed as an interested party
      When user clicks on Ack button
      And user changes status to "Cleared" on work order page
      And user enters AM status details as "Test"
      And user selects completion code as "Success"
      And user clicks on "Schedule" tab
      And user enters schedule end as current date
      Then user clicks on save button
      And user validates ticket status as "Cleared"
      When user changes status to "Closed" on work order page
      And user enters AM status details as " Test2"
      And user clicks on save button
      And user validates ticket status as "Closed"
      And user logsOut
      When user switches to window 1
      And user closes current tab
      When user switches to window 0
      And user clicks on main page refresh
      Then user validates plaza request has completed


      Examples:

       |Request           |System                           |Description           |AdditionalComments|
     |Test1 F&A/Request |addressmaster                           |Test1 F&A/Description |Test1 F&A/AC      |
#      |Test2 F&A/Request |alpha2 etl prod                         |Test2 F&A/Description |Test2 F&A/AC      |
#      |Test3 F&A/Request |alpha2 etl test                         |Test3 F&A/Description |Test3 F&A/AC      |
#      |Test4 F&A/Request |arkinet prod                            |Test4 F&A/Description |Test4 F&A/AC      |
#      |Test5 F&A/Request |ars platform                            |Test5 F&A/Description |Test5 F&A/AC      |
#      |Test6 F&A/Request |bi-ana                                  |Test6 F&A/Description |Test6 F&A/AC      |
#      |Test7 F&A/Request |BI-X                                    |Test7 F&A/Description |Test7 F&A/AC      |
#      |Test8 F&A/Request |BI-X Telia7/8                           |Test8 F&A/Description |Test8 F&A/AC      |
#      |Test9 F&A/Request |BI-X Telia9                             |Test9 F&A/Description |Test9 F&A/AC      |
#      |Test10 F&A/Request|bic                                     |Test10 F&A/Description|Test10 F&A/AC     |
#      |Test11 F&A/Request|BlueIce                                 |Test11 F&A/Description|Test11 F&A/AC     |
#      |Test12 F&A/Request|bols                                    |Test12 F&A/Description|Test12 F&A/AC     |
#      |Test13 F&A/Request|Boss                                    |Test13 F&A/Description|Test13 F&A/AC     |
#      |Test14 F&A/Request|carrier insight                         |Test14 F&A/Description|Test14 F&A/AC     |
#      |Test15 F&A/Request|clearinghouse tcn                       |Test15 F&A/Description|Test15 F&A/AC     |
#      |Test16 F&A/Request|clearinghouse txn                       |Test16 F&A/Description|Test16 F&A/AC     |
#      |Test17 F&A/Request|coco                                    |Test17 F&A/Description|Test17 F&A/AC     |
#      |Test18 F&A/Request|common ra                               |Test18 F&A/Description|Test18 F&A/AC     |
#      |Test19 F&A/Request|commonfds                               |Test19 F&A/Description|Test19 F&A/AC     |
#      |Test20 F&A/Request|commonfdstst                            |Test20 F&A/Description|Test20 F&A/AC     |
#      |Test21 F&A/Request|CRT                                     |Test21 F&A/Description|Test21 F&A/AC     |
#      |Test22 F&A/Request|csa                                     |Test22 F&A/Description|Test22 F&A/AC     |
#      |Test23 F&A/Request|DMP                                     |Test23 F&A/Description|Test23 F&A/AC     |
#      |Test24 F&A/Request|E2E Migration                           |Test24 F&A/Description|Test24 F&A/AC     |
#      |Test25 F&A/Request|event                                   |Test25 F&A/Description|Test25 F&A/AC     |
#      |Test26 F&A/Request|evy                                     |Test26 F&A/Description|Test26 F&A/AC     |
#      |Test27 F&A/Request|fasit                                   |Test27 F&A/Description|Test27 F&A/AC     |
#      |Test28 F&A/Request|fpp                                     |Test28 F&A/Description|Test28 F&A/AC     |
#      |Test29 F&A/Request|front office                            |Test29 F&A/Description|Test29 F&A/AC     |
#      |Test30 F&A/Request|General                                 |Test30 F&A/Description|Test30 F&A/AC     |
#      |Test31 F&A/Request|glu                                     |Test31 F&A/Description|Test31 F&A/AC     |
#      |Test32 F&A/Request|IFRS15                                  |Test32 F&A/Description|Test32 F&A/AC     |
#      |Test33 F&A/Request|intradoc                                |Test33 F&A/Description|Test33 F&A/AC     |
#      |Test34 F&A/Request|kundbild                                |Test34 F&A/Description|Test34 F&A/AC     |
#      |Test35 F&A/Request|Matrix                                  |Test35 F&A/Description|Test35 F&A/AC     |
#      |Test36 F&A/Request|mde                                     |Test36 F&A/Description|Test36 F&A/AC     |
#      |Test37 F&A/Request|natfraga                                |Test37 F&A/Description|Test37 F&A/AC     |
#      |Test38 F&A/Request|Netbase                                 |Test38 F&A/Description|Test38 F&A/AC     |
#      |Test39 F&A/Request|netbusiness web                         |Test39 F&A/Description|Test39 F&A/AC     |
#      |Test40 F&A/Request|netcheck prod                           |Test40 F&A/Description|Test40 F&A/AC     |
#      |Test41 F&A/Request|netcheck uat                            |Test41 F&A/Description|Test41 F&A/AC     |
#      |Test42 F&A/Request|netpro                                  |Test42 F&A/Description|Test42 F&A/AC     |
#      |Test43 F&A/Request|netstat                                 |Test43 F&A/Description|Test43 F&A/AC     |
#      |Test44 F&A/Request|nid/inca prod                           |Test44 F&A/Description|Test44 F&A/AC     |
#      |Test45 F&A/Request|nni                                     |Test45 F&A/Description|Test45 F&A/AC     |
#      |Test46 F&A/Request|nodprod                                 |Test46 F&A/Description|Test46 F&A/AC     |
#      |Test47 F&A/Request|one workflow                            |Test47 F&A/Description|Test47 F&A/AC     |
#      |Test48 F&A/Request|patra                                   |Test48 F&A/Description|Test48 F&A/AC     |
#      |Test49 F&A/Request|phelper                                 |Test49 F&A/Description|Test49 F&A/AC     |
#      |Test50 F&A/Request|planet                                  |Test50 F&A/Description|Test50 F&A/AC     |
      #|Test51 F&A/Request|Promis                                  |Test51 F&A/Description|Test51 F&A/AC     |
      #|Test52 F&A/Request|pt plus prod                            |Test52 F&A/Description|Test52 F&A/AC     |
      #|Test53 F&A/Request|RR2R                                    |Test53 F&A/Description|Test53 F&A/AC     |
      #|Test54 F&A/Request|Saida                                   |Test54 F&A/Description|Test54 F&A/AC     |
      #|Test55 F&A/Request|Secure@Source                           |Test55 F&A/Description|Test55 F&A/AC     |
     # |Test56 F&A/Request|servicedata prod                        |Test56 F&A/Description|Test56 F&A/AC     |
      #|Test57 F&A/Request|sinn                                    |Test57 F&A/Description|Test57 F&A/AC     |
      #|Test58 F&A/Request|sis                                     |Test58 F&A/Description|Test58 F&A/AC     |
      #|Test59 F&A/Request|skanova open source integration platform|Test59 F&A/Description|Test59 F&A/AC     |
      #|Test60 F&A/Request|staff                                   |Test60 F&A/Description|Test60 F&A/AC     |
      #|Test61 F&A/Request|tbb unix                                |Test61 F&A/Description|Test61 F&A/AC     |
      #|Test62 F&A/Request|tbis                                    |Test62 F&A/Description|Test62 F&A/AC     |
     # |Test63 F&A/Request|telsims                                 |Test63 F&A/Description|Test63 F&A/AC     |
#      |Test64 F&A/Request|tholbox beställ                         |Test64 F&A/Description|Test64 F&A/AC     |
#      |Test65 F&A/Request|tsic bim prod                           |Test65 F&A/Description|Test65 F&A/AC     |
#     |Test66 F&A/Request|vqms                                    |Test66 F&A/Description|Test66 F&A/AC     |
#      |Test67 F&A/Request|wanoverview prod                        |Test67 F&A/Description|Test67 F&A/AC     |
#      |Test68 F&A/Request|wikitsic prod                           |Test68 F&A/Description|Test68 F&A/AC     |
#      |Test69 F&A/Request|x-pris web txn                          |Test69 F&A/Description|Test69 F&A/AC     |
#

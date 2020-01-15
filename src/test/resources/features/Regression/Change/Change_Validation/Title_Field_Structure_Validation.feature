@changes @Title_Field_Structure_Validation
  #passed
  Feature: Validation of change Title field structure
    Scenario: Validation of change Title field structure
      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
      Then user switches to window 1
      Then change record page should be opened and Change form is displayed
      And User selects "Title" as dropdownValue and should see values for "notreadonly"




      | DropdownValue | DropdownValuesToBePresent|
      |IT:BSS         |Examples                  |
#      |IT:Carrier     |IT \| Carrier               |
      |IT:CIO:Data & Information Management         |IT \| CIO \| Data & Information Management             |
      |IT:CIO:Data & Information Management         |IT \| CIO \| IT Management             |
      |IT:CIO:Data & Information Management         |IT \| CIO \| Operational Governance             |
      |IT:CIO:Data & Information Management         |IT \| CIO \| Transformation Execution             |
      |IT:Customer Engagement Services:Billing         |IT \| CES \| Billing \| Bill Management:IT \| CES \| Billing \| IT \| CES \| Billing \| Charging & Rating:IT \| CES \| Billing \| Invoicing & Customer Interaction:IT \| CES \| Billing \| Mediation & Policy Manager             |
      |IT:Customer Engagement Services:Channels       | IT \| CES \| Channels \| Buy:IT \| CES \| Channels \| Context & Halebop:IT \| CES \| Channels \| Enterprise:IT \| CES \| Channels \| Get Started & Use:IT \| CES \| Channels \| Infra & Retail:IT \| CES \| Channels \| Platforms & Architecture:IT \| CES \| Channels \| Self Service & CO           |
      |IT:Customer Engagement Services:Customer, Sales Order Management       |IT \| CES \| Sales & Order \| Automation Services:IT \| CES \| Sales & Order \| Marketing & Sales:IT \| CES \| Sales & Order \| Mobile Services:IT \| CES \| Sales & Order \| Order Management:IT \| CES \| Sales & Order \| Unified Services|
      |IT:Customer Engagement Services:E2E Solutions       |IT \| CES \| E2E Solutions \| Release & Test Env Mgmnt:IT \| CES \| E2E Solutions \| Service Management:IT \| CES \| E2E Solutions \| Test Management                       |
      |IT:DK      |Billing                                      |
      |IT:DK      |Data Insight                                      |
      |IT:DK      |Integration                                      |
      |IT:DK      |Services (VAS)                                     |
      |IT:EE      |Billing                                      |
      |IT:EE      |Customer Care CRM                                      |
      |IT:EE      |Internal Applications                                      |
      |IT:EE      |Other                                      |
      |IT:EE      |Platform Service                                      |
      |IT:EE      |Provisioning                                      |
      |IT:EE      |Sales                                      |
      |IT:Enterprise Services:BI & Analytics       |IT \| ENT \| BI & Analytics|
      |IT:Enterprise Services:Enterprise Dev. & Support System      |IT \| ENT \| Development & Support System|
      |IT:Enterprise Services:Support & Provisioning Services       |IT \| ENT \| Support & Provisioning Services|
      |IT:Enterprise Services:Workplace Technologiess       |IT \| ENT \| Workplace Technologies|
      |IT:FI      |Billing & Mediation                                      |
      |IT:FI      |Claudia DevOps                                      |
      |IT:FI      |Comm&Collab                                      |
      |IT:FI      |Customer&Order Management                                      |
      |IT:FI      |Data & Analytics                                      |
      |IT:FI      |Email                                      |
      |IT:FI      |Genesys Contact Center                                      |
      |IT:FI      |IN                                      |
      |IT:FI      |Inventories & Workflows                                      |
      |IT:FI      |IoT                                      |
      |IT:FI      |Online & Sales                                      |
      |IT:FI      |Provisioning & Service Management                                      |
      |IT:FI      |VAS                                      |
      |IT:Group:SEO      |IoT & NB:TV:VAS Application Services:VAS Managed Services                                     |
      |IT:Mobile      |Billing                                      |
      |IT:Mobile      |BSS                                      |
      |IT:NO      |Customer Care & Sales                                    |
      |IT:NO      |Insight                                   |
      |IT:NO      |OCMC Systems                                  |
      |IT:NO      |Product & Production Mobile                                    |
      |IT:NO      |Tech Core Services                                   |
      |IT:NO      |Tech IT Charging and Billing                                   |
      |IT:NO      |Tech IT Digital Channels                                    |
      |IT:NO      | Tech IT Integration and OM                                   |
      |IT:NO      |Tech NW Transmission                                   |
      |IT      |Other                                   |
      |IT:Platforms & Infrastructure:Business Partner Services      |IT \| INF \| Business Partners \| Delivery:IT \| INF \| Business Partners \| Infrastructure                                     |
      |IT:Platforms & Infrastructure:Cloud and Platform Services     |IT \| INF \| Cloud & Platform \| Compute:IT \| INF \| Cloud & Platform \| Database:IT \| INF \| Cloud & Platform \| NFVI:IT \| INF \| Cloud & Platform \| Private Cloud:IT \| INF \| Cloud & Platform \| Public Cloud:IT \| INF \| Cloud & Platform \| Storage                                     |
      |IT:Platforms & Infrastructure:Digital Platform & Identity Mgmnt   |IT \| INF \| Digital Platform & IAM \| Automation:IT \| INF \| Digital Platform & IAM \| Connections:IT \| INF \| Digital Platform & IAM \| Customer IAM:IT \| INF \| Digital Platform & IAM \| Workforce IAM                          |
      |IT:Platforms & Infrastructure:Network Services   |IT \| INF \| Network \| Data Center Facilities:IT \| INF \| Network \| Data Center Networks:IT \| INF \| Network \| Functionalities & Security:IT \| INF \| Network \| Internal Networks                          |
      |IT:Product & Production Services:Assurance Services   |IT \| PRO \| Assurance \| Data Mediation & Acquistion:IT \| PRO \| Assurance \| Monitoring:IT \| PRO \| Assurance \| Presentation:IT \| PRO \| Assurance \| Workflow                          |
      |IT:Product & Production Services:Resources Management Services   | IT | PRO | Resources Management | City Networks:IT | PRO | Resources Management | Inventories:IT | PRO | Resources Management | Operations:IT | PRO | Resources Management | Planning:IT | PRO | Resources Management | Provisioning                         |



















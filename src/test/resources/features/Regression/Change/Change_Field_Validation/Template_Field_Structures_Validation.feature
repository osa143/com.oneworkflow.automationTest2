@changes @Template_Field_Structure_validation
#Incomplete steps

  Feature: Validation of change template field structure
    Scenario:Validation of change template field structure

      Given user is on the OneWorkflow login page
      And user logs in with valid user and password
      Then user successfully logged in to OneWorkflow and agent console should be displayed
      When user clicks on create change record
      Then user switches to window 1
      Then change record page should be opened and Change form is displayed
      And User selects "Template" as dropdownValue and should see values for "readonly"




      | DropdownValue | DropdownValuesToBePresent|
      |All:IT:Carrier |Telia Carrier PROD and UAT Database Changes:Telia Carrier UAT Changes|
      |All:IT:CES \| Billing \| Invoicing & Customer Interaction |BDL Std change|
      |All:IT:CES \| Channels \| Platforms & Architecture        |Installation Agora-TSE|
      |All:IT:DK \| Data Insight        |Deploy to AWS|
      |All:IT:FI \| Online & Sales       |New Feature or User Story to AccessManager:New Feature or User Story to Billarchive:New Feature or User Story to Omat Sivut:New Feature or User Story to Selleri:New Feature or User Story to Sokudo:New Feature or User Story to Säilä|
      |All:IT:FI \| Provisioning & Service Management|OSS application parameter change                                                                                                                                                                                           |
      |All:IT:FI \| VAS|Viprion security patch                                                                                                                                                                                           |
      |All:IT:Group \| SEO \| TV|Telia Play Standard Change                                                                      |
      |All:IT:INF \| Digital Platform & IAM \| Connections|GESB-SWE-BW                                                           |
      |All:IT:INF \| Network \| Data Center Networks      |Routing and Switching                                                 |
      |All:IT:INF \| Network \| Functionalities & Security|Firewall Orchestration Platform                                       |
      |All:IT:INF \| Network \| Internal Networks|Implemenation of configuration changes in ManageLan Equipment:Implemenation of configuration changes in ManageLan Equipment                                       |
      |All:IT:CES \| Billing \| Mediation & Policy Manager |Charging Mediation Sweden|
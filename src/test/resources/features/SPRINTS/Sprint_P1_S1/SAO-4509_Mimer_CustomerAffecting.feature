@SAO-4509_CustomerAffectingField
  #You wont be able to automate this

  Feature: Fault management system notifies One Workflow of customer affecting alarms
    Scenario: Fault management system notifies One Workflow of customer affecting alarms

    #TEMIP
#    *CreateIncidentInbound*
      Given user has access to TeMIP system
      When user sends an alarm towards TeMIP
      And user searches for the alarm and creates a ticket from alarm (or gets rage created ticket ID)
      Then user Logs into OW using valid username/password
      And user searches for TeMIP created ticket on Interface form: BMC.CORE:3ABMC_BaseElement
      And user validates customer affecting field is present
      And user stores ticket ID for next update test
#    *UpdateIncidentInbound*
      Given user has stored ticket ID
      When user modifies alarm information from TeMIP and sends towards OWThen user searches for ticket on interface form:   *  BMC.CORE:3ABMC_BaseElement
      And user validates customer affecting field is present
      And user stores ticket ID for Append test
#    *AppendAlarmInbound*
      Given user has stored ticket ID
      When user appends alarm to existing OW ticket from TeMIP
      And user searches for ticket on interface form
      Then user validates Customer affecting field is present
      And user clears alarms in OW
      When user changes status to cleared
      And user enters closure code details
      And user clears CI impact
      Then user saves ticket
      When user changes status to closed
      And user enters remaining mandatory fields
      And user saves ticket
      Then ticket should be saved and closed
      #TRUESIGHT#
#    *CreateIncidentInbound*
      Given user has access to TrueSight system
      When user sends an alarm towards TrueSight
      And user searches for the alarm and creates a ticket from alarm (or gets rage created ticket ID)
      Then user Logs into OW using valid username/password
      And user searches for TrueSight created ticket on interface form: BMC.CORE:3ABMC_BaseElement
      And user validates customer affecting field is present
      And user stores ticket ID

#    *UpdateIncidentInbound*
      Given user has stored ticket ID
      When user modifies alarm information from TrueSight and sends towards OWThen user searches for ticket on interface form: BMC.CORE:3ABMC_BaseElement
      And user validates customer affecting field is present
      And user stores ticket ID for Append test
      And user clears alarms in OW
      When user changes status to cleared
      And user enters closure code details
      And user clears CI impact
      Then user saves ticket
      When user changes status to closed
      And user enters remaining mandatory fields
      And user saves ticket
      Then ticket should be saved and closed
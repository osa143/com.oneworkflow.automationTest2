@SAO_6040

#CI Qualification:
#'Fld-CI-Item'= "LTECell"OR 'Fld-CI-Item'= "GSMCell" OR 'Fld-CI-Item'= "UMTSCell" OR 'Fld-CI-Item'= "NRCell"
#Change Record Qualification:
#('Fld-RequestStatus' = "Scheduled" OR 'Fld-RequestStatus' = "Approved" OR 'Fld-RequestStatus' = "Schedule Requested" OR 'Fld-RequestStatus' = "Implementation" OR 'Fld-RequestStatus' = "Completed") AND ('Fld-RequestedStart' < ($TIMESTAMP$ - 86400) AND 'Fld-RequestedEnd'> $TIMESTAMP$ )

  Feature: One Workflow should send a list of change requests to Helix
    Scenario: One Workflow should send a list of change requests to Helix

      Given user is on the OneWorkflow login page
      When user logs in with valid change user
      And user clicks on create change record
      Then user should see blank change record create form
      And user creates change ticket and enters ticket information (Event start < 86400 seconds as per qualification)
      Then user adds CIs that are within the qualification
      And user answers all risk questions
      Then user processes change request to any of the status' within the qualification
      And user validates change request is sent to helix






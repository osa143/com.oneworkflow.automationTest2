@SAO_4873
  #can be run from B2B regression tests after modifying CI's
Feature: Plaza creation of incident ticket
#Scenario 1: Change The address, Municipality or county

#Given user logs in to One workflow with admin user rights
#When user navigate to  https://td777lb-mtint.ddc.teliasonera.net/arsys/forms/td777lb-ars/TS%3AOS3%3AB2B_LocationCode/
#And enter muncipality as 37784 and click search
#And change the county Harju to HarjuTest and save
#Given user creates a work order
#Then user adds a CI- EE_LTECell_AABLAK2 ( where county is HarjuTest)
#And user sends work order to B2B
#Then error message "The Site EE_Site_ALAKY with Region Harju and Municipality Tallinn doesn’t have a code in form TS:OS3:B2B_LocationCode which would cause a failure in the B2B integration. (ARERR 148732)"
#Then user send work order to B2B
#And work order successfully sent to B2B.
#When user changes back county as Harju  and click save
#And user creates new work order, adds CI and send WO to B2B
#Then work order should be sent to B2B, we should see outbound notification.


#Scenario 2:  Modify CI cell details

#Given user logs in to One workflow with admin user rights
#When user have two cell CI's for example SE_LTECell_100895010, FI_LTECell_Valpe4H.
#And user navigates to https://td777lb-mtint.ddc.teliasonera.net/arsys/forms/td777lb-ars/SMIT.SID.RESOURCE%3ASID_Equipment
#And search for the CI- SE_LTECell_100895010 and renames it as FI_LTECell_Valpe4H  and clicks save button
#Then CI should be renamed successfully
#When user creates a work order
#And user searches for CI  FI_LTECell_Valpe4H and selects recently renamed CI and adds to WO
#And user clicks apply B2B button, selects SLA class, enter header  and message
#And user clicks save button
#Then Error message should be displayed as "The CI FI_LTECell_Valpe4H atttached to this Work Order has a duplicate on CMDB which would cause a failure in the B2B integration. (ARERR 2147483647)"
#When user renames  FI_LTECell_Valpe4H to SE_LTECell_100895010
#And creates work order and add CI and send work order to B2B
#Then work order should be sent successfully to B2B


#Scenario 3: Modify CI network node details

#Given user logs in to One workflow with admin user rights
#When user have two network node CI's for example SE_eNodeB_Ålidhem M11,  SE_eNodeB_Yttervik.
#And user navigates to  https://td777lb-mtint.ddc.teliasonera.net/arsys/forms/td777lb-ars/SMIT.SID.RESOURCE%3AOS3_NetworkNode
#And search for the CI- SE_eNodeB_Ålidhem M11 and renames it as SE_eNodeB_Yttervik  and clicks save button
#Then CI should be renamed successfully
#When user creates a work order
#And user searches for CI  SE_eNodeB_Yttervik and selects recently renamed CI and adds to WO
#And user clicks apply B2B button, selects SLA class, enter header  and message
#And user clicks save button
#Then Error message should be displayed as "The CI SE_eNodeB_Yttervik atttached to this Work Order has a duplicate on CMDB which would cause a failure in the B2B integration. (ARERR 2147483647)"
#When user renames SE_eNodeB_Yttervik to SE_eNodeB_Ålidhem M11
#And creates work order and add CI and send work order to B2B
#Then work order should be sent successfully to B2B
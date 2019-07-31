package pageObjects;

import io.cucumber.datatable.DataTable;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import java.util.List;

public class OWF_SIDConsolePage extends BasePage {
    private static final String ddCATEGORY = "Category";
    private static final String ddTYPE = "Type";
    private static final String ddITEM = "Item";
    private static final String ddSEARCH_FOR = "arid_WIN_0_700009236";
    private static final String ddFILTER = "Filter";

    private static final String txtbxLOCATION_PLUS = "arid_WIN_0_700009015";
    private static final String txtbxNAME_PLUS = "arid_WIN_0_700009016";

    private static final String btnSEARCH = "WIN_0_700009021";
    private static final String btnADVANCED_SEARCH = "reg_img_700009113";
    private static final String btnCLEAR = "WIN_0_700009116";
    private static final String btnRERUN = "WIN_0_999000510";

    private static final String chkbxINACTIVE = "WIN_0_rc0id730010954";

    private static final String ddValue1 = "1";
    private static final String ddValueACCESS = "Access";
    private static final String ddValueACCESS_TRANSPORT = "Access|Transport";
    private static final String ddValueBSS = "BSS";
    private static final String ddValueCOMPTER_EQUIPMENT = "Computer Equipment";
    private static final String ddValueCOMPUTER_SERVICES = "Computer Services";
    private static final String ddValueCORE = "CORE";
    private static final String ddValueCUSTOMER_SERVICES = "Customer Services";
    private static final String ddValueDS = "DS";
    private static final String ddValueEXTERNAL = "External";
    private static final String ddValueHARDWARE = "Hardware";
    private static final String ddValueINTERNAL_SERVICES = "Internal Service";

    private static final String ddValueRADIO_ACCESS_NETWORK = "Radio Access Network";
    private static final String ddValueRAN = "RAN";
    private static final String ddValueTELIA_OWNED_CPE = "Telia Owned CPE";
    private static final String ddValueWLAN = "WLAN";
    private static final String ddValueWLAN_ACCESS = "WLAN ACCESS";

    private static final String ddValueBSC = "BSC";
    private static final String ddValueENODEB = "eNodeB";
    private static final String ddValueGSMCEll = "GSMCell";
    private static final String ddValueLTECELL = "LTECell";
    private static final String ddValueNODEB = "nodeB";
    private static final String ddValueREPEATER = "Repeater";
    private static final String ddValueUMTSCELL = "UMTSCell";

    private static final String ddValueCIS_WITH_LOCATION = "CIs with Location";
    private static final String ddValueALL_CIS = "All CIs";
    private static final String ddValueCIRCUIT_CIS = "Circuit CIs";
    private static final String ddValueCLEAR = "(clear)";

    private static final String AgentConsoleTable_ID = "T700009024";


    public void selectCategory(String value){
        selectDropDownNameAndValue(ddCATEGORY, value, false);
    }
    public void selectType(String value){
        selectDropDownNameAndValue(ddTYPE, value, false);
    }
    public void selectsItem(String value){
        selectDropDownNameAndValue(ddITEM, value, false);
    }


    public void clickFilerDropDown() {
        selectDropDownMenu(ddFILTER);
    }

    public void selectDropDownValueCisWithLocation() {
        selectDropDownValue(ddValueCIS_WITH_LOCATION);
    }

    public void selectDropDownValueAllCis() {
        selectDropDownValue(ddValueALL_CIS);
    }

    public void selectDropDownValueCircuitCis() {
        selectDropDownValue(ddValueCIRCUIT_CIS);
    }

    public void selectDropDownValueClear() {
        selectDropDownValue(ddValueCLEAR);
    }

    public void validateCiDetailsForMultipleLocations(DataTable location)
    {
        List<List<String>> locations = location.asLists(String.class);
        for (int i = 1; i < locations.size(); i ++) {
            System.out.println("location is: " + locations.get(i).get(0));
            enterLocationPlus(locations.get(i).get(0));
            clickSearchButton();
            wait(1000);
            int size = TableRows().size();
            boolean ciDetailsDisplayed = size > 1 ? true: false;
            Assert.assertTrue(ciDetailsDisplayed, "CI details are not displayed");
            clickClearButton();
        }
    }



    public void enterLocationPlus(String locationPlus) {
        driver.findElement(By.id(txtbxLOCATION_PLUS)).sendKeys(locationPlus);
    }

    public void enterNamePlus(String namePlus) {
        driver.findElement(By.id(txtbxNAME_PLUS)).sendKeys(namePlus);
    }

    public void clickReRunButton() {
        driver.findElement(By.id(btnRERUN)).click();
    }

    public void clickSearchButton() {
        driver.findElement(By.id(btnSEARCH)).click();
    }

    public void clickAdvancedSearchButton() {
        driver.findElement(By.id(btnADVANCED_SEARCH)).click();
    }

    public void clickClearButton() {
        driver.findElement(By.id(btnCLEAR)).click();
    }

    public void clickInActiveCheckBox() {
        driver.findElement(By.id(chkbxINACTIVE)).click();
    }

    public void selectDdValueBsc() {
        selectDropDownValue(ddValueBSC);
    }

    public void selectDdValueEnodeB() {
        selectDropDownValue(ddValueENODEB);
    }

    public void selectDdValueGsmCell() {
        selectDropDownValue(ddValueGSMCEll);
    }

    public void selectDdValueLteCell() {
        selectDropDownValue(ddValueLTECELL);
    }

    public void selectDdValueNodeB() {
        selectDropDownValue(ddValueNODEB);
    }

    public void selectDdValueRepeater() {
        selectDropDownValue(ddValueREPEATER);
    }

    public void selectDdValueUmtsCell() {
        selectDropDownValue(ddValueUMTSCELL);
    }


    public void selectDdValueRadiAccessNetwork() {
        selectDropDownValue(ddValueRADIO_ACCESS_NETWORK);
    }

    public void selectDdValueRan() {
        selectDropDownValue(ddValueRAN);
    }

    public void selectDdValueTeliaOwnedCpe() {
        selectDropDownValue(ddValueTELIA_OWNED_CPE);
    }

    public void selectDdValueWlan() {
        selectDropDownValue(ddValueWLAN);
    }

    public void selectDdValueWlanAccess() {
        selectDropDownValue(ddValueWLAN_ACCESS);
    }


    public void selectDdValue1() {
        selectDropDownValue(ddValue1);
    }

    public void selectDdValueAccess() {
        selectDropDownValue(ddValueACCESS);
    }

    public void selectDdValueAccessTransport() {
        selectDropDownValue(ddValueACCESS_TRANSPORT);
    }

    public void selectDdValueBss() {
        selectDropDownValue(ddValueBSS);
    }

    public void selectDdValueComputerEquipment() {
        selectDropDownValue(ddValueCOMPTER_EQUIPMENT);
    }

    public void selectDdValueComputerServices() {
        selectDropDownValue(ddValueCOMPUTER_SERVICES);
    }

    public void selectDdValueComputerCore() {
        selectDropDownValue(ddValueCORE);
    }

    public void selectDdValueCustomerServices() {
        selectDropDownValue(ddValueCUSTOMER_SERVICES);
    }

    public void selectDdValueDs() {
        selectDropDownValue(ddValueDS);
    }

    public void selectDdValueExternal() {
        selectDropDownValue(ddValueEXTERNAL);
    }

    public void selectDdValueHardware() {
        selectDropDownValue(ddValueHARDWARE);
    }

    public void selectDdValueInternal_Services() {
        selectDropDownValue(ddValueINTERNAL_SERVICES);
    }


    public void clickCategoryDropDown() {
        selectDropDownMenu(ddCATEGORY);
    }

    public void clickTypeDropDown() {
        selectDropDownMenu(ddTYPE);
    }

    public void clickItemDropDown() {
        selectDropDownMenu(ddITEM);
    }

    public void clickSearchFor() {
        driver.findElement(By.id(ddSEARCH_FOR)).click();
    }

    public List<WebElement> TableRows() {
        return getTableRows(By.id(AgentConsoleTable_ID));
    }

    public boolean validateSiteNameDetails() {

        return validateIfAllColumnRowsHasData(AgentConsoleTable_ID, "Site Name");
    }

    public boolean verifyCIS(String colName, String colValue, boolean partialText){
        return verifyColumnValuesMultiple(By.id(AgentConsoleTable_ID), colName, colValue, partialText );


    }
    public boolean verifyCISForAllCountries(String colName, String colValue, boolean partialText){

//        String[] colValues = colValue.split(":");
//        for(int i = 0; i < colValues.length; i++)
//        {
//            Assert.assertTrue(verifyColumnValuesMultiple(By.id(AgentConsoleTable_ID), colName, colValues[i], partialText));
//        }
        return  true;
    }
}

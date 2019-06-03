package pageObjects;

import org.openqa.selenium.By;

public class OWF_CiSearchPage extends BasePage {

    private static final String btnRELATE_CI = "WIN_0_700009085";
    private static final String btnClOSE = "WIN_0_777000001";
    private static final String btnCLEAR = "WIN_0_700009116";
    private static final String btnCI_SEARCH = "WIN_0_700009021";

    private static final String ddLEVEL = "Level";
    private static final String ddSEARCH_FOR = "arid_WIN_0_700009236";

    private static final String ddValueALL_CIS = "All CIs";

    private static final String ddValueDEGRADATION_OF_SERVICES = "Degradation of Service";
    private static final String ddValueLOSS_OF_SERVICE = "Loss of Service";
    private static final String ddValueNO_IMPACT = "No Impact";
    private static final String ddValueCLEAR = "(clear)";

    private static final String chkbxTO_SELECT_CI = "//input[class='colcheck']";

    private static final String txtNAME_PLUS = "arid_WIN_0_700009016";


    public void acceptAlert() {
        driver.switchTo().alert().accept();
    }

    public void enterNamePlus(String name_plus) {
        driver.findElement(By.xpath(txtNAME_PLUS)).sendKeys(name_plus);
    }

    public void clickSearchForDropdown() {
        driver.findElement(By.id(ddSEARCH_FOR)).click();
    }

    public void selectAllCiDdValue() {
        selectDropDownValue(ddValueALL_CIS);
    }

    public void clickCiSearchButton() {
        driver.findElement(By.id(btnCI_SEARCH)).click();
    }

    public void clickCloseButton() {
        driver.findElement(By.id(btnClOSE)).click();
    }

    public void clickClearButton() {
        driver.findElement(By.id(btnCLEAR)).click();
    }

    public void clickLevelDropdown() {
        selectDropDownMenu(ddLEVEL);
    }

    public void selectDegradationOfServiceDropdownValue() {
        selectDropDownValue(ddValueDEGRADATION_OF_SERVICES);
    }

    public void selectLossOfServiceDropdownVale() {
        selectDropDownValue(ddValueLOSS_OF_SERVICE);
    }

    public void selectNoImpactDropdownValue() {
        selectDropDownValue(ddValueNO_IMPACT);
    }

    public void selectClearDropDownValue() {
        selectDropDownValue(ddValueCLEAR);
    }

    public void clickRelateCiButton() {
        driver.findElement(By.id(btnRELATE_CI)).click();
    }

    public void clickToSelectCi() {
        driver.findElement(By.xpath(chkbxTO_SELECT_CI)).click();
    }
}

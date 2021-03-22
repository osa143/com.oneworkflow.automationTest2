package pageObjects.BMC_Helix;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import pageObjects.BasePage;
import utils.CommonUtils;

//This Class is the Page objects and Actions for BMC Helix Incident page

public class BMC_Helix_IncidentPage extends BasePage {

    private String impact_ID = "arid_WIN_3_1000000163";
    private String urgency_ID = "arid_WIN_3_1000000162";
    private String btn_customerSearch_ID = "WIN_3_304248190";
    private String customer_Allen_Xpath = "//span[contains(text(),'Allen')]";
    private String btn_select_ID = "WIN_0_301912800";
    private String txt_summary_ID = "arid_WIN_3_1000000000";
    private String txt_assignedGroup_ID = "arid_WIN_3_1000000217";
    private String btn_save_ID = "WIN_3_301614800";
    private String btn_recentEntriesDialogue_ID = "WIN_0_304255230";
    private String firstTicket_Xpath = "//*[@id='T304261000']/tbody/tr[2]";
    private String txt_status_ID = "arid_WIN_3_7";
    private String btn_nextStage_Xpath = "//a[arid='303060100']";
    private String txt_resolution_ID = "arid_WIN_0_1000000156";
    private String btn_save_IncidnentModify_ID = "WIN_0_301533500";

    Actions actions = new Actions(driver);

    public void ClickSaveButton_ModifyIncident()
    {
        clickElement(By.id(btn_save_IncidnentModify_ID));
        CommonUtils.switchToChildWindow(driver, 0);;
    }
    public void EnterResolution(String resolution)
    {
        enterTextByElement(By.id(txt_resolution_ID), resolution);
    }
    public void ClickOnNextStageButton()
    {
        clickElementById(btn_nextStage_Xpath);
        CommonUtils.switchToChildWindow(driver, 1);;
    }

    //xpath syntax = //tagName[@attribute='value'];
    public Boolean VerifyStatusISCorrect(String status)
    {
        String XPath = makeXpath("*", "title", status);
       return verifyElementIsDisplayed(By.xpath(XPath));
    }
    public void ClickSaveRecentEntriesDialogueAndOpenFirstTicket()
    {
        clickElementById(btn_recentEntriesDialogue_ID);
        int frames = driver.findElements(By.tagName("iframe")).size();
        System.out.println("Number of frames are " + frames);
        //actions.DoubleClick(driver.FindElement(By.ClassName("")));
        WebElement element=driver.findElement(By.xpath(firstTicket_Xpath));
        doubleClickOnElement(element);
    }
    public void ClickSaveButton()
    {
        clickElementById(btn_save_ID);
    }
    public void EnterAssignedGroup(String assignedGroup)
    {
        enterTextByElement(By.id(txt_assignedGroup_ID), assignedGroup);
    }
    public void SelectUrgency(String dropdownValue)
    {
        clickDropDownById(urgency_ID);
        selectDropDownValue(dropdownValue);
    }
    public void SelectImpact(String dropdownValue)
    {
        clickDropDownById(impact_ID);
        selectDropDownValue(dropdownValue);
    }
    public void EnterSummary(String summary)
    {
     enterTextByElement(By.id(txt_summary_ID), summary);
    }
    public void SelectCustomer()
    {
        clickElementById(btn_customerSearch_ID);
        CommonUtils.switchToChildWindow(driver, 1);
        clickElementById(customer_Allen_Xpath);
        clickElementById(btn_select_ID);
        CommonUtils.switchToChildWindow(driver, 0);
    }
}

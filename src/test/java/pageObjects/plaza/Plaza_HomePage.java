package pageObjects.plaza;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.ui.Select;
import pageObjects.BasePage;
import utils.CommonUtils;

import java.util.ArrayList;

public class Plaza_HomePage extends BasePage {

    public static final String dd_ROLE_ID= "select2-chosen-9";
    public static final String txt_REQUEST_ID= "sp_formfield_sr2_v_request";
    public static final String dd_SYSTEM_ID= "s2id_sp_formfield_sr2_v_system";
    public static final String txt_PLANNED_START= "sp_formfield_sr2_v_start_date";
    public static final String txt_PLANNED_END= "sp_formfield_sr2_v_end_date";
    public static final String txt_DESCRIPTION= "sp_formfield_sr2_v_description";
    public static final String txt_ADDITIONAL_COMMENTS= "sp_formfield_additional_comments";
    public static final String btn_ORDER= "x016e0fdbdb854700b27fdb11ce9619e3";
    public static final String txt_PLAZA_REQUEST_NUM_ID="reqnum";


    public void openNewTab(){

        ((JavascriptExecutor) driver).executeScript("window.open()");
        ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
        driver.switchTo().window(tabs.get(1));

    }

    public void clickPlazaRequestNum(){
        clickElement(By.id(txt_PLAZA_REQUEST_NUM_ID));
    }


    public String getPlazaRequestNum(){
        String PlazaRequestId=getTextByID(txt_PLAZA_REQUEST_NUM_ID);
        System.out.println("Plaza request ID is  : " + PlazaRequestId);
        return PlazaRequestId;
    }

    public void clickOrder(){
        clickElement(By.id(btn_ORDER));
    }

    public void enterAdditionalComments(String text){
        enterTextByElement(By.id(txt_ADDITIONAL_COMMENTS), text);
    }

    public void enterDescription(String text){
        enterTextByElement(By.id(txt_DESCRIPTION), text);
    }

    public void enterPlannedStart(String text){
        enterTextByElement(By.id(txt_PLANNED_START), text);
    }
    public void enterPlannedEnd(String text){
        enterTextByElement(By.id(txt_PLANNED_END), text);
    }

    public String getTitle_plazaHomePage(){
        String title= driver.getTitle();
        System.out.println("Plaza Homepage title is : "+title);
        return title;

    }
    public void selectDropdown(By Element, By dropdownValuesListID, String dropdownValue){
        clickElement(Element);
        wait(500);
        driver.findElement((dropdownValuesListID)).findElements(By.tagName("li")).stream().filter(element -> element.getText().trim().equals(dropdownValue)).findFirst().orElse(null).click();

    }
    public void selectRoleDropdown(String dropdownName){
        selectDropdown(By.id(dd_ROLE_ID), By.id("select2-results-9"), dropdownName);

    }
    public void selectSystemDropdown(String dropdownName)
    {
        selectDropdown(By.id(dd_SYSTEM_ID), By.id("select2-results-13"),  dropdownName);
    }
    public void enterRequest(String text){
        enterTextByElement(By.id(txt_REQUEST_ID), text);
    }


}

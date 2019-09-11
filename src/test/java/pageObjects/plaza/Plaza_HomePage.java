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
    public static final String dd_SERVICE_REQUEST_NAME_ID= "select2-chosen-11";
    public static final String txt_CRM_REQUEST_ID= "sp_formfield_sr46_v_request";
    public static final String txt_CRM_PLANNED_START= "sp_formfield_sr46_v_planned_start_date";
    public static final String txt_CRM_PLANNED_END= "sp_formfield_sr46_v_planned_end_date";
    public static final String txt_CRM_DESCRIPTION= "sp_formfield_sr46_v_description";
    public static final String dd_CRM_SYSTEM= "s2id_sp_formfield_sr46_v_system";
    public static final String txt_C2B_REQUEST_ID="sp_formfield_sr74_v_request";
    public static final String dd_ENVIRONMENT="s2id_autogen15";
    public static final String txt_C2B_DESCRIPTION="sp_formfield_sr74_v_description";
    public static final String dd_SELECT_REQUEST_ID="select2-chosen-12";
    public static final String txt_C2B_GENERAL_REQUEST_ID="sp_formfield_sr112_v_request";
    public static final String dd_C2B_GENERAL_ENVIRONMENT="s2id_sp_formfield_sr112_v_enable_notification";
    public static final String txt_C2B_GENERAL_DESCRIPTION="sp_formfield_sr112_v_description";
    public static final String txt_C2B_SERVICE_REQUEST_ID="sp_formfield_sr109_v_request";
    public static final String dd_C2B_SERVICE_ENVIRONMENT="s2id_autogen13";
    public static final String txt_C2B_SERVICE_DESCRIPTION="sp_formfield_sr109_v_description";
    public static final String txt_BCPP_REQUEST_ID="sp_formfield_sr107_v_request";
    public static final String dd_BCPP_ENVIRONMENT="select2-chosen-12";
    public static final String txt_ADD_CI="s2id_autogen15";
    public static final String txt_BCPP_DESCRIPTION="sp_formfield_sr107_v_description";


    public void enterBCPP_Description(String text){
        enterTextByElement(By.id(txt_BCPP_DESCRIPTION), text);
    }
    public void selectsAddCi(String dropdownName){
        selectDropdown(By.id(txt_ADD_CI), By.id("s2id_autogen15_results"),  dropdownName);
    }

    public void selectBCPP_Environment(String dropdownName){
        selectDropdown(By.id(dd_BCPP_ENVIRONMENT), By.id("select2-results-12"),  dropdownName);
    }
    public void enterC2B_BCPP_Request(String text){
        enterTextByElement(By.id(txt_BCPP_REQUEST_ID), text);
    }
    public void enterC2B_service_Description(String text){
        enterTextByElement(By.id(txt_C2B_SERVICE_DESCRIPTION), text);
    }
    public void selectC2B_serviceEnvironment(String dropdownName){
        selectDropdown(By.id(dd_C2B_SERVICE_ENVIRONMENT), By.id("s2id_autogen13_results"),  dropdownName);
    }
    public void enterC2B_serviceRequest(String text){
        enterTextByElement(By.id(txt_C2B_SERVICE_REQUEST_ID), text);
    }
    public void enterC2B_general_Description(String text){
        enterTextByElement(By.id(txt_C2B_GENERAL_DESCRIPTION), text);
    }
    public void selectC2B_GeneralEnvironment(String dropdownName){
        selectDropdown(By.id(dd_C2B_GENERAL_ENVIRONMENT), By.id("s2id_autogen16_results"),  dropdownName);
    }
    public void enterC2B_generalRequest(String text){
        enterTextByElement(By.id(txt_C2B_GENERAL_REQUEST_ID), text);
    }
    public void select_selectRequest(String dropdownName){
        selectDropdown(By.id(dd_SELECT_REQUEST_ID), By.id("select2-results-12"),  dropdownName);
    }
    public void enterC2B_Description(String text){
        enterTextByElement(By.id(txt_C2B_DESCRIPTION), text);
    }
    public void selectEnvironment(String dropdownName){
        selectDropdown(By.id(dd_ENVIRONMENT), By.id("s2id_autogen15_results"),  dropdownName);
    }

    public void enterC2B_Request(String text){
        enterTextByElement(By.id(txt_C2B_REQUEST_ID), text);
    }
    public void selectCRMSystemDropdown(String dropdownName)
    {
        selectDropdown(By.id(dd_CRM_SYSTEM), By.id("select2-results-14"),  dropdownName);
    }
    public void enterCRMRequest(String text){
        enterTextByElement(By.id(txt_CRM_REQUEST_ID), text);
    }
    public void enterCRMDescription(String text){
        enterTextByElement(By.id(txt_CRM_DESCRIPTION), text);
    }

    public void enterCRMPlannedStart(String text){
        enterTextByElement(By.id(txt_CRM_PLANNED_START), text);
    }
    public void enterCRMPlannedEnd(String text){
        enterTextByElement(By.id(txt_CRM_PLANNED_END), text);
    }

    public void clickPebble(String pebbleName) {
        String element = String.format("//img[@alt='%s']", pebbleName);
        System.out.println(element);
        findElement(By.xpath(element)).click();
    }
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
        clickEscButton();

    }
    public void selectSystemDropdown(String dropdownName)
    {
        selectDropdown(By.id(dd_SYSTEM_ID), By.id("select2-results-13"),  dropdownName);
    }
    public void selectServiceRequestName(String dropdownName){
        selectDropdown(By.id(dd_SERVICE_REQUEST_NAME_ID), By.id("select2-results-11"), dropdownName);

    }

    public void enterRequest(String text){
        enterTextByElement(By.id(txt_REQUEST_ID), text);
    }


}

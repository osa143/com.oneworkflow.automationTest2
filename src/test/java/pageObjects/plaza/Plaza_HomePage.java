package pageObjects.plaza;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;
import pageObjects.BasePage;
import utils.CommonUtils;

public class Plaza_HomePage extends BasePage {

    public static final String dd_ROLE= "select2-choice";
    public static final String txt_REQUEST= "form-control ng-pristine ng-valid ng-scope ng-empty ng-valid-maxlength ng-touched";
    public static final String dd_SYSTEM_ID= "s2id_sp_formfield_sr2_v_system";
    public static final String txt_PLANNED_START= "sp_formfield_sr2_v_start_date";
    public static final String txt_PLANNED_END= "sp_formfield_sr2_v_start_date";
    public static final String txt_DESCRIPTION= "sp_formfield_sr2_v_description";
    public static final String txt_ADDITIONAL_COMMENTS= "sp_formfield_additional_comments";
    public static final String btn_ORDER= "x016e0fdbdb854700b27fdb11ce9619e3";

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
    public void selectDropdown(By Element, String dropdownName){
        Select role = new Select(findElement(Element));
        role.selectByVisibleText(dropdownName);
    }
    public void selectRoleDropdown(String dropdownName){
        selectDropdown(By.className(dd_ROLE), dropdownName);

    }
    public void selectSystemDropdown(String dropdownName)
    {
        selectDropdown(By.id(dd_SYSTEM_ID), dropdownName);
    }
    public void enterRequest(String text){
        enterTextByElement(By.className(txt_REQUEST), text);
    }


}

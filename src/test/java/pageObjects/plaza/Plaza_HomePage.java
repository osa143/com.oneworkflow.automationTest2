package pageObjects.plaza;

import pageObjects.BasePage;

public class Plaza_HomePage extends BasePage {

    public String getTitle_plazaHomePage(){
        String title= driver.getTitle();
        System.out.println("Plaza Homepage title is : "+title);
        return title;

    }
}

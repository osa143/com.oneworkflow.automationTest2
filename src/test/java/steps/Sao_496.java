package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import io.cucumber.datatable.DataTable;
import pageObjects.BaseRecordPage;
import pageObjects.OWF_ProblemRecordPage;

import java.lang.reflect.Type;
import java.util.Map;

public class Sao_496 {

    @And("fill the base page fields with data")
    public void fillTheBasePageFieldsWithData(DataTable table) {

        Map<String, String> dataMap = table.asMap(String.class, String.class);

        OWF_ProblemRecordPage prp = new OWF_ProblemRecordPage();

        if (dataMap.containsKey("template")) prp.selectTemplate(dataMap.get("template"));
    }
}

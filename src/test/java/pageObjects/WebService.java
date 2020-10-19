package pageObjects;

import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.specification.RequestSpecification;
import utils.TestContext;

import java.io.FileInputStream;
import java.util.Properties;

public class WebService {


//    post = This is HTTP method. Here as per the API design GET/POST/PUT/DELETE will be there.
//    body = Path of xml input file
//    Rest_URL = This is the Rest Api to be executed
//    expectedStatusCode = This will be 200/201/400... as per your requirement

    private String Rest_URL = "";
    private String projectPath = System.getProperty("user.dir");
    private String body = projectPath + "\\src\\test\\resources\\XML Stubs\\HelixCreate.xml.tld";
    private int expectedStatusCode=200;


    RequestSpecification request = new RequestSpecBuilder().addHeader("Accept", "text/xml").addHeader("Content-Type", "text/xml").build();

    public void createIncidentFromStub() {
        RestAssured.given().spec(request).body(body).post(Rest_URL).then().log().all().assertThat().statusCode(expectedStatusCode).assertThat().extract().response();

    }

}

package pageObjects;

import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.specification.RequestSpecification;
import utils.TestContext;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Properties;

public class WebService {



//    post = This is HTTP method. Here as per the API design GET/POST/PUT/DELETE will be there.
//    body = Path of xml input file
//    Rest_URL = This is the Rest Api to be executed
//    expectedStatusCode = This will be 200/201/400... as per your requirement

    private String Rest_URL = "http://td220arsorc.ddc.teliasonera.net:38080/OWBEF/AOInterface";
    private String projectPath = System.getProperty("user.dir");
    private String body = projectPath + "\\src\\test\\resources\\XML Stubs\\CreateOP_Plaza.xml.tld";
    private int expectedStatusCode=200;

    File file = new File(body);
    String content;

    {
        try {
            content = new String(Files.readAllBytes(file.toPath()));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    RequestSpecification request = new RequestSpecBuilder().addHeader("Accept", "text/xml").addHeader("SOAPAction", "execute-workflow").addHeader("Content-Type", "text/xml").build();

    public void createIncidentFromStub() {
        System.out.println("Sending request to End point - " + Rest_URL);
        System.out.println("Location of the stub is  - " + body);
        System.out.println("Request sending through xml stub  - " + request);

        RestAssured.given().spec(request).body(content).post(Rest_URL).then().log().all().assertThat().statusCode(expectedStatusCode).assertThat().extract().response();

    }




}

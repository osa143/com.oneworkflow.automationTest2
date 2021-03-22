//package steps;
//
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import org.testng.Assert;
//import pageObjects.JMS.TibcoQueueClientPublisher;
//import pageObjects.WebService;
//import utils.CommonUtils;
//
//public class WebService_Steps {
//
//    TibcoQueueClientPublisher tibcoQueueClientPublisher = new TibcoQueueClientPublisher();
//
//    public WebService_Steps() throws Exception {
//    }
//
//    @When("user sends request to create incident")
//    public void userSendsRequestToCreateIncident() throws Exception {
//        tibcoQueueClientPublisher.createTicket();
//    }
//
//    @Then("OP ticket should be created")
//    public void opTicketShouldBeCreated() {
//        Assert.assertNotNull(CommonUtils.HelixOPID_GeneratedFromStub);
//    }
//
//    @Then("Helix sends clear alarm message towards OW")
//    public void helixSendsClearAlarmMessageTowardsOW() throws Exception {
//        tibcoQueueClientPublisher.clearAlarm();
//    }
//}

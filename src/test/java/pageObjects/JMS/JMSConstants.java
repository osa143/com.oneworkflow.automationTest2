package pageObjects.JMS;
//tcp://testmsg01.teliacompany.net:7315||tcp://testmsg02.teliacompany.net:7315

public class JMSConstants {

    //Port 7335 = UAT
    //Port 7315 = ST / SIT
    //Inbound queue(Helix-->OWF): testcit_q.system.helix-owf.direct.faultmanagement
    //Outbound queue(OWF-->Helix): testcit_q.system.owf-helix.direct.faultmanagement

    public static String BROKER_URL= "tcp://testmsg01.teliacompany.net:7315";
    public static String QUEUE_NAME= "testtst_q.system.helix-owf.direct.faultmanagement";
    public static String QUEUE_USERNAME= "helix"; //PhoenixUser  //owfgesb
    public static String QUEUE_PASSWORD= "6EK!g7tKX"; //G4nGGL7ZhUp9Xs
}

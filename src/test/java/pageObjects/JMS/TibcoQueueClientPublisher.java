package pageObjects.JMS;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

public class TibcoQueueClientPublisher {

    public static void main(String[] args) throws Exception {
//        String message = "{\"order\":{\"orderNo\":\"XYZ1234\",\"status\":\"COMPLETED\"}}";

         String projectPath = System.getProperty("user.dir");
        String body = projectPath + "\\src\\test\\resources\\XML Stubs\\HelixCreate.xml.tld";

        File file = new File(body);
        String content = "";

        {
            try {
                content = new String(Files.readAllBytes(file.toPath()));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        String message = "<ns0:BAOInputRequest xmlns:ns0=\"OWIF\">" +
                "    <ns0:FaultManagement>" +
                "        <ns0:CreateIncident>" +
                "            <ns0:Action>Create</ns0:Action>" +
                "            <ns0:Operation>Create Incident</ns0:Operation>" +
                "            <ns0:InterfaceName>HPE Common Temip</ns0:InterfaceName>" +
                "            <ns0:NMSGUID>HarvTest1</ns0:NMSGUID>" +
                "            <ns0:AlarmGUID>HarvTest1</ns0:AlarmGUID>" +
                "            <ns0:AlarmNumber>HarvTest1</ns0:AlarmNumber>" +
                "            <ns0:AlarmType>EquipmentAlarm</ns0:AlarmType>" +
                "            <ns0:AlarmTextShort>CHANNEL FAILURE RATE ABOVE DEFINED THRESHOLD</ns0:AlarmTextShort>" +
                "            <ns0:AlarmTextLong>Cells: 84128 Prio: 24:2 OriginalMOI: BSC-394226,BssFunction=BSC-394226,BtsSiteMgr=BCF-88,GsmCell=BTS-248 7745 additionalInformation: 02 01 00 00 00 00 00 00 00 00 02 56d diagnosticInformation: FF FF FF FF FF FF objectName: 9 " +
                "                <user_data>AdditionalInfo=02 01 00 00 00 00 00 00 00 00 02 56d<#>SpecificProblem=CHANNEL FAILURE RATE ABOVE DEFINED THRESHOLD<#>Tech=GSM<#>AffectedCI=Country=SE;Equipment_ID=84128;Site=;Tech=GSM<#>ManagedObject=BSC=AB16B,BCF-88,BTS-248" +
                "                </user_data>" +
                "            </ns0:AlarmTextLong>" +
                "            <ns0:CtrlNeName>hoburg.telia.se</ns0:CtrlNeName>" +
                "            <ns0:CtrlNeAddress>10.62.4.50</ns0:CtrlNeAddress>" +
                "            <ns0:AlarmTime>2021-02-01T09:18:55+01:00</ns0:AlarmTime>" +
                "            <ns0:ActualEventTime>2020-02-01T09:18:55+01:00</ns0:ActualEventTime>" +
                "            <ns0:AlarmSeverity>Major</ns0:AlarmSeverity>" +
                "            <ns0:ObjectName>Country=FI;Equipment_ID=Malla2H;Site=;Tech=LTECell</ns0:ObjectName>" +
                "            <ns0:ObjectClass>Equipment</ns0:ObjectClass>" +
                "            <ns0:ServiceProvisionFor>Telia Company</ns0:ServiceProvisionFor>" +
                "            <ns0:OwningNMS>TeMIP</ns0:OwningNMS>" +
                "            <ns0:RecordType>Alarm</ns0:RecordType>" +
                "            <ns0:interactionDate>2020-02-01T10:42:58+01:00</ns0:interactionDate>" +
                "            <ns0:AlarmFirstOccurrence>2020-02-01T09:18:55+01:00</ns0:AlarmFirstOccurrence>" +
                "            <ns0:AlarmLastOccurrence>2020-02-01T10:43:39+01:00</ns0:AlarmLastOccurrence>" +
                "            <ns0:AdditionalInfo>Cells: 84128 Prio: 24:2 OriginalMOI: BSC-394226,BssFunction=BSC-394226,BtsSiteMgr=BCF-88,GsmCell=BTS-248 7745 additionalInformation: 02 01 00 00 00 00 00 00 00 00 02 56d diagnosticInformation: FF FF FF FF FF FF objectName: 9 " +
                "                <user_data>AdditionalInfo=02 01 00 00 00 00 00 00 00 00 02 56d<#>SpecificProblem=CHANNEL FAILURE RATE ABOVE DEFINED THRESHOLD<#>Tech=GSM<#>AffectedCI=Country=SE;Equipment_ID=84128;Site=;Tech=GSM<#>ManagedObject=BSC=AB16B,BCF-88,BTS-248" +
                "                </user_data>" +
                "            </ns0:AdditionalInfo>" +
                "            <ns0:ObjectAlias>NE .se.se_netact PART \"BSC=AB16B,BCF-88,BTS-248\"</ns0:ObjectAlias>" +
                "            <ns0:Component>HP IOC Component</ns0:Component>" +
                "            <ns0:Country>Sweden</ns0:Country>" +
                "            <ns0:Technology>GSM</ns0:Technology>" +
                "            <ns0:JobID>HPE Common Temip HarvTest1</ns0:JobID>" +
                "            <ns0:UserId>rage</ns0:UserId>" +
                "            <ns0:AlarmCounter>1</ns0:AlarmCounter>" +
                "        </ns0:CreateIncident>" +
                "    </ns0:FaultManagement>" +
                "</ns0:BAOInputRequest>";
        /**/
        TibcoQueue tibcoQueue = new TibcoQueue(
                JMSConstants.BROKER_URL,
                JMSConstants.QUEUE_NAME,
                JMSConstants.QUEUE_USERNAME,
                JMSConstants.QUEUE_PASSWORD);

        TibcoQueueUtils queueUtil = new TibcoQueueUtils();
        System.out.println("Sending message");
        queueUtil.sendMessage(content,tibcoQueue);
        System.out.println("Message sent successfully!!");

        JdbcSQLServerConnection jdbcSQLServerConnection = new JdbcSQLServerConnection();
        jdbcSQLServerConnection.connectToDatabaseAndGetOpTicket("MaheshTestDec1");
    }
}

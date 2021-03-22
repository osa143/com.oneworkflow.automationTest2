//package pageObjects.JMS;
//
//import utils.CommonUtils;
//
//import java.sql.*;
//
///**
// * This program demonstrates how to establish database connection to Microsoft
// * SQL Server.
// *
// * Username dbtestuser1, dbtestuser2 and  pwd Workflow2020
// */
//public class JdbcSQLServerConnection {
//
//    public void connectToDatabaseAndGetOpTicket(String Fld_Alarm_GUID){
////        String dbURL = "jdbc:sqlserver://localhost\\sqlexpress";
//        //ST:
//        //  String dbURL = "jdbc:sqlserver://td220testdb.ddc.teliasonera.net:1433;Instance=TD220TESTDB;Database=ARSystem;";
//        //SIT:
//        String dbURL= "jdbc:sqlserver://td333testdb.ddc.teliasonera.net:1433;Instance=TD333TESTDB;Database=ARSystem_UATCopy";
//        String db_driver   = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
//        String username = "dbtestuser1";
//        String password = "Workflow2020";
//
//        try {
//            try {
//                Class.forName(db_driver);
//            } catch (ClassNotFoundException e) {
//                e.printStackTrace();
//            }
//            Connection connection = DriverManager.getConnection(dbURL, username, password);
//
////            select distinct Fld_OPRequestTicketID from OS3_OP_NMS_IntegrationIn
////            where Fld_Alarm_GUID = 'MaheshTestTest4'
//
//            String sql= "select distinct Fld_OPRequestTicketID from OS3_OP_NMS_IntegrationIn where Fld_Alarm_GUID = '" + Fld_Alarm_GUID +"'";
////            String sql= "select count (*) from OS3_OP_NMS_IntegrationIn";
//            Statement statement=connection.createStatement();
//            ResultSet resultSet= statement.executeQuery(sql);
//
//            int count = 0;
//            while(resultSet.next()){
//                count ++;
//            String ticketId= resultSet.getString("Fld_OPRequestTicketID");
//                System.out.println("OP ticket ID is - " + ticketId);
//                CommonUtils.HelixOPID_GeneratedFromStub = ticketId;
//                System.out.println("Fld_Alarm_GUID is - " + Fld_Alarm_GUID); //TibcoQueueClientPublisher -> generatedString
//
//            }
//
//            System.out.println("Number of Tickets - " + count);
//            connection.close();
//        }
//
//        catch (SQLException ex) {
//            ex.printStackTrace();
//        }
//        }
//    }
//

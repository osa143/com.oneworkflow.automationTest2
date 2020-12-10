package pageObjects.JMS;
import java.util.List;
import javax.jms.DeliveryMode;
import javax.jms.MessageProducer;
import javax.jms.Queue;
import javax.jms.QueueConnection;
import javax.jms.QueueConnectionFactory;
import javax.jms.QueueSession;
import javax.jms.Session;
import javax.jms.TextMessage;

import com.tibco.tibjms.TibjmsQueueConnectionFactory;
import pageObjects.JMS.TibcoQueue;


public class TibcoQueueUtils {
        private QueueConnection queueConnection;
        private QueueSession queueSession;
        private Queue sendQueue;
        private MessageProducer messageProducer;

        private void configureTibcoConnection(TibcoQueue tibcoQueue) throws Exception {
            QueueConnectionFactory queueConnectionFactory =
                    new TibjmsQueueConnectionFactory(tibcoQueue.getTibcoInstance());
            queueConnection = queueConnectionFactory.createQueueConnection(tibcoQueue.getUserName(),
                    tibcoQueue.getPassWord());
            queueSession = queueConnection.createQueueSession(false, Session.AUTO_ACKNOWLEDGE);
            sendQueue = queueSession.createQueue(tibcoQueue.getTibcoQueueName());
        }

        private void configureProducer(TibcoQueue tibcoQueue) throws Exception {
            configureTibcoConnection(tibcoQueue);
            messageProducer = queueSession.createProducer(sendQueue);
            messageProducer.setDeliveryMode(DeliveryMode.NON_PERSISTENT);
            queueConnection.start();
        }

        private void closeProducer() throws Exception {
            messageProducer.close();
            closeTibcoConnection();
        }

        private void closeTibcoConnection() throws Exception {
            queueSession.close();
            queueConnection.stop();
            queueConnection.close();
        }

        public synchronized void sendMessage(String messageText,
                                             TibcoQueue tibcoQueue) throws Exception {
            configureProducer(tibcoQueue);
            TextMessage message = queueSession.createTextMessage(messageText);
            messageProducer.send(message);
            closeProducer();
        }

        public synchronized void sendMessages(List<String> messageTexts,
                                              TibcoQueue tibcoQueue) throws Exception {
            messageTexts.forEach(messageText -> {
                try {
                    sendMessage(messageText, tibcoQueue);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            });
        }
    }


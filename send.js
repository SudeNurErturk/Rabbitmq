//import {connect} from 'amqplib';

const amqp = require('amqplib');
async function connectRabbitMQ(message,queueName){
try {
const connection = await amqp.connect (uri);
const chanel = await connection.createChannel();
const uri = process.env.uri;

await chanel.assertQueue(queueName,{durable:false});
chanel.sendToQueue(queueName,Buffer.from(message));
} catch (error) {
    console.error('Hata oluştu:', error);
    
}

}
module.exports ={
    connectRabbitMQ
}

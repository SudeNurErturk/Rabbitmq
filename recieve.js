//import {connect} from 'amqplib';
const amqp = require('amqplib');
async function recieveMessage(){


const uri = 'amqp://sudenur:_sud3nUr!@3.68.248.79:5672/sudenurEnv';
try{
    const connection = await amqp.connect (uri);
    const chanel = await connection.createChannel();
    const queueName ="hello";
    await chanel.assertQueue(queueName,{durable:false});
    
    chanel.consume(queueName,(message)=>{
        console.log(` ${message.content.toString()}`);
    })
}
catch(err){
    console.log(err);
}
}
recieveMessage();
const dotenv=require('dotenv');
dotenv.config();
const http=require('http');
const app=require('./app');
const cors=require('cors')

port=process.env.PORT||3000;
const server=http.createServer(app);


server.listen(port, ()=>{
    console.log(`server is listening on the port ${port}`)
});
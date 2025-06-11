const Redis = require('ioredis')

const redis = new Redis({
  host: "localhost", 
  port: 6379,
  // password: "your_password"  (if secured)
});

redis.on('connect',()=>{
    console.log("Redis connected")
})

redis.on("error",(err)=>{
    console.log("Redis error",err)
})

module.exports = redis;
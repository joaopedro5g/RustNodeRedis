import redis from 'redis';

const publisher = redis.createClient();

setInterval(() => {
  publisher.publish('rust', 'CORNÃOOO!!');
}, 800);

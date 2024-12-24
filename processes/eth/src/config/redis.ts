import redis from "redis";
import { config } from "./config";
// import { configuration } from ".";

class RedisServer {
  public client: redis.RedisClient;

  constructor() {
    this.initiateConnection();
  }

  public async initiateConnection(): Promise<void> {
    // this.client = redis.createClient(Number(config.REDIS_PORT), config.REDIS_HOST_WRITE);
    this.client = redis.createClient({ url: config.REDIS_CONN });
    this.client.on("connect", () => {
      console.log("Connected to redis client successfully");
    });
  }
}

const redisClient = new RedisServer().client;
export default redisClient;

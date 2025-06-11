const redis = require("../utils/redisClient");

const LOCK_TIME = 300;

async function lockSeats(showId, seatIds, userId) {
  const locked = [];

  for (const seatId of seatIds) {
    const key = `LOCK:${showId}:${seatId}`;
    const existing = await redis.get(key);

    if (!existing) {
      await redis.set(key, userId, "EX", LOCK_TIME); // lock seat
      locked.push(seatId);
    }
  }

  return locked;
}

async function unlockSeats(showId, seatIds, userId) {
    const unlocked = [];
  for (const seatId of seatIds) {
    const key = `LOCK:${showId}:${seatId}`;
    const currentUser = await redis.get(key);

    // Only allow unlock if the same user
    if (currentUser === userId) {
      await redis.del(key);
    }
    unlocked.push(seatId);
  }
  return unlocked;
}

async function getSeatLockStatus(showId, seatIds) {
  const status = {};

  for (const seatId of seatIds) {
    const key = `LOCK:${showId}:${seatId}`;
    const lockedBy = await redis.get(key);

    status[seatId] = lockedBy ? "locked" : "available";
  }

  return status;
}

module.exports = { lockSeats, unlockSeats, getSeatLockStatus };

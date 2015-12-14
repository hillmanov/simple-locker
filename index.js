var locks = {};

function lock(label) {
  locks[label] = true;
}

function unlock(label) {
  delete locks[label];
}

function isLocked(label) {
  return locks.hasOwnProperty(label);
}

module.exports = {
  lock: lock,
  unlock: unlock,
  isLocked: isLocked
};

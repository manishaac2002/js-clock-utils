// index.js
function getCurrentTime() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

function getTimeDifferenceBetween(start, end) {
  if (typeof start !== 'number' || typeof end !== 'number') {
    console.error("Function expects two numeric arguments.");
    return null;
  }

  const diff = Math.abs(end - start);
  const label = diff === 1 ? "hr" : "hrs";
  return `${diff} ${label}`;
}


module.exports = {
  getCurrentTime,
  getTimeDifferenceBetween,
};

// time difference
// time ago

//timezone - location current location time

/**
 * Returns the current time formatted as a string in HH:MM:SS format.
 *
 * @function
 * @returns {string} A string representing the current time in 24-hour format,
 * with hours, minutes, and seconds zero-padded to two digits.
 *
 * @example
 * const time = getCurrentTime();
 * console.log(time); // "14:05:09"
 */
const getCurrentTime = () => {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
};


  
 /**
 * Calculates the absolute time difference in hours between two numeric values.
 *
 * @function
 * @param {number} start - The starting hour value.
 * @param {number} end - The ending hour value.
 * @returns {string|null} A string representing the difference in hours (e.g., "1 hr" or "3 hrs"),
 * or `null` if inputs are not numbers.
 *
 * @example
 * getTimeDifferenceBetween(5, 8); // "3 hrs"
 * getTimeDifferenceBetween(10, 9); // "1 hr"
 * getTimeDifferenceBetween("a", 9); // Logs error, returns null
 */
 const getTimeDifferenceBetween = (start, end) => {
  if (typeof start !== 'number' || typeof end !== 'number') {
    console.error("Function expects two numeric arguments.");
    return null;
  }

  const diff = Math.abs(end - start);
  const label = diff === 1 ? "hr" : "hrs";
  return `${diff} ${label}`;
};



/**
 * Returns the current timestamp in ISO 8601 format (UTC).
 *
 * @returns {string} The current date and time as an ISO string (e.g., "2025-04-22T11:05:23.456Z").
 */
const getCurrentTimestamp = () => {
  return new Date().toISOString();
};


/**
 * Returns a human-readable relative time string (e.g., "5 minutes ago")
 * based on the difference between the current time and the provided date.
 * Handles past and future dates.
 *
 * @function
 * @param {string | number | Date} date - The date to compare (can be a Date object, timestamp, or date string).
 * @returns {string} A string indicating how long ago the date was, or "in the future" if the date is ahead,
 * or "Invalid date" for an invalid input.
 *
 * @example
 * getTimeAgo("2025-04-23T10:00:00Z"); // "3 hours ago" (if current time is 13:00 UTC)
 * getTimeAgo(Date.now() - 1000 * 60 * 60); // "1 hour ago"
 * getTimeAgo(Date.now() + 10000); // "in the future"
 * getTimeAgo("invalid"); // "Invalid date"
 */
const getTimeAgo = (date) => {
  const now = new Date();
  const past = new Date(date);

  if (isNaN(past.getTime())) return "Invalid date";

  const diffInSeconds = Math.floor((now - past) / 1000);

  if (diffInSeconds < 0) return "in the future";
  if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours} hours ago`;

  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays} days ago`;
};




  export default {
    getCurrentTime,
    getTimeDifferenceBetween,
    getCurrentTimestamp,
    getTimeAgo
  };

  
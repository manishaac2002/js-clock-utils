# 🕒 js-clock-utils

A lightweight JavaScript utility library for working with clocks, time formatting, and relative timestamps. Designed for use in web apps, Node.js scripts, and anywhere you need simple time utilities.

---

## ✨ Features

- ⏰ Get the current time in `HH:MM:SS` format
- 🕗 Calculate time difference between two hours
- 📅 Fetch the current timestamp in ISO 8601 format
- 🧭 Display how long ago a date was ("5 minutes ago", etc.)

---

## 📦 Installation

```bash
npm install js-clock-utils
```

## 🚀 Usage
```bash
import clockUtils from 'js-clock-utils';

// Get current time
console.log(clockUtils.getCurrentTime()); // "14:05:09"

// Get difference in hours
console.log(clockUtils.getTimeDifferenceBetween(5, 8)); // "3 hrs"

// Get current ISO timestamp
console.log(clockUtils.getCurrentTimestamp()); // "2025-04-22T11:05:23.456Z"

// Get relative time
console.log(clockUtils.getTimeAgo('2025-04-22T10:00:00Z')); // "1 hour ago"
```

---

## 👩‍💻 Author
One tick at a time ⌚ — handcrafted ❤️ by Manisha

---

## 📄 License
MIT License

---

## 💬 Friendly
💡 Curious for more? Check out what I’m building on GitHub https://github.com/manishaac2002!


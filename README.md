# Coming-Soon-Page
Build a visually appealing "Coming Soon" landing page that displays a live countdown timer showing the time remaining until your website (or product) launches. The timer should dynamically update every second and show days, hours, minutes, and seconds.

How to use / customize:
Set your launch date: open script.js and change
const LAUNCH_DATE = "2025-09-15T10:00:00";
to your exact launch timestamp (local time). If you want UTC, use the Date.UTC(...) example in the comment.
Add visuals (optional): place a background.jpg and/or logo.svg in the images folder. If you don’t add them, the page still looks great with the gradient.
Email capture: the “Notify Me” button is a front-end placeholder. Wire it to your backend or a service (e.g., a simple server endpoint) with fetch() inside the click handler.
Accessibility: the timer area uses aria-live to announce updates, labels on units, and a status message for screen readers.
Zero state: once the countdown hits 0, it switches to “We’re live! 🎉” automatically and stops the timer.

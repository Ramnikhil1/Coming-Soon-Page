/* === Configuration =======================================
   Set your launch date/time (local time). Examples:
   - "2025-09-15T10:00:00" (YYYY-MM-DDTHH:mm:ss)
   - "September 15, 2025 10:00:00"
   - If you prefer UTC, use: new Date(Date.UTC(2025, 8, 15, 4, 30, 0))
*/
const LAUNCH_DATE = "2025-09-15T10:00:00"; // <-- change me

/* === Elements ============================================ */
const $days = document.getElementById("days");
const $hours = document.getElementById("hours");
const $minutes = document.getElementById("minutes");
const $seconds = document.getElementById("seconds");
const $status = document.getElementById("statusText");
const $year = document.getElementById("year");
const $notifyBtn = document.getElementById("notifyBtn");
const $email = document.getElementById("email");
const $ctaMsg = document.getElementById("ctaMsg");

/* === Helpers ============================================= */
const pad2 = (n) => String(n).padStart(2, "0");

function getTimeParts(diffMs){
  const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

function render(parts){
  $days.textContent = parts.days;
  $hours.textContent = pad2(parts.hours);
  $minutes.textContent = pad2(parts.minutes);
  $seconds.textContent = pad2(parts.seconds);
}

/* === Countdown =========================================== */
(function initCountdown(){
  $year.textContent = new Date().getFullYear();

  let target = new Date(LAUNCH_DATE);
  if (isNaN(target.getTime())) {
    // Fallback: 30 days from now if date is invalid
    target = new Date(Date.now() + 30 * 24 * 3600 * 1000);
    console.warn("Invalid LAUNCH_DATE. Using 30 days from now.");
  }

  function tick(){
    const now = new Date();
    const diff = target - now;

    if (diff <= 0){
      render({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      $status.textContent = "We’re live! 🎉";
      clearInterval(timer);
      return;
    }

    const parts = getTimeParts(diff);
    render(parts);

    // Friendly status line
    $status.textContent = `Launching on ${target.toLocaleString()} (your local time)`;
  }

  tick(); // initial paint
  const timer = setInterval(tick, 1000);
})();

/* === (Optional) Fake "Notify Me" handler ================== */
$notifyBtn?.addEventListener("click", () => {
  const email = ($email?.value || "").trim();
  if (!email){
    $ctaMsg.textContent = "Please enter your email.";
    return;
  }
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!ok){
    $ctaMsg.textContent = "That doesn’t look like a valid email.";
    return;
  }
  // Replace this with your real subscribe logic or fetch() to your backend.
  $ctaMsg.textContent = "Thanks! We’ll keep you posted.";
  $email.value = "";
});
s

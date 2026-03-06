const cookieConsent = document.getElementById("cookie-consent");
const acceptBtn = document.getElementById("accept-btn");
const declineBtn = document.getElementById("decline-btn");

acceptBtn.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "accepted");
  cookieConsent.style.display = "none";
});

declineBtn.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "declined");
  cookieConsent.style.display = "none";
});

window.addEventListener("load", () => {
  const consent = localStorage.getItem("cookieConsent");
  console.log(`Cookie consent was previously ${consent}.`);
  if (!consent) {
    cookieConsent.style.display = "block";
  } else if (consent === "declined") {
    cookieConsent.style.display = "block";
  } else {
    cookieConsent.style.display = "none";
  }
});
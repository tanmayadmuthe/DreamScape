// Email Signup Form Validation with better feedback
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      showFeedback("Please enter an email address.", "error");
    } else if (!emailPattern.test(email)) {
      showFeedback("Please enter a valid email address.", "error");
    } else {
      showFeedback("Thank you for signing up!", "success");
      document.getElementById("signupForm").reset();
    }
  });

// Function to show feedback
function showFeedback(message, type) {
  const feedbackDiv = document.createElement("div");
  feedbackDiv.className = `alert alert-${
    type === "error" ? "danger" : "success"
  }`;
  feedbackDiv.textContent = message;

  // Append feedback message to the form
  const form = document.getElementById("signupForm");
  form.prepend(feedbackDiv);

  // Remove the feedback message after 3 seconds
  setTimeout(() => feedbackDiv.remove(), 3000);
}

// Scroll to Top Button with smooth scrolling and debounce
const topBtn = document.getElementById("topBtn");

let isScrolling = false;
window.addEventListener("scroll", function () {
  if (!isScrolling) {
    isScrolling = true;
    setTimeout(function () {
      toggleScrollButton();
      isScrolling = false;
    }, 100); // Debouncing by 100ms
  }
});

// Show/hide the scroll-to-top button
function toggleScrollButton() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// Scroll to the top of the page smoothly
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

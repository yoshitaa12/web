document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMsg = document.getElementById("error");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    e.preventDefault();
    errorMsg.textContent = "All fields are required.";
  } else if (!emailPattern.test(email)) {
    e.preventDefault();
    errorMsg.textContent = "Please enter a valid email address.";
  } else {
    errorMsg.textContent = "";
    alert("Form submitted successfully!");
  }
});

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  const btn = document.createElement("button");
  btn.textContent = "❌";
  btn.style.marginLeft = "10px";
  btn.onclick = () => li.remove();

  li.appendChild(btn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

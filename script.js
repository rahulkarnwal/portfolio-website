// toggle navigation menu
function toggleMenu() {
  const nav = document.querySelector("nav ul");
  nav.classList.toggle("active");
}
// smooth scrolling
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
function filterProjects(category) {
  const projects = document.querySelectorAll("#projects article");

  projects.forEach(project => {
    if (category === "all" || project.classList.contains(category)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}
// lightbox
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("click", function() {
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = 0;
    modal.style.left = 0;
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.background = "rgba(0,0,0,0.8)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = "1000";
    modal.innerHTML = `<img src="${this.src}" style="max-width:90%; max-height:90%; object-fit:contain;">`;
    modal.onclick = () => modal.remove();
    document.body.appendChild(modal);
  });
});
document.querySelector("form").addEventListener("submit", function(e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let errors = [];

  if (!name) {
    errors.push("Name is required.");
  }

  if (!email) {
    errors.push("Email is required.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  if (!message) {
    errors.push("Message is required.");
  }

  if (errors.length > 0) {
    alert(errors.join("\n"));
    e.preventDefault();
  }
});
console.log("working");
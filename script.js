HTML (index.html)

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Portfolio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>My Portfolio</h1>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <section id="about">
    <h2>About Me</h2>
    <p id="aboutText">Hi! I am a student passionate about web development.</p>
    <button onclick="changeAbout()">Change Description</button>
  </section>

  <section id="projects">
    <h2>Projects</h2>
    <ul id="projectList"></ul>
    <button onclick="addProject()">Add Project</button>
  </section>

  <section id="contact">
    <h2>Contact</h2>
    <form id="contactForm">
      <input type="text" id="name" placeholder="Your Name" required>
      <input type="email" id="email" placeholder="Your Email" required>
      <button type="submit">Send</button>
    </form>
  </section>

  <script src="script.js"></script>
</body>
</html>


---

CSS (style.css)

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: #f4f4f4;
}
header {
  background: #333;
  color: white;
  padding: 15px;
  text-align: center;
}
nav ul {
  list-style: none;
  padding: 0;
}
nav ul li {
  display: inline;
  margin: 0 10px;
}
nav ul li a {
  color: white;
  text-decoration: none;
}
section {
  padding: 20px;
  margin: 20px;
  background: white;
  border-radius: 8px;
}
button {
  background: #333;
  color: white;
  padding: 8px 15px;
  border: none;
  cursor: pointer;
}
button:hover {
  background: #555;
}


---

JavaScript (script.js)

// Change About Me Text
function changeAbout() {
  document.getElementById('aboutText').textContent =
    "I am a passionate learner exploring web technologies!";
}

// Add Projects Dynamically
function addProject() {
  let projectList = document.getElementById('projectList');
  let newProject = document.createElement('li');
  newProject.textContent = "New Project - " + new Date().toLocaleDateString();
  projectList.appendChild(newProject);
}

// Handle Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you, " + document.getElementById('name').value + "! Your message has been sent.");
});






  
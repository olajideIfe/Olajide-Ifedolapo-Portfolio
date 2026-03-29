// Typing animation
let text = "Front-End Developer";
let i = 0;
function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 80);
  }
}
type();

// Dark/Light mode toggle
function toggleMode() {
  let body = document.getElementById("body");
  body.classList.toggle("bg-white");
  body.classList.toggle("text-black");
}

    function openModal(project) {
      document.getElementById('modal-' + project).classList.remove('hidden');
    }
    function closeModal(project) {
      document.getElementById('modal-' + project).classList.add('hidden');
    }
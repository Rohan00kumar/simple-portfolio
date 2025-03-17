function showSection(section) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(section).classList.remove('hidden');
}

function addPost() {
  const title = document.getElementById('postTitle').value;
  const content = document.getElementById('postContent').value;
  
  if (title && content) {
    const postList = document.getElementById('postList');
    const li = document.createElement('li');
    li.textContent = `${title}: ${content}`;
    postList.appendChild(li);
  }
}

function addProject() {
  const title = document.getElementById('projectTitle').value;
  const content = document.getElementById('projectContent').value;
  
  if (title && content) {
    const projectList = document.getElementById('projectList');
    const li = document.createElement('li');
    li.textContent = `${title}: ${content}`;
    projectList.appendChild(li);
  }
}

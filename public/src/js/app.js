const doLogin = function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    login({
      username: username,
      password: password
    }).then(function(res) {
      window.location.href = 'index.html'; //call .html if successfull 
    });
};
  
const doRegister = function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    register({
      username: username,
      email: email,
      password: password
    }).then(function(res) {
      window.location.href = 'login.html';
    });
};
  
const doLogout = function(e) {
    e.preventDefault();
}; //neep api implenetation

  //buttons generally do not "link" places




const doRequest = function(e) {
  e.preventDefault();
  const song_title = document.getElementById('song_title').value;
  const artist_name = document.getElementById('artist_name').value;

  createSong_Requests({
    song_title: song_title,
    artist_name: artist_name
  }).then(function(res) {
    window.location.href = 'index.html'; //call .html if successfull 
  });
};

// Update doRefresh function to fetch data and render table
const doRefresh = function(e) {
  e.preventDefault();
  getAllSong_Requests() // Fetch song requests
    .then(response => response.json()) // Parse JSON response
    .then(data => renderTable(data)) // Render table with data
    .catch(error => console.error('Error fetching data:', error));
};

// Function to render table with data
function renderTable(data) {
  const tableBody = document.querySelector('.songTable tbody');
  tableBody.innerHTML = ''; // Clear existing table rows
  data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.artist_name}</td>
      <td>${item.song_title}</td>
      <td>${item.created_date}</td>
      <td>${item.requested_time}</td>
      <td>${item.status}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Trigger initial data fetch and table rendering when the page loads
document.addEventListener('DOMContentLoaded', doRefresh);

  
  

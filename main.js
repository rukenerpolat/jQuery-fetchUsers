$(document).ready(function() {
  const fonts = `
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet">`;
  
  $('head').append(fonts);
  
  const style = `
  <style>
    :root {
      --color-one: #F6BE34;
      --color-two: #4F70B6;
      --color-three: #16AB5D;
      --color-four: #AB8BC3;
      --color-five: #EFE2D2;    
    }

    body {
      background: var(--color-five);
      font-family: 'IBM Plex Mono', monospace;
      padding: 40px;
    }

    .ins-api-users {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
      
    .user-card {
      height: 240px;
      position: relative;
      border: 3px solid #000;
      box-shadow: 6px 6px 0 #000;
      border-radius: 0;
      background: var(--color-one);
      padding: 20px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      opacity: 0;
      transform: translateY(30px);
      animation: slideUp 0.5s forwards;
    }

    .user-card:nth-child(2n) {
      background: var(--color-two);
    }

    .user-card:nth-child(3n) {
      background: var(--color-three);
    }

    .user-card:hover {
      transform: translate(-5px, -5px);
      box-shadow: 12px 12px 0 #000;
    }
  
    .user-card h3 {
      font-family: 'Space Grotesk', sans-serif;
      margin: 0 0 10px;
      font-size: 1.4rem;
    }
   
    .user-card p {
      font-family: 'IBM Plex Mono', monospace;
      margin: 5px 0;
      font-size: 0.95rem;
    }

    .user-card a {
      color: #000;
      text-decoration: underline;
      font-weight: bold;
    }
    
    .user-card a:hover {
      text-decoration: none;
    }
  
    .delete-btn {
      position: absolute;
      bottom: 20px;
      left: 20px;
      background: #000;
      color: #fff;
      border: 2px solid #000;
      padding: 8px 16px;
      cursor: pointer;
      font-weight: bold;
      font-family: 'IBM Plex Mono', monospace;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.3s ease, transform 0.3s ease;
    }
  
    .delete-btn:hover {
      background: #fff;
      color: #000;
      transform: scale(1.1) rotate(-2deg);
      box-shadow: 4px 4px 0 #000;
    }
  
    .error {
      color: red;
      font-weight: bold;
    }
  
    @keyframes slideUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  
    @media (max-width: 768px) {
      .ins-api-users {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      }
    }
  
    @media (max-width: 480px) {
      body {
        padding: 20px;
      }
    }
    </style>
  `;
  
  $('head').append(style);
  //CSS END
    
  const container = $('.ins-api-users');
  const STORAGE_KEY = 'users_data';
  const EXPIRY_KEY = 'users_data_expiry';
  
  function saveToLocalStorage(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    const expiry = new Date().getTime() + 24 * 60 * 60 * 1000; 
    localStorage.setItem(EXPIRY_KEY, expiry);
  }
  
  function loadFromLocalStorage() {
    const expiry = localStorage.getItem(EXPIRY_KEY);
    
    if (expiry && new Date().getTime() < expiry) {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    }
    return null;
  }
  
  function removeUserFromLocalStorage(id) {
    let users = loadFromLocalStorage();
    if (users) {
      users = users.filter(user => user.id !== id);
      saveToLocalStorage(users);
    }
  }
  
  function renderUsers(users) {
    container.empty();
    if (users.length === 0) {
      container.append('<p>Users not found!</p>');
      return;
    }
    users.forEach(user => {
      const card = $(`
        <div class="user-card" data-id="${user.id}">
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Adres:</strong> ${user.address.street}, ${user.address.city}</p>
          <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
          <button class="delete-btn">Delete 🗑️</button>
        </div>
      `);
      
      card.find('.delete-btn').click(function() {
        card.remove();
        removeUserFromLocalStorage(user.id);
      });
      
      container.append(card);
    });
  }
  
  function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
      if (!response.ok) {
        throw new Error('Could not reach the API!');
      }
      return response.json();
    })
    .then(data => {
      saveToLocalStorage(data);
      renderUsers(data);
    })
    .catch(err => {
      container.html(`<p class="error">Error: ${err.message}</p>`);
    });
  }
  
  const localData = loadFromLocalStorage();
  
  if (localData) {
      renderUsers(localData);
  } else {
      fetchUsers();
  }
});
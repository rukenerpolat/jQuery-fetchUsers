<h1 align="center">jQuery | API Users</h1>

<div align="center">

🌐 [View Live Page](https://jquery-fetchusers.netlify.app/)  

</div>

This is a simple front-end practice project built with **HTML** and **jQuery** to fetch, display and manage user data from a public API.  

<img width="1920" height="994" alt="hw1" src="https://github.com/user-attachments/assets/94eff771-7ef5-449e-824e-31a6bf862980" />

It uses **Neo Brutalism** inspired design, all styles and fonts are injected dynamically with JavaScript.

<img width="1898" height="352" alt="hw" src="https://github.com/user-attachments/assets/bf9b66e4-4f4d-4bfd-8e36-43ee43e9b564" />

## Features

- **Fetch Users:** Gets user data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) using **Fetch API**.
- **Promise-based:** Uses native **Promise** (`fetch` + `.then` / `catch`) or **async/await** to handle asynchronous flow.
- **Error Handling:** If the API is unreachable, shows a clear error message.
- **Caching:** Saves fetched user data in `localStorage` for **1 day** to avoid unnecessary API requests.
- **Dynamic UI:** Renders user cards with:
  - Name
  - Email
  - Address (street, city)
  - Website link (clickable)
- **Delete:** Users can be removed individually — deletion updates `localStorage` as well.
- **Responsive:** Mobile-friendly grid layout.
- **One File Control:** All CSS, Google Fonts and UI logic are injected and handled inside the JS file.

##  Tech Used

> **main.js** <-- All logic here (styles, fonts, API, render)

- HTML5
- CSS3 
- jQuery (Fetch API, localStorage)


```
HTML only includes:

<div class="ins-api-users"></div>
```

## Design

- Inspired by **Neo Brutalism:** bold outlines, solid color blocks, shadow offset.    
- Fonts: [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) for body text, [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) for headings.    


<br>

<b><em>Ruken ERPOLAT</em></b>

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-827a67?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/rukenerpolat)
[![Medium](https://img.shields.io/badge/-Medium-827a67?style=flat&logo=medium&logoColor=white)](https://medium.com/@rukenerpolat)
[![GitHub](https://img.shields.io/badge/-GitHub-827a67?style=flat&logo=github&logoColor=white)](https://github.com/rukenerpolat)

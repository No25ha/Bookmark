const nameInput = document.getElementById('site_name');
const urlInput = document.getElementById('site_url');
const tableBody = document.getElementById('bookmarksTable');

let bookMarks = [];
if (localStorage.getItem('bookmarks')) {
  bookMarks = JSON.parse(localStorage.getItem('bookmarks'));
  displayBookmarks();
}

function addBookmark() {  
  const bookMark = {
    name: nameInput.value,
    url: urlInput.value
  };  
  bookMarks.push(bookMark);  
  localStorage.setItem('bookmarks', JSON.stringify(bookMarks));  
  displayBookmarks();
  nameInput.value="" 
  urlInput.value="" 
}

function displayBookmarks() {
  tableBody.innerHTML = '';
  bookMarks.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>      
      <td><a href="${item.url}" target="_blank" class="visit-btn">Visit</a></td>
      <td><button onclick="deleteBookmark(${index})" class="delete-btn">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });
}


function deleteBookmark(index) {  
  bookMarks.splice(index, 1);  
  localStorage.setItem('bookmarks', JSON.stringify(bookMarks));  
  displayBookmarks();
}


document.getElementById('submitBtn').addEventListener('click', addBookmark);

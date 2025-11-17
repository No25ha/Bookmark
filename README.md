# 🔖 Bookmarks Manager

A simple JavaScript application that allows users to add, display, and delete website bookmarks.  
The app uses **LocalStorage** to save bookmarks so they remain even after refreshing the page.

---

## 🚀 Features

- Add a website name and URL.
- Display all saved bookmarks in a table.
- Open saved websites in a new tab using the **Visit** button.
- Delete any bookmark using the **Delete** button.
- Automatically saves all bookmarks in **localStorage**.
- Restores saved bookmarks when the page is reloaded.

---

## 🛠️ Technologies Used

- **HTML**
- **CSS**
- **JavaScript (Vanilla JS)**
- **LocalStorage**

---

## 📌 How It Works

1. When the page loads:
   - The app checks if there are saved bookmarks in **localStorage**.
   - If found, they are displayed in the table.

2. When a user adds a bookmark:
   - The bookmark (name + URL) is added to the list.
   - The list is saved in `localStorage`.
   - The table updates automatically.

3. When deleting a bookmark:
   - It is removed from the array.
   - `localStorage` is updated.
   - The table refreshes.

---

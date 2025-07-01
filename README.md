# 🎨 Background Color Changer App – JavaScript

A simple and interactive color changer web app built using **HTML, CSS, and JavaScript**.  
Users can click on different color buttons to dynamically change the background color of the page.

---

## 🚀 Features

- Interactive UI with multiple color buttons  
- Real-time background color update  
- Uses JavaScript **event handling** and **DOM manipulation**  
- Logic implemented using `if-else` conditions

---

## 🧠 How It Works

Each color button has a unique `id` (like `"red"`, `"blue"`, `"yellow"` etc).  
Using JavaScript:

1. All buttons are selected using `querySelectorAll`.
2. A `click` event listener is attached to each button.
3. When a button is clicked:
   - The `event gives access to the clicked element.
   - `btnid` tells us which button was clicked.
   - Based on that `id`, we use `if-else` statements to check the color.
   - The `body`'s background color is then updated using:
     ```js
     body.style.backgroundColor = "#a7c957";
     ```

---

## 📦 Technologies Used

- HTML
- CSS
- JavaScript

---

## 📸 Sample Use Case

Clicking the "Blue" button immediately changes the background to blue.  
Each color button works the same way by targeting its own unique color.

---

## 💡 Learning Outcomes

- Handling DOM elements using JavaScript
- Using `forEach()` and `addEventListener()`  
- Understanding `event` objects (`e.target.id`)
- Applying `if-else` logic in UI interactivity

---

## 🧑‍💻 Author

Made with ❤️ by Syed AhmedShah

---

## 📃 License

This project is free to use


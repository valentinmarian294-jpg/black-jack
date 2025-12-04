[readme.md](https://github.com/user-attachments/files/23943308/readme.md)
# 🎰 Blackjack Arcade – JavaScript DOM Game

A retro–arcade style Blackjack game built using **HTML**, **CSS**, and **Vanilla JavaScript**, focusing on DOM manipulation, game logic, and user interaction.  
The game includes player vs. dealer logic, Ace value adjustment, score tracking, hidden dealer card behavior, and a full arcade-inspired UI.

---

## 🎯 Project Elevator Pitch

### **What is your project?**
A fully interactive Blackjack game where the player competes against a computer dealer, with classic casino rules and a neon arcade visual style.

### **How does it work?**
- The player presses **Start Game**, receives two cards, and chooses **Hit** or **Stand**.  
- The dealer reveals a hidden card and draws automatically using Blackjack rules.  
- The game announces the winner and tracks the score for both sides.  
- The **Restart** button returns the user to the start screen and resets the round.

### **Why did you choose it?**
I chose Blackjack because:
- I chose this project as a challenge to test myself.
- I enjoy games and wanted to build something both fun and visually appealing.

---

## 🕹️ Game Features

### ✔ Core Features
- Player vs Dealer gameplay  
- Hit & Stand mechanics  
- Dealer automatically plays according to Blackjack rules  
- Correct Ace logic (11 → 1 when necessary)  
- Hidden dealer card that flips on Stand  
- Score tracking (Player vs Dealer)  
- Restart and start screens  
- Retro neon arcade UI  

---

## 🌟 Extra Features
- Full animated neon-retro design  
- Flexbox layout for adaptive card placement  
- Drop-shadow glowing card effect  
- Prevents input when the round ends  
- Cleaner modular Ace-handling logic  

---

## 🤖 AI Usage Log
I used ChatGPT during the project for:

### **Tools / Prompts Used**
- Debugging issues with the **Ace value logic**  
- Fixing the **hidden dealer card bug**  
- Helping structure my functions and event listeners  
- Designing and improving the CSS arcade theme  
- Help writing this **README.md**  

### **How AI helped**
AI accelerated the project by:
- Catching syntax errors  
- Offering best practices for organizing the game logic  
- Explaining DOM manipulation behavior  
- Improving UI design consistency  

> All code was written and tested manually after receiving the AI suggestions.

---

## 🔗 Inspiration Sources
I studied these projects to understand Blackjack logic and structure:

- https://codepen.io/tlacerte/pen/qemZbv?editors=0010  
- https://www.thatsoftwaredude.com/content/6417/how-to-code-blackjack-using-javascript  
- https://codesandbox.io/p/sandbox/javascript-beginner-tutorial-blackjack-epegw?file=%2Fsrc%2Findex.js%3A12%2C10

---

## 🧩 Technical Challenge

### **What was the hardest technical problem?**
Handling the **Ace logic** and the **hidden dealer card** at the same time:
- The Ace must dynamically switch between **11 and 1**  
- The dealer’s hidden card must be counted but not displayed  
- DOM and game state must stay in sync

### **How I solved it**
- Created a structured Ace-adjustment loop  
- Stored the dealer’s hidden card object separately  
- Revealed the hidden card only after the Stand action  
- Carefully reset all variables during Restart  

---

## ❌ Big Mistake

### **What was the biggest mistake?**
I initially reused variable names incorrectly (e.g., mixing image paths and card objects).  
This broke the dealer’s hidden card feature and caused undefined values.

### **What did you learn?**
- Always separate **data** (card object) from **presentation** (image path).  
- Reset **all game state variables** carefully between rounds.  
- Consistent naming prevents 80% of bugs.

---

## 🎬 Demo Slide
**DEMO:**  
(Add your project link here once deployed)

---

## 📄 Final Presentation Slides (Summary)

### **1. Elevator Pitch**
- What the game is  
- How it works  
- Why I built it  

### **2. Technical Challenge**
- Hardest issue: Ace logic + hidden dealer card  
- How it was solved  

### **3. Big Mistake**
- Mismanaging variable names  
- Learning: keep data and UI separate  
---

## 🏁 Conclusion
Building this Blackjack game helped me understand:
- Game state logic  
- DOM updates  
- Event-driven programming  
- UI/UX consistency  
- Debugging real gameplay logic  

A fun and challenging first module project!


# Todo List API (Frontend-Only)

## Overview
This is a beginner-friendly **frontend-only fake API project** built with **HTML, CSS, and JavaScript**.  
Since I don’t have a backend hosting service, the project simulates a simple API using JavaScript functions.  
- `app.js` contains "backend" functions that mimic API endpoints.  
- `db.js` contains "database" functions returning sample data.  
---

## Project Structure
project/
├─ index.html # login HTML file
├─ dashboard.html # Protected main HTML file after login 
├─ style.css # global styles
├─ app.js # Frontend
├─ backend.js # Fake backend logic
├─ auth.js # fake JWT, login etc
├─ db.js # Simulated database functions


---

## How to Run Locally
You **cannot open the files directly** in the browser (`file://`) because browsers block modules and fetch requests due to CORS.  

To run the project locally:

### Option 1: VSCode Live Server
1. Install the **Live Server** extension in VSCode.  
2. Open `index.html` with Live Server.  
3. Your project will run at `http://127.0.0.1:5500` (or similar).  

### Option 2: Python HTTP Server
If you have Python installed, run:
```bash
cd /path/to/project
python3 -m http.server 5500
```
Then open 
``` http://localhost:5500
```


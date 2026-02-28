# 📊 Assignment 3 – State Statistics Management API

## 📌 Objective
Build a complete REST API using Express.js that manages statistical data of Indian states using an in-memory JSON array.

This API allows you to:
- View states data
- Add new state
- Update state statistics
- Delete states using different conditions

No database is used.

---

## 🧾 State Structure

Each state looks like this:

{
  id: 1,
  name: "Gujarat",
  population: 63872399,
  literacyRate: 78.03,
  annualBudget: 243965,
  gdp: 21000000
}

---

## 📦 Sample Data

```js
const states = [
  { id: 1, name: "Gujarat", population: 63872399, literacyRate: 78.03, annualBudget: 243965, gdp: 21000000 },
  { id: 2, name: "Maharashtra", population: 112374333, literacyRate: 82.34, annualBudget: 340000, gdp: 35000000 },
  { id: 3, name: "Kerala", population: 33406061, literacyRate: 94.00, annualBudget: 150000, gdp: 12000000 },
  { id: 4, name: "Bihar", population: 104099452, literacyRate: 61.80, annualBudget: 261885, gdp: 6500000 }
];
```

---

## 🚀 Technologies Used
- Node.js
- Express.js
- CORS Middleware
- In-Memory JSON Array

---

## ▶️ How to Run Locally

1. Clone Repository
```
git clone https://github.com/TajaparaDhruva/node.js_assignment/tree/main/03
```

2. Go to project folder
```
cd Assignment_3
```

3. Install dependencies
```
npm install
```

4. Run server
```
node index.js
```

Server runs on:
```
http://localhost:3000
```

---

## 📚 API Routes

### ✅ GET Routes

1. Get All States  
GET /states  
Status: 200  

2. Get State by ID  
GET /states/:id  
Status: 200 or 404  

3. Get State with Highest GDP  
GET /states/highest-gdp  
Status: 200  

---

### ✅ POST Route

4. Add New State  
POST /states  

Body Example:
```
{
  "name": "Haryana",
  "population": 25351462,
  "literacyRate": 75.55,
  "annualBudget": 180000,
  "gdp": 10000000
}
```

Status: 201  

---

### ✅ PUT Routes

5. Replace Entire State  
PUT /states/:id  

6. Update Budget Only  
PUT /states/:id/budget  

7. Update Population Only  
PUT /states/:id/population  

Status: 200 or 404  

---

### ✅ PATCH Routes

8. Update Literacy Rate  
PATCH /states/:id/literacy  

9. Update GDP  
PATCH /states/:id/gdp  

10. Update Any Field  
PATCH /states/:id  

Status: 200  

---

### ✅ DELETE Routes

11. Delete State by ID  
DELETE /states/:id  
Status: 204 or 404  

12. Delete State by Name  
DELETE /states/name/:stateName  

13. Delete Low Literacy States  
DELETE /states/low-literacy/:percentage  

Example Response:
```
{
  "deletedCount": 2
}
```

---

## 📊 Status Codes Used
200 → Success  
201 → Created  
204 → Deleted  
404 → Not Found  

---

## 🧪 Testing
Use Postman to test all routes.

---

## 📤 Submission Links

GitHub Repo Link: https://github.com/TajaparaDhruva/node.js_assignment/tree/main/03  

Postman Docs Link: https://documenter.getpostman.com/view/50839388/2sBXcHhyy6

Render Deployment Link: https://node-js-assignment-2-0thk.onrender.com/states

---

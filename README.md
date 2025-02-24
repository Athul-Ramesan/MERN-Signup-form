# 📌 MERN-Signup-Form  

A simple **MERN** stack application with **React (TypeScript) frontend** and **Express (TypeScript) backend**, allowing users to **register and retrieve saved data**. Data is stored in **MongoDB Atlas**.  

## 🚀 Features  
✅ User Registration (Signup Form)  
✅ Fetching Registered Users' Data  
✅ Redux Toolkit for State Management  
✅ Tailwind CSS for Styling  
✅ TypeScript for Type Safety  

## 🛠 Tech Stack  
- **Frontend:** React (Vite), TypeScript, Redux Toolkit, Tailwind CSS  
- **Backend:** Node.js, Express, TypeScript, Mongoose  
- **Database:** MongoDB Atlas  

---

## 📂 Folder Structure  
```
/mern-signup-form
  ├── backend/    # Express.js + TypeScript Backend
  ├── frontend/   # React + TypeScript Frontend
```

---

## 🔧 Installation & Setup  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/yourusername/mern-signup-form.git
cd mern-signup-form
```

### 2️⃣ Backend Setup  
```bash
cd backend
npm install
```
Create a **`.env`** file in the `backend/` directory and add:  
```
CLIENT_URL=http://localhost:5173
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
Run the backend:  
```bash
npm run dev
```

### 3️⃣ Frontend Setup  
```bash
cd ../frontend
npm install
```
Create a **`.env`** file in the `frontend/` directory and add:  
```
VITE_API_BASE_URL=http://localhost:5000
```
Run the frontend:  
```bash
npm run dev
```

---

## 🔄 API Endpoints  

| Method | Endpoint       | Description          |
|--------|--------------|----------------------|
| POST   | `/api/signup` | Register a new user |
| GET    | `/api/users`  | Fetch all users     |

---

## 🎯 Future Improvements  
🔹 Add Authentication (JWT)  
🔹 Improve UI/UX  

---

## 🤝 Contributions  
Contributions are welcome! Feel free to fork the repo and submit a PR.  

---

## 📜 License  
MIT License  


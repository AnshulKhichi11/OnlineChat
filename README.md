# 🗨️ Online Chat App

A real-time chat application built using **MERN Stack** (MongoDB, Express.js, React.js, Node.js) with **Socket.io** for live messaging and seamless communication.

---

## 🚀 Features
✅ Real-time messaging with **Socket.io** for instant communication  
✅ Secure user authentication with **JWT**  
✅ **One-on-one & Group Chats** with message history  
✅ **Online/Offline Status Indicators**  
✅ **Typing Indicators** for a better user experience  
✅ **Read Receipts & Message Timestamps**  
✅ Responsive UI for **Mobile & Desktop**  
✅ **Profile Customization & User Avatars**  
✅ **Optimized for performance & scalability**  

---

## 🛠 Tech Stack

- **Frontend:** React.js, Tailwind CSS, Redux (for state management)  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB with Mongoose  
- **WebSockets:** Socket.io  
- **Authentication:** JWT (JSON Web Token)  
- **Storage:** Cloudinary (for profile images & attachments)  
- **Deployment:** Vercel (Frontend), Render/Heroku (Backend)  

---





### 3️⃣ Set up environment variables  
Create a **.env** file in the server folder:  
```ini
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
SOCKET_PORT=4000
CLOUDINARY_URL=your_cloudinary_api_url
```

### 4️⃣ Start the development server  
```bash
# Backend
cd server
npm run dev

# Frontend
cd client
npm start
```

### 5️⃣ Open in browser  
```
http://localhost:3000
```

---

## 🏗 Folder Structure
```
/online-chat-app
  ├── /client  (React frontend)
  ├── /server  (Node.js backend)
  ├── /models  (MongoDB schemas)
  ├── /routes  (API endpoints)
  ├── /controllers  (Business logic)
  ├── /socket  (Socket.io events)
  ├── /utils  (Helper functions)
  ├── .env (Environment variables)
  ├── package.json
  ├── README.md
```





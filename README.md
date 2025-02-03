# NodeJs-Express Real Time Chat Application Project 💬🚀

## Project Overview 🌟
Hello everyone! I'm Berkant Kaya, and I'm here with a brand new content. Today, I've decided to create a **Real Time Chat** application that has been gaining a lot of interest lately. This application will involve both **frontend** and **backend** parts, establishing connections using **Socket.io** on both sides, utilizing **Node.js** and **Express**. 🎉

The aim of this application is to demonstrate how to build real-time applications using sockets. Let's start without wasting any more time! ⌛

## 📸 Screenshots 📸

![]()
-

## Setting Up the Project ⚙️
1. **Create Project Structure** 📁
   - Create an empty folder.
   - Inside this folder, create `server` and `client` directories.

2. **Split Terminal** 🔄
   - Split the terminal into two parts, one for the server and the other for the client.

3. **Server Setup** 🖥️
   - In the server directory, create a main JavaScript file named `index.js`.
   - Run `npm init -y` to create a `package.json` file.
   - Install necessary packages:
     ```bash
     npm install express nodemon socket.io cors
     ```

4. **Client Setup** 🌐
   - For the frontend, use **Tailwind CSS**.
   - Create the React app in the client directory using:
     ```bash
     npx create-react-app .
     ```

## Development 🛠️
- **Server Code**: 
   - Import Express and CORS.
   - Create an Express app and set up CORS middleware.
   - Set up Socket.io for real-time communication.
   - Make the server listen on port 5000.

- **Frontend Code**:
   - Create components for the home screen and chat interface.
   - Allow users to enter their names and room codes to connect.
   - Implement messaging functionalities using Socket.io.

## Features ✨
- Real-time messaging between users. 💬
- Ability to enter specific chat rooms using room codes. 🔑
- Distinction between messages sent by the current user and incoming messages from others. 🔄

## Conclusion 🎉
This project demonstrates real-time chat functionalities using Socket.io, combining backend and frontend development. It shows how users can interact through a simple yet functional chat interface. 










npm i express nodemon socket.io cors

# Offline-First Notes Application with Auto-Sync Indicator

## 📌 Project Overview
The **Offline-First Notes Application** is a React-based web application designed to work seamlessly in both **online and offline environments**.  
The application allows users to create, edit, and delete notes even when there is no internet connection. Each note clearly displays its **synchronization status** to improve user awareness and experience.

The project demonstrates practical usage of **React hooks**, **localStorage**, **custom hooks**, and **network status detection** while following clean component architecture.

---

## 🎯 Objective
- Build an offline-first React application
- Handle network connectivity changes gracefully
- Simulate data synchronization
- Improve understanding of React hooks and browser APIs

---

## 🚀 Features

### Core Features
- Create, edit, and delete notes
- Each note includes:
  - Title
  - Content
  - Last updated timestamp
- Offline support using browser `localStorage`
- Automatic sync simulation when internet is restored
- Per-note sync status:
  - ✅ Synced
  - ⏳ Pending Sync
- Full application functionality available offline

### Connectivity Features
- Detect internet status using `navigator.onLine`
- Global **Online / Offline** status indicator
- Auto-sync notes after **2 seconds** when connection is restored

---

## 🛠️ Technical Implementation

### Technologies Used
- React (Functional Components)
- JavaScript (ES6+)
- Tailwind CSS
- Browser APIs (localStorage, navigator.onLine)

### React Concepts Used
- `useState`
- `useEffect`
- Custom React Hook for online status detection
- Component-based architecture

---

## 🧱 Application Structure

OfflineNotesApp/
│
├── src/
│ ├── components/
│ │ ├── NoteForm.jsx
│ │ ├── NoteList.jsx
│ │ ├── NoteCard.jsx
│ │ └── StatusIndicator.jsx
│ │
│ ├── hooks/
│ │ └── useOnlineStatus.js
│ │
│ ├── App.jsx
│ ├── index.js
│ └── index.css


---

## ⚙️ Functional Requirements Mapping

| Requirement | Implementation |
|------------|---------------|
Create, edit, delete notes | React state management |
Offline storage | localStorage |
Detect internet connectivity | navigator.onLine |
Sync status per note | Synced / Pending Sync flag |
Auto-sync | useEffect with 2-second timeout |
Global online/offline indicator | Custom hook |

---

## ▶️ How to Run the Project

1. Clone or download the repository
2. Install dependencies  
   ```bash
   npm install

# AI Tools & React Seminar Website

This website template has been customized for the "Understanding AI Tools and Their Applications" seminar by M.K. Lingeshwarma, MCA - II.

## Features Implemented

### ✅ Content Updates
- **Hero Section**: Updated with seminar title and presenter information
- **Seminar Overview**: Replaced with AI tools importance and React framework benefits
- **Introduction Quote**: Added inspiring quote about AI tools
- **AI Tools Section**: Showcases chatbots, smart recommendations, and AI-powered tools
- **React Section**: Covers React fundamentals and "React Bits"
- **Conclusion Section**: Thank you message with download CTA

### ✅ Dark/Light Mode Toggle
- Theme toggle button added to navbar (desktop and mobile)
- Persistent theme selection using localStorage
- Full dark mode support across all sections

### ✅ Feedback Form Modal
- Exit-intent detection (mouse leave or page close)
- Collects: Username, Register Number, Email ID, Feedback Comments
- Firebase Firestore integration for data storage
- One submission per session using sessionStorage

## Firebase Setup Instructions

1. **Create a Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project" and follow the setup wizard
   - Enable Firestore Database in your project

2. **Get Your Firebase Config**
   - In Firebase Console, go to Project Settings
   - Scroll down to "Your apps" section
   - Click the web icon `</>` to add a web app
   - Copy the `firebaseConfig` object

3. **Update Configuration**
   - Open `src/lib/firebase.ts`
   - Replace the placeholder values with your actual Firebase config:
   ```typescript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

4. **Firestore Collection**
   - The feedback form automatically creates a `feedback` collection
   - Each submission includes: username, registerNumber, email, feedback, timestamp

## Design Principles

✅ **Preserved Elements**
- All original colors, gradients, and animations
- Responsive layout and mobile behavior
- Background effects and transitions
- Card animations and scroll effects

✅ **Content-Only Changes**
- Text replacements aligned with seminar topics
- Updated section headings and descriptions
- Modified CTAs to match seminar context

## Theme Toggle Usage

- **Desktop**: Theme toggle button appears in the navbar next to navigation links
- **Mobile**: Theme toggle button appears next to the hamburger menu
- **Persistence**: Theme preference is saved and restored on page reload

## Feedback Form Behavior

- Triggers on:
  - Mouse leaving viewport (top edge)
  - Attempting to close/refresh the page
- Prevents duplicate submissions per browser session
- Success message displayed after submission
- Form resets automatically after successful submission

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Technologies Used

- React + TypeScript
- Vite
- Tailwind CSS
- Firebase (Firestore)
- Lucide React (icons)
- Shadcn UI components

---

**Presenter**: M.K. Lingeshwarma, MCA - II  
**Topic**: Understanding AI Tools and Their Applications

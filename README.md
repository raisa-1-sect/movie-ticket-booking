---

#  Ticket Booking Portal*

This is a web application built using **Next.js**, **React**, and **Tailwind CSS** for a fictional movie ticket booking system. The app allows users to log in, browse movies, book tickets, and view their booking activity. The UI design is based on the provided mockups.

---

## **Features**

1. **Login Screen**:
   - Users can log in with hardcoded credentials:
     ```
     Username: gaston.toutant
     Password: 05111974
     ```
   - Displays an error message for invalid credentials.

2. **Booking Screen**:
   - Displays a list of event fetched dynamically from the OMDB API.
   - Includes a search bar to filter event in real-time.
   - Clicking on a event card navigates to the ticket selection screen.

3. **Selection Screen**:
   - Allows users to select ticket count, show time, and date for a événements.
   - "Book Ticket" button saves the booking details and redirects to the activity screen.

4. **Activity Screen**:
   - Displays a table of all booked tickets with details like movie name, ticket count, time, date, and total amount.

5. **Sidebar Navigation**:
   - Fixed sidebar with links to "Booking" and "Activity" pages.
   - Highlights the active page dynamically.

6. **Profile Section**:
   - Profile icon at the top-right corner.
   - Dropdown menu with a "Logout" option to clear session data and redirect to the login screen.

---

## **Tech Stack**

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **API Integration**: [OMDB API](http://www.omdbapi.com/)

---

## **Setup Instructions**

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/movie-ticket-booking.git
cd event-ticket-booking
```

### 2. Install Dependencies
Install required packages using `pnpm` (or `npm`):
```bash
pnpm install
```

### 3. Configure Environment Variables
1. Create a `.env.local` file in the root directory.
2. Add your OMDB API key to the file:
   ```env
   NEXT_PUBLIC_OMDB_API_KEY=your_api_key_here
   ```

### 4. Run the Development Server
Start the development server:
```bash
pnpm run dev
```
The app will be available at `http://localhost:5000`.

### 5. Build for Production
To build the app for production:
```bash
pnpm run build
```

---

## **Deployment**

The app is deployed on [Vercel](https://vercel.com/) (or Netlify). You can access it using this link:

[Deployed App Link](#)

---

## **Folder Structure**

ticket_booking/
├── app/
│   ├── __init__.py
│   ├── config.py
│   ├── models/
│   │   ├── __init__.py
│   │   ├── user.py
│   │   ├── event.py
│   │   └── booking.py
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── auth_routes.py
│   │   ├── event_routes.py
│   │   └── booking_routes.py
│   ├── utils/
│   │   ├── __init__.py
│   │   ├── auth.py
│   │   └── security.py
│   ├── templates/
│   │   └── (fichiers HTML si interface server-side)
│   └── static/
│       └── (CSS, JS, images)
├── migrations/ (si tu utilises Flask-Migrate)
├── .env
├── requirements.txt
├── run.py
└── README.md

---

## **API Integration**

The app uses the [OMDB API](http://www.omdbapi.com/) to fetch movie data dynamically.

### Example API Request:
```bash
http://www.omdbapi.com/?s=movie&apikey=${NEXT_PUBLIC_OMDB_API_KEY}&page=1
```

### Parameters Used:
- `s`: Tiket title to search for.
- `apikey`: Your OMDB API key (stored securely in `.env.local`).
- `page`: Pagination parameter (default is `1`).

---

## **Screenshots**

### Login Screen:
Login Screen

### Booking Screen:
Booking Screen

### Selection Screen:
Selection Screen

### Activity Screen:
Activity Screen

---

## **Contributing**

Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request.

---

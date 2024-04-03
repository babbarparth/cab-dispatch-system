# Scalar SDE Intern Cab System Task

This project is a web application developed using JavaScript, React, Node.js, and Tailwind CSS. It serves as a platform for managing cab bookings, calculating optimal routes, and estimating costs for users' trips. The system ensures efficient cab allocation, scheduling, and tracking, enhancing the overall user experience.

## Functionality

### Cab Booking Management
•⁠  ⁠Users can book cabs by specifying their email, source, and destination. <br>
•⁠  ⁠The system calculates the shortest possible time from the source to the destination, ensuring efficient routing. <br>
•⁠  ⁠Cab bookings are managed to prevent overlapping start and end times, eliminating scheduling conflicts.

<img width="1440" alt="Screenshot 2024-04-03 at 7 08 34 PM" src="https://github.com/babbarparth/scaler-dispatch-system/assets/98263947/677d8a22-f211-4342-af18-fe4940683cf8">


### Cab Pricing
•⁠  ⁠The system features 5 cabs with distinct pricing structures, defined as price per minute.<br>
•⁠  ⁠Estimated costs are calculated based on the selected cab and the duration of the trip.

### Tracking and Editing
•⁠  ⁠Administrators have access to cab booking details, facilitating visibility into current and upcoming trips.<br>
•⁠  ⁠Cab details, including pricing and availability, can be viewed and edited as needed.

## Deployment

•⁠  ⁠Frontend: The frontend of this application is deployed on [Vercel](https://vercel.com/). You can access it [here](https://scaler-dispatch-system.vercel.app/).<br>
•⁠  ⁠Backend: The backend is deployed on Render. 

## Environment Variables
•⁠  ⁠.env: Configuration file for environment variables.

```
VITE_APP_BASE_URL="https://scaler-dispatch-system-1.onrender.com/api/booking/allBookings"
# VITE_APP_BASE_URL="http://localhost:3000"
```
### Installation

```
https://github.com/babbarparth/scaler-dispatch-system
```

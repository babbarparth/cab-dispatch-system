# Scalar SDE Intern Cab System Task

This project is a web application developed using JavaScript, React, Node.js, NodeMailer, and Tailwind CSS. It serves as a platform for managing cab bookings, calculating optimal routes, and estimating costs for users' trips. The system ensures efficient cab allocation, scheduling, and tracking, enhancing the overall user experience.

## Functionality

### Cab Booking Management
•⁠  ⁠Users can book cabs by specifying their email, source, and destination. <br>
•⁠  ⁠The system calculates the shortest possible time from the source to the destination, ensuring efficient routing. <br>
•⁠  ⁠Cab bookings are managed to prevent overlapping start and end times, eliminating scheduling conflicts.

<img width="1000" alt="image" src="https://github.com/babbarparth/scaler-dispatch-system/assets/98263947/b5170910-01d8-43e0-92b1-5d6aabb51568">




### Cab Pricing
•⁠  ⁠The system features 5 cabs with distinct pricing structures, defined as price per minute.<br>
•⁠  ⁠Estimated costs are calculated based on the selected cab and the duration of the trip.

<img width="1000" alt="image" src="https://github.com/babbarparth/scaler-dispatch-system/assets/98263947/a2de9c81-f33b-4aba-be0c-1d9cc247f91e">


### Tracking and Editing
•⁠  ⁠Administrators have access to cab booking details, facilitating visibility into current and upcoming trips.<br>
•⁠  ⁠Cab details, including pricing and availability, can be viewed and edited as needed.

<img width="1000" alt="image" src="https://github.com/babbarparth/scaler-dispatch-system/assets/98263947/a88d5b72-3a85-42f8-a8d0-a6028522ce96">


## Deployment

•⁠  ⁠Frontend: The frontend of this application is deployed on [Vercel](https://vercel.com/). You can access the web application [here](https://scaler-dispatch-system.vercel.app/).<br>
•⁠  ⁠Backend: The backend is deployed on Render. 

## Tech Used:

```
Frontend/
├── React
├── Tailwind CSS


Backend/
├── Nodejs
├── NodeMailer
├── Express
├── Dijkstra Algorithm (used to calculate the shortest time between source and destination)
```

## Environment Variables
•⁠  ⁠.env: Configuration file for environment variables.

```
VITE_APP_BASE_URL="https://scaler-dispatch-system-1.onrender.com"
# VITE_APP_BASE_URL="http://localhost:3000"
```
### Installation

```
git clone https://github.com/babbarparth/scaler-dispatch-system
```
```
cd backend
```
```
npm install
```
```
npm start
```
##### Open New Terminal:
```
cd ..
```
```
cd scalar-dispatch-frontend
```
```
npm install
```
```
npm run dev
```

### Documentation
#### Scalar SDE task link: 
```
https://docs.google.com/document/d/1e6riWL2gKXFqv6lhRoKIHr3vtThfdW4rhsPmr5SWmu4/edit
```
#### Notion link: 
```
https://www.notion.so/Scaler-SDE-Intern-FullStack-Assignment-Cab-System-f8a00680c6b042d780282bf859ec2028?pvs=4
```

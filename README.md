# My Wallet

My Wallet is a finance manager that simplifies control of your revenues and expenses. With an intuitive interface, My Wallet allows you to quickly maintain full control of your personal finances.

<div style="backgroundcolor:black" align="center">
  
![My-Wallet-Print](https://github.com/FernandoM52/MyWallet-front/assets/81760656/1d403b29-7b2b-408e-8747-04136680f7ac)
</div>

## About this Project

My Wallet is a web application to help individuals efficiently manage their finances. With this app, users can effortlessly gain insights into their spending habits, track their income and expenses, and maintain a real-time balance overview. Whether you're looking to gain a better understanding of your financial choices or simply stay on top of your financial health, My Wallet provides the tools and insights you need.

<h3>Implemented features:</h3>

- Sign Up
- Login
- Logout
- List of all user transactions
- Add an expense
- Add an revenue

<h3>Next steps:</h3>

- Fix total users money show
- Edit an transaction
- Delete an transaction

<h3>Some observations about this App:</h3>

1. There is a feature on the main screen that shows the user's initial/total money, but it is fixed. So the value is not being calculated dynamically.

## Why

I've often looked for apps so I could manage my expenses and know exactly how much I spend on a certain type of thing, basically controlling my hard-earned money, but I've never been successful. So, with that in mind, I came up with the idea of ​​making my own finance management app!

My Wallet was my first Full-Stack project. It was also my second project using a non-relational database, which was a topic I was studying at the time and for that I found the choice of MongoDB interesting.

So, I'm very grateful to made it and share this project, hope be very useful to you. Enjoy! 

## Technologies

The following technologies were used to develop this project:

<div>
  
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
  ![React Router](https://img.shields.io/badge/React%20Router-CA4245.svg?style=for-the-badge&logo=React-Router&logoColor=white)
  ![Axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white)
  ![Env](https://img.shields.io/badge/.ENV-ECD53F.svg?style=for-the-badge&logo=dotenv&logoColor=black)
</div>


## How to run

To run this project in the development mode, you'll need to the server running locally on your machine. You can find the server and all the instructions to start the server <a href="https://github.com/FernandoM52/MyWallet-back" target="_blank">here<a/>.

<h3>Connecting the App with the Api</h3>

1. Follow the instructions on the <a href="https://github.com/FernandoM52/MyWallet-back" target="_blank">my-wallet-back</a> to have the server up and running on your machine.

<h3>Running</h3>

1. With the back-end up and running, clone this repository and install the dependencies:

```
git clone https://github.com/FernandoM52/MyWallet-front.git

cd MyWallet-front

npm i
```

2. Create a `/.env` file and add the environment variable `REACT_APP_API_URL` with the address where your api is running, like this:

```
REACT_APP_API_URL=http://localhost:3000
```

3. Run the front-end with:

```
npm start
```

import { useState, useEffect } from "react";
import Admindashbaord from "./Admindashboard";

const Login = () => {
  const [userName, setuserName] = useState("DJ@4");
  const [Password, setPassword] = useState("Dhunjam@2023");
  const [searchtext, setsearchtext] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [userData, setUserData] = useState([]);

  async function getUserInfo() {
    const apiUrl = "https://stg.dhunjam.in/account/admin/4";

    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        console.log("Data fetched successfully:", data);
        setLoading(false);
        setFetched(true);
        setUserData(data);
        // You can handle the response data here, such as storing the token in state or local storage
      } else {
        const errorData = await response.json();
        console.error("Unable to fetch data: ", errorData);
        // Handle error or display a message to the user
      }
    } catch (error) {
      console.error("Error during fetching data:", error);
      // Handle unexpected errors
    }
  }

  async function login() {
    // const data = await fetch("https://stg.dhunjam.in/account/admin/login");
    // const json = await data.json();
    // console.log(json);
    setLoading(() => true);
    const apiUrl = "https://stg.dhunjam.in/account/admin/login";
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          password: Password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login success:", data);
        getUserInfo();
        // You can handle the response data here, such as storing the token in state or local storage
      } else {
        const errorData = await response.json();
        console.error("Login failed:", errorData);
        // Handle error or display a message to the user
      }
    } catch (error) {
      console.error("Error during login:", error);
      // Handle unexpected errors
    }
  }

  return (
    <div className="head">
      {!loading && !fetched && (
        <div className="login">
          <div className="heading">Venue Admin Login</div>
          <input
            type="text"
            value={userName}
            className="input"
            placeholder="Search"
            onChange={(e) => {
              setuserName(e.target.value);
            }}
          />
          <input
            type="text"
            name="username"
            id="username"
            value={Password}
            placeholder="Password"
            className="input"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button className="login_btn" onClick={login}>
            Sign in
          </button>
          <div className="registration">New Registration?</div>
        </div>
      )}
      {loading && !fetched && (
        <div>
          <h3>Fetching Data, Please wait...</h3>
        </div>
      )}
      {userData.data==undefined ? <div>no</div> : console.log(userData.data.name, "hii")}
      {!loading && fetched && <Admindashbaord userData={userData}/>}
    </div>
  );
};

export default Login;

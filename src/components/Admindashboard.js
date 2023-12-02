import { useState, useEffect } from "react";
import { FaRupeeSign } from "react-icons/fa";

const AdminDashboard = (props) => {
  const [selectedOption, setSelectedOption] = useState(
    props.userData?.data?.charge_customers === true ? "option1" : "option2"
  );
  const [amount, setAmount] = useState(
    props.userData?.data?.amount?.category_6
  );
  const [category_7, setcategory_7] = useState(
    props.userData?.data?.amount?.category_7
  );
  const [category_8, setcategory_8] = useState(
    props.userData?.data?.amount?.category_8
  );
  const [category_9, setcategory_9] = useState(
    props.userData?.data?.amount?.category_9
  );
  const [category_10, setcategory_10] = useState(
    props.userData?.data?.amount?.category_10
  );
  // const [category_10, setcategory_10] = useState(props.userData?.data?.amount?.category_10);
  // const [name, setname]= useState("Social");

  // useEffect(()=>{
  //   if(props.userData?.data?.charge_customers===true)setSelectedOption("Yes")
  //   else setSelectedOption("No")
  //   console.log(setSelectedOption)
  // })
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  async function updateData() {
    const apiUrl = "https://stg.dhunjam.in/account/admin/4";
    try {
      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          amount: {
            category_6: 100,
          },
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Update success:", data);
        // You can handle the response data here, such as storing the token in state or local storage
      } else {
        const errorData = await response.json();
        console.error("Update failed:", errorData);
        // Handle error or display a message to the user
      }
    } catch (error) {
      console.error("Error during update:", error);
      // Handle unexpected errors
    }
  }

  return (
    <div className="dashboard">
      {console.log(props.userData.data.name)}
      {/* {props.data==undefined ? setname(name):setname(props.data.name)} */}
      <div className="heading">
        {props.userData?.data?.name}, {props.userData?.data?.location} on Dhun
        Jam
      </div>

      <div className="customer">
        <div className="customer_div">
          Do you want to change your customers for requestiong songs?
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
              className="radio_btn"
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
              className="radio_btn"
            />
            No
          </label>
        </div>
      </div>

      {selectedOption === "option1" ? (
        <>
          <div className="customer">
            <div className="customer_div">Custom song request amount-</div>
            <input
              type="text"
              name="username"
              id="username"
              value={amount}
              placeholder=""
              className="input amount_input"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>

          <div className="customer">
            <div className="customer_div">
              Regular song request amounts, from high to low-
            </div>
            <div>
              <input
                type="text"
                name="username"
                value={category_7}
                id="username"
                placeholder=""
                className="input amounts_input"
                onChange={(e) => {
                  setcategory_7(e.target.value);
                  //   const div1 = document.getElementById('div1');
                  //   div1.style.height = category_6 * 10 + 'px';
                }}
              />

              <input
                type="text"
                name="username"
                value={category_8}
                id="username"
                placeholder=""
                className="input amounts_input"
                onChange={(e) => {
                  setcategory_8(e.target.value);
                }}
              />

              <input
                type="text"
                name="username"
                value={category_9}
                id="username"
                placeholder=""
                className="input amounts_input"
                onChange={(e) => {
                  setcategory_9(e.target.value);
                }}
              />

              <input
                type="text"
                name="username"
                value={category_10}
                id="username"
                placeholder=""
                className="input amount1_input"
                onChange={(e) => {
                  setcategory_10(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="cal_div">
            <FaRupeeSign className="rupees" />
            <div className="graph">
              <div className="bars">
                
                  <div
                    id="div1"
                    className="bar"
                    style={{ height: `${category_7}px` }}
                  ></div>
              

              
                  <div
                    id="div2"
                    className="bar"
                    style={{ height: `${category_8}px` }}
                  ></div>
               
               
                  <div
                    id="div3"
                    style={{ height: `${category_9}px` }}
                    className="bar"
                  ></div>
               
               
                  <div
                    id="div4"
                    style={{ height: `${category_10}px` }}
                    className="bar"
                  ></div>
               
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="customer">
            <div className="customer_div save_btn1">
              Custom song request amount-
            </div>
            <input
              type="text"
              name="username"
              id="username"
              value={amount}
              placeholder=""
              className="input amount_input save_btn1"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>

          <div className="customer">
            <div className="customer_div save_btn1">
              Regular song request amounts, from high to low-
            </div>
            <div>
              <input
                type="text"
                name="username"
                value={category_7}
                id="username"
                placeholder=""
                className="input amounts_input save_btn1"
                onChange={(e) => {
                  setcategory_7(e.target.value);
                  //   const div1 = document.getElementById('div1');
                  //   div1.style.height = category_6 * 10 + 'px';
                }}
              />

              <input
                type="text"
                name="username"
                value={category_8}
                id="username"
                placeholder=""
                className="input amounts_input save_btn1"
                onChange={(e) => {
                  setcategory_8(e.target.value);
                }}
              />

              <input
                type="text"
                name="username"
                value={category_9}
                id="username"
                placeholder=""
                className="input amounts_input save_btn1"
                onChange={(e) => {
                  setcategory_9(e.target.value);
                }}
              />

              <input
                type="text"
                name="username"
                value={category_10}
                id="username"
                placeholder=""
                className="input amount1_input save_btn1"
                onChange={(e) => {
                  setcategory_10(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="cal_div">
            <FaRupeeSign className="rupees" />
            <div className="graph">
              <div className="bars">
                <div
                  id="div1"
                  className="bar save_btn1"
                  style={{ height: `${category_7}px` }}
                ></div>

                <div
                  id="div2"
                  className="bar save_btn1"
                  style={{ height: `${category_8}px` }}
                ></div>

                <div
                  id="div3"
                  style={{ height: `${category_9}px` }}
                  className="bar save_btn1"
                ></div>

                <div
                  id="div4"
                  style={{ height: `${category_10}px` }}
                  className="bar save_btn1"
                ></div>
              </div>
            </div>
          </div>
        </>
      )}

      {amount > 100 &&
      category_7 > 80 &&
      category_8 > 60 &&
      category_9 > 40 &&
      category_10 > 20 ? (
        <button className="customer save_btn" onClick={updateData}>
          Save
        </button>
      ) : (
        <button className="customer save_btn save_btn1" onClick={updateData}>
          Save
        </button>
      )}
    </div>
  );
};

export default AdminDashboard;

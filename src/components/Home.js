import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

const Home = () => {
  let initialValues = {};
  const initialData = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();


  const initialErrors = {
    firstNameError: "",
    lastNameError: "",
    phoneError: "",
    emailError: "",
    passwordError: "",
  };

  // useEffect(()=>{
  //   console.log(params)
  //   getProductDetails()
  // },[])

  // const getProductDetails = async() =>{
  //   let result = await fetch(`http://localhost:3000/list/${params.id}`)
  //   setValues(result.initialValues)
  // }

  const [errors, setErrors] = useState(initialErrors);

  if (params.id !== undefined) {
    initialValues = initialData[params.id];
  } else {
    initialValues = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
    };
  }

  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    for (const data in values) {
      if (!values[data]) {
        isValid = false;
        errors[`${data}Error`] = "This field is required";
      } else {
        isValid = true;
        errors[`${data}Error`] = "";

        //Phone Validation
        if (data === "phone") {
          const checkPhone = /^[0-9]+$/;
          if (!values[data].match(checkPhone) || values[data].length < 10) {
            isValid = false;
            errors[`${data}Error`] = "Enter valid 10 numbers";
          } else {
            isValid = true;
          }
        }

        //Email Validation
        if (data === "email") {
          const checkEmail =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!values[data].match(checkEmail)) {
            errors[`${data}Error`] = "Enter valid email";
            isValid = false;
          } else {
            isValid = true;
            errors[`${data}Error`] = "";
          }
        }

        // Password validation
        // if (data === "password") {
        //   const checkPassword =
        //     /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
        //   if (!values[data].match(checkPassword)) {
        //     isValid = false;
        //     errors[`${data}Error`] =
        //       "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
        //   } else {
        //     isValid = true;
        //     errors[`${data}Error`] = "";
        //   }
        // }
      }
    }

    setErrors({
      ...errors,
    });

    if (isValid) {
      if (params.id !== undefined) {
        initialData[params.id] = values;
        dispatch({ type: "UPDATE_USER", payload: initialData });
        navigate("/list");
      } else {
        dispatch({ type: "ADD_USER", payload: [...initialData, values] });
        navigate("/list");
      }
    } else {
      console.log("Form have errors");
    }  
  };

  return (
    <form className="form" onSubmit={HandleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        defaultValue={initialValues.firstName}
        onChange={handleChange}
      />
      <div className="error-txt">{errors.firstNameError}</div>

      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        defaultValue={initialValues.lastName}
        onChange={handleChange}
      />
      <div className="error-txt">{errors.lastNameError}</div>

      <input
        type="tel"
        placeholder="Phone"
        name="phone"
        maxLength="10"
        defaultValue={initialValues.phone}
        onChange={handleChange}
      />
      <div className="error-txt">{errors.phoneError}</div>

      <input
        type="text"
        placeholder="Email"
        name="email"
        defaultValue={initialValues.email}
        onChange={handleChange}
      />
      <div className="error-txt">{errors.emailError}</div>

      {/* <input
        type="password"
        placeholder="Password"
        name="password"
        defaultValue={initialValues.password}
        onChange={handleChange}
      />
      <div className="error-txt">{errors.passwordError}</div> */}

      <textarea 
        placeholder="Text Us"
        name="msg"
        defaultValue={initialValues.msg}
        onChange={handleChange}
        maxLength="100" />

     <button onClick={HandleSubmit}>Submit</button> 
     
    </form>
  );
};

export default Home;


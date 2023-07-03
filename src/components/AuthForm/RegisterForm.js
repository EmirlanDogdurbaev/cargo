import { useDispatch } from "react-redux";
import classes from "./AuthForm.module.scss";
import { useState } from "react";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import { signupShipper } from "../../store/AuthSlice";
import { signupCompany } from "../../store/CompanySlice";
import { signupDriver } from "../../store/DriverSlice";
import { fake_dot_numbers } from "./fake_dot_numbers";

const RegisterForm = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Access the navigate function

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [company_name, setCompany_name] = useState("");
  const [company_address, setCompany_address] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [bank_account, setBank_account] = useState("");
  const [dot_number, setDot_number] = useState("");
  const [driverLicense, setDriverLicense] = useState(null);
  const [straxovka, setStraxovka] = useState(null);
  const [car_color, setCarColor] = useState("");
  const [car_number, setCarNumber] = useState("");
  const [car_title, setCarTitle] = useState("");
  const [car_year, setCarYear] = useState("");
  const [car_type, setCarType] = useState("");
  const [bank, setBank] = useState("");

  const [fake, setFake] = useState(false)

  function encodeFileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(",")[1];
        resolve(base64String);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  }
  
  async function  handleSubmit() {
    if( user ==='company' && fake_dot_numbers.includes(dot_number) || user!== 'company'){
        
    try {
        switch (user) {
          case "shipper":
            dispatch(signupShipper({ username, password, email }));
            break;
          case "company":
            dispatch(
              signupCompany({
                username,
                password,
                email,
                company_name,
                company_address,
                descriptions,
                bank_account,
                dot_number,
              })
            );
            break;
          case "driver":
              const encodedLicense = await encodeFileToBase64(driverLicense)
              const encodedStraxovka = await encodeFileToBase64(straxovka)
            dispatch(
              signupDriver({
                username,
                password,
                email,
                driver_license: encodedLicense,
                straxovka: encodedStraxovka,
                car_number,
                car_color,
                car_title,
                car_year,
                car_type,
                bank,
              })
            );
            break;
          default:
            break;
        }
        navigate("/");
      } catch (error) {
        console.log(error);
      }        
    }
    else{
        setFake(true)
    }
  }

  return (
    <form className={classes.AuthForm}>
      <h1>Register</h1>
      <label htmlFor="username">Username</label>
      <input
        onInput={(e) => setUsername(e.target.value)}
        type="text"
        id="username"
      />
      <label htmlFor="email">Email</label>
      <input
        onInput={(e) => setEmail(e.target.value)}
        type="email"
        id="email"
      />
      <label htmlFor="password">Password</label>
      <input
        onInput={(e) => setPassword(e.target.value)}
        type="password"
        id="password"
      />
      {user === "company" ? (
        <>
          <label htmlFor="name">Name</label>
          <input
            onInput={(e) => setCompany_name(e.target.value)}
            type="text"
            id="name"
          />
          <label htmlFor="address">Address</label>
          <input
            onInput={(e) => setCompany_address(e.target.value)}
            type="text"
            id="address"
          />
          <label htmlFor="description">Descriptions</label>
          <input
            onInput={(e) => setDescriptions(e.target.value)}
            type="text"
            id="description"
          />
          <label htmlFor="account">Bank account</label>
          <input
            onInput={(e) => setBank_account(e.target.value)}
            type="text"
            id="account"
          />
          <label htmlFor="dot">DOT number</label>
          <input
            onInput={(e) => setDot_number(e.target.value)}
            type="text"
            id="dot"
          />
        </>
      ) : 
      user==='driver'?
      <>
      <label htmlFor="driverLicense">Driver License</label>
      <input
        onInput={(e) => setDriverLicense(e.target.files[0])}
        type="file"
        id="driverLicense"
      />
      <label htmlFor="straxovka">Straxovka</label>
      <input
        onInput={(e) => setStraxovka(e.target.files[0])}
        type="file"
        id="straxovka"
      />
      <label htmlFor="carNumber">Car Number</label>
      <input
        onInput={(e) => setCarNumber(e.target.value)}
        type="text"
        id="carNumber"
      />
      <label htmlFor="carColor">Car Color</label>
      <input
        onInput={(e) => setCarColor(e.target.value)}
        type="text"
        id="carColor"
      />
      <label htmlFor="carTitle">Car Title</label>
      <input
        onInput={(e) => setCarTitle(e.target.value)}
        type="text"
        id="carTitle"
      />
      <label htmlFor="carYear">Car Year</label>
      <input
        onInput={(e) => setCarYear(e.target.value)}
        type="number"
        id="carYear"
      />
      <label htmlFor="carType">Car Type</label>
      <input
        onInput={(e) => setCarType(e.target.value)}
        type="text"
        id="carType"
      />
      <label htmlFor="bank">Bank</label>
      <input
        onInput={(e) => setBank(e.target.value)}
        type="text"
        id="bank"
      />
    </>
    : null}
    {fake?<>
    <div>
        You are fake company bitch
    </div>
    </>:null}
      <Button action={handleSubmit}>Submit</Button>
    </form>
  );
};

export default RegisterForm;

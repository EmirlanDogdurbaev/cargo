import axios from "axios";
import React, { useState } from "react";
import Select from "react-select";
import "./CreateJob.scss";

const CreateJob = () => {
  const [formValues, setFormValues] = useState({
    from: "",
    to: "",
    date: "",
    productType: null,
    weight: "",
    choose: null,
  });

  const options = [
    { value: "glass", label: "glass" },
    { value: "technique", label: "technique" },
  ];

  const options2 = [
    { value: "full truck", label: "full truck" },
    { value: "part", label: "part of truck" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "none",
      borderBottom: "1px solid black",
      borderRadius: "0",
      outline: "none",
    }),
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { from, to, date, productType, weight, choose } = formValues;

    const formData = {
      from,
      to,
      date,
      productType,
      weight,
      choose,
    };

    axios
      .post("http://localhost:8081/?", formData)
      .then((response) => {
        console.log(response.data, "axaxa");
        setFormValues({
          from: "",
          to: "",
          date: "",
          productType: null,
          weight: "",
          choose: null,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleProductTypeSelect = (selectedOption) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      productType: selectedOption,
    }));
  };

  const handleChooseSelect = (selectedOption) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      choose: selectedOption,
    }));
  };

  return (
    <form className="book" onSubmit={handleSubmit}>
      <label htmlFor="from">
        <h5 className="title">From</h5>
        <input
          id="from"
          type="text"
          placeholder="Texas"
          name="from"
          value={formValues.from}
          onChange={handleFormChange}
        />
      </label>
      <label htmlFor="to">
        <h5 className="title">To</h5>
        <input
          id="to"
          type="text"
          placeholder="Boston"
          name="to"
          value={formValues.to}
          onChange={handleFormChange}
        />
      </label>
      <label htmlFor="date">
        <h5 className="title">Date</h5>
        <input
          id="date"
          type="date"
          placeholder="11.11.2023"
          name="date"
          value={formValues.date}
          onChange={handleFormChange}
        />
      </label>
      <aside>
        <h4 className="title">Select a type of your product</h4>
        <Select
          options={options}
          styles={customStyles}
          name="productType"
          value={formValues.productType}
          onChange={handleProductTypeSelect}
        />
      </aside>
      <aside>
        <h4 className="title">Choose</h4>
        <Select
          options={options2}
          styles={customStyles}
          name="choose"
          value={formValues.choose}
          onChange={handleChooseSelect}
        />
      </aside>
      <label htmlFor="weight">
        <h5 className="title">Weight</h5>
        <input
          id="weight"
          type="text"
          name="weight"
          placeholder="1 ton"
          value={formValues.weight}
          onChange={handleFormChange}
        />
      </label>
      <button className="book_btn" type="submit">
        Order
      </button>
    </form>
  );
};

export default CreateJob;

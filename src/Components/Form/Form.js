import React, {useState} from "react";


const Form = ({ addRestaurant }) => {
  const [name, setUserChoice] = useState("");

  const submitUserChoice = (event) => {
    event.preventDefault();
    const newChoice = {
      id: Date.now(),
      name,
      time: [],
      image:null,
      websiteLink: null,
      address:null

    };
    addRestaurant(newChoice);
    clearInput();
  };
  const clearInput = () => {
    setUserChoice("");
  };
  return (
    <form className="form">
      <input
        type="text"
        placeholder="Your Choice"
        name="name"
        value={name}
        onChange={(event) => setUserChoice(event.target.value)}
      />
      <button onClick={submitUserChoice}>SUBMIT</button>
    </form>
  );
};

export default Form;

import React, {useState} from "react";
import "./Form.css"

const Form = ({ addRestaurant }) => {
  const [name, setUserChoice] = useState("");

  const submitUserChoice = (event) => {
    event.preventDefault();
    const newChoice = {
      id: Date.now(),
      name,
      time: null,
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
    <div className="suggestion-container">
      <h3 className="suggestion">
        Need Help making a Breakfast or Brunch Choice? Use the Randomizer and
        we'll make the choice for you! Don't Like the Choice options? Add your
        own choices below in the input!
      </h3>
      <form className="form">
        <input
          type="text"
          placeholder="Your Choice"
          name="name"
          value={name}
          onChange={(event) => setUserChoice(event.target.value)}
        />
        <button className='submit' onClick={submitUserChoice}>SUBMIT</button>
      </form>
    </div>
  );
};

export default Form;

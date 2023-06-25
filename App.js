import React from "react";
import './App.css';

const QuestionMark = () => {
  const user = {
    name: "John Doe",
    age: 25,
    email: "johndoe@example.com",
    address: {
      state: "NY",
      city: "New York"
    },
  };

  const displayUserInfo = () => {
    const age = user.age > 18 ? "Adult" : "Minor"; // Using the conditional (ternary) operator

    console.log(user.address?.city); // Using optional chaining will return undefined

    const city = user.address?.city ?? "Unknown"; // Using the Nullish Coalescing operator

    if (!city) {
      throw new Error("City is not specified");
    }

    return (
      <div>
        <p><span className='variable'>Name: </span>{user.name}</p>
        <p><span className='variable'>Age: </span>{age}</p>
        <p><span className='variable'>Email: </span>{user.email}</p>
        <p><span className='variable'>City: </span>{city}</p> {/* Displaying the value of city using Nullish Coalescing */}
      </div>
    );
  };

  return (
    <div className='userinfo'>
      <h1>User Information</h1>
      {displayUserInfo()}
    </div>
  );
};

export default QuestionMark;

# questionmark_operator

This React component, QuestionMark, displays user information including their name, age, email, and city. It demonstrates the usage of optional chaining and the Nullish Coalescing operator in JavaScript.

Inside the displayUserInfo function, the user's age is determined using a ternary operator. The console.log statements demonstrate the usage of optional chaining (?.) to safely access the city property of the address object, which could be undefined if not specified.

The city variable is assigned the value of user.address?.city, and if it evaluates to null or undefined, the Nullish Coalescing operator (??) sets it to the default value of "Unknown". If city is falsy, an error is thrown with the message "City is not specified".

The component renders the user information in a <div> container, displaying the user's name, age, email, and city. The city value is displayed using the Nullish Coalescing operator, ensuring a default value of "Unknown" if it is not specified.

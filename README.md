Illustrating the Usage of the Question Mark Operator in JavaScript
The provided code snippet demonstrates the usage of the question mark operator (?.) in JavaScript. The question mark operator is used to perform optional chaining, allowing for safe navigation through nested object properties or method calls that might be undefined or null.

In the code example, an object user is defined, representing a user's information. It includes properties such as name, age, email, and address. However, the city property within the address object is commented out, intentionally left undefined.

The displayUserInfo function showcases the question mark operator and its benefits. Here's a breakdown of the relevant parts:

Ternary Operator for Age Calculation:

The user's age is determined using a ternary operator: const age = user.age > 18 ? "Adult" : "Minor";.
If the user's age is greater than 18, it is considered an "Adult," otherwise a "Minor."
Optional Chaining to Access City:

The line console.log(user.address?.city); demonstrates the usage of optional chaining (?.).
Optional chaining allows safe access to the city property of the address object, even if it is undefined or null.
In this case, since user.address?.city is undefined, the console log will output undefined.
Nullish Coalescing Operator for Default Value:

The line const city = user.address?.city ?? "Unknown"; combines optional chaining with the nullish coalescing operator (??).
The nullish coalescing operator assigns the value of user.address?.city to city.
If user.address?.city is null or undefined, the nullish coalescing operator sets city to the default value of "Unknown".
Error Handling:

To demonstrate error handling, an if statement checks if user.address?.city is falsy (null or undefined).
If it is falsy, an error is thrown using throw new Error("City is not specified");.
This showcases how optional chaining can help prevent errors when accessing nested properties.
The component renders the user information in a <div> container, displaying the user's name, age, email, and city. The city value is displayed using the nullish coalescing operator, ensuring a default value of "Unknown" if it is not specified.

By utilizing the question mark operator and its associated features, the code demonstrates a safer and more concise way to handle potentially undefined or null values within objects.

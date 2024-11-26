let numOrStr: number | string;
numOrStr = 21; //number - OK
numOrStr = "Hello, World"; //string - ok
numOrStr = true; //boolean - error

let isEnabled: "enabled" | "disabled";
isEnabled = "enabled"; // ok
isEnabled = "disabled"; // ok
isEnabled = true; // error

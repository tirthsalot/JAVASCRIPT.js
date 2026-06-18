const currentTime = () => {
  console.log("Checking current time...");

  setTimeout(() => {
    let time = new Date().toLocaleTimeString();
    console.log("Current Time:", time);
  }, 3000);
};

currentTime();

//example

const User = () => {
  console.log("Loading user details...");

  setTimeout(() => {
    let username = "Tirth";
    console.log("Welcome,", username);
  }, 2000);
};

User();

//another example

const checkTemperature = () => {
  console.log("Checking temperature...");

  setTimeout(() => {
    let temperature = 32;
    console.log("Today's Temperature:", temperature + "°C");
  }, 5000);
};

checkTemperature();
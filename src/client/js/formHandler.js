//solve problem ==> ReferenceError: regeneratorRuntime is not defined
import "regenerator-runtime/runtime";

function handleSubmit(event) {
  event.preventDefault();

  console.log(":::Submitted :::");
  let urlData = document.getElementById("name").value;

  if (urlData.length < 1) {
    return alert("please insert url");
  }

  //check if the user entered string in english only
  const reg = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
  const check = reg.test(urlData);
  console.log(check);
  if (check) {
    getData({ url: urlData }).then((data) => {
      return Client.checkForName(data);
    });
  } else {
    document.getElementById("results").innerHTML =
      "please instert only valid url";
    alert("Try again please");
  }
}

const getData = async (info = {}) => {
  //here i send the user input first to the server and used the api url there then fetched the data of the apiurl
  const response = await fetch("/dataApi", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  });
  try {
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { handleSubmit };

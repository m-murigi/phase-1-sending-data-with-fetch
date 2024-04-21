
function submitData(name, email) {
  const userData = {
      name: name,
      email: email
  };

  const configObject = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(userData)
  };

  return fetch("http://localhost:3000/users", configObject)
      .then(response => response.json())
      .then(data => {
          appendIdToDOM(data.id);
          return data;
      })
      .catch(error => {
          appendErrorToDOM(error.message);
          return error;
      });
}

function appendIdToDOM(id) {
  const newIdElement = document.createElement("p");
  newIdElement.textContent = `New ID: ${id}`;
  document.body.appendChild(newIdElement);
}

function appendErrorToDOM(message) {
  const errorMessageElement = document.createElement("p");
  errorMessageElement.textContent = `Error: ${message}`;
  document.body.appendChild(errorMessageElement);
}
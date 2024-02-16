const allowDrop = (event) => {
  event.preventDefault();
};

const startDrag = (event) => {
  event.dataTransfer.setData("text", event.target.id);
};

const drop = (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const draggedComponent = document.getElementById(data);
  const deviceScreen = document.getElementById("device-screen");

  const inputObj = {
    textComponent: {
      type: "text",
      placeholder: "Text",
      iconUrl: "./Assets/text-ic.png",
    },
    phoneComponent: {
      type: "tel",
      placeholder: "Phone Number",
      iconUrl: "./Assets/phone-ic.png",
    },
    emailComponent: {
      type: "email",
      placeholder: "Email",
      iconUrl: "./Assets/email-ic.png",
    },
  };

  if (inputObj[draggedComponent.id]) {
    deviceScreen.insertAdjacentHTML("beforeend", createInputComponent(inputObj[draggedComponent.id]));
  }
};

const removeInputComponent = (event) => {
  const inputComponent = event.target.closest('.input-component');
  if (inputComponent) {
    inputComponent.remove();
  }
};

const createInputComponent = (inputObj) => `
  <div class="input-component">
    <img class="icon" src=${inputObj.iconUrl} alt="icon">
    <input type=${inputObj.type} placeholder=${inputObj.placeholder} />
    <span class="remove-icon" onclick="removeInputComponent(event)">❌</span>
  </div>`;

const deviceScreenElement = document.getElementById("device-screen");
deviceScreenElement.ondragover = allowDrop;
deviceScreenElement.ondrop = drop;

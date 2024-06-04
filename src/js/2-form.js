
const KEY = `feedback-form-state`;
const form = document.querySelector(`.feedback-form`);
let formData = {
    email: "",
    message: ""
}

form.addEventListener(`input`, (e) => {
    const { name, value } = e.target;
      formData[name] = value.trim();
    

    saveToLS(KEY, formData);
})

form.addEventListener(`submit`, e => {
    e.preventDefault();

    const { email, message } = form.elements;

  if (email.value === '' || message.value === '') {
        return alert(`Fill please all fields`);
    }
// console.log(formData);
    console.log(`Email: ${email.value}\nMessage: ${message.value}`);
    
    form.reset();
    localStorage.removeItem(KEY);
    formData = {}
})

window.addEventListener('DOMContentLoaded', () => {
    const data = loadFromLS(KEY);

    form.elements.email.value = data?.email || ``;
    form.elements.message.value = data?.message || ``;
})

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}
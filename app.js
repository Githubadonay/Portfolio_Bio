function openMenu() {
  const body = document.body;
  body.classList.add("open");
}

function closeMenu() {
  const body = document.body;
  body.classList.remove("open");
}

async function sendEmail(event) {
  event.preventDefault();
  const body = document.body;
  const loading = document.querySelector(".contact__form__loading");
  const form = document.querySelector(".contact__form");

  try {    
    // Loading State
    loading.classList.remove("hidden");

    await emailjs.sendForm(
      "service_zxj7zwo",
      "template_3ouvobc",
      event.target,
      "wocqdU9SCZgD6nv1n"
    );
    //Success state
    form.reset();
    loading.classList.add("hidden");
    body.classList.add("success-open");
    setTimeout(() => {
      body.classList.remove("success-open");
    }, 5000);
  } catch {
    loading.classList.add("hidden");
    alert('An Error has occered. please try again later or contact me at Tesfamichaeladonay@gmail.com')
  }
}

// template_3ouvobc
// service_ms6rzaf
// wocqdU9SCZgD6nv1n
//service_zxj7zwo

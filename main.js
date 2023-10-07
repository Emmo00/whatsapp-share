const shareButton = document.querySelector(".share");
const textInput = document.querySelector(".message");
const contactInput = document.querySelector(".contact");

shareButton.addEventListener("click", function (event) {
  event.preventDefault();
  const link = document.createElement("a");
  let text = textInput.value;
  let contact = contactInput.value;

  if (text === "") text = "Hello World!";
  let whatsappLink = `whatsapp://send?text=${text}`;
  if (contact !== "") whatsappLink += `&phone=${contact}`;

  link.href = whatsappLink;
  link.setAttribute("data-action", "share/whatsapp/share");
  link.click();
});

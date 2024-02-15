const btnMessage = document.querySelector(".main-content__button");

const handlebtnClick = () => {
  alert("Hello Word");
};

btnMessage.addEventListener("click", handlebtnClick);

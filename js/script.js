// document.addEventListener("DOMContentLoaded", function () {
//   async function formSend(e) {
//     e.preventDefault();

//     let error = formValidate(form);
//   }
//   document.querySelector(".button").onclick = () => {
//     function formValidate(form) {
//       let error = 0;
//       let formReq = document.querySelectorAll("._req");
//       console.log(formReq.length);
//       for (let index = 0; index < formReq.length; index++) {
//         const input = formReq[index];
//         formRemoveError(input);
//         if (input.classList.contains("._email")) {
//           if (emailTest(input)) {
//             formAddError(input);
//             error++;
//           }
//         } else {
//           if (input.value === "") {
//             formAddError(input);
//             error++;
//           }
//         }
//       }
//     }
//   };

//   function formAddError(input) {
//     input.parentElement.classList.add("_error");
//     input.classList.add("_error");
//   }
//   function formRemoveError(input) {
//     input.parentElement.classList.remove("_error");
//     input.classList.remove("_error");
//   }
//   function emailTest(input) {
//     return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//   }
// });

// c Jquery

// const anchors = document.querySelectorAll('a[href*="#"]');
// for (let anchor of anchors) {
//   anchor.addEventListener("click", function (event) {
//     event.preventDefault();
//     const blockID = anchor.getAttribute("href");
//     document.querySelector("" + blockID).scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   });
// }

// function scrollTo(element) {
//   element.preventDefault();
//   window.scroll({
//     left: 0,
//     top: element.offsetTop,
//     behavior: "smooth",
//   });
// }

// const anchors = document.querySelectorAll('a[href*="#"]');
// for (let i = 0; i < anchors.length; i++) {
//   anchors[i].addEventListener("click", scrollTo());
// }

document.querySelectorAll("a.navigation__link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href").substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = 0;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

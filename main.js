"use strict";

/* Añadir funcionalidad a la carita
Pasos
- Recoger elementos html: head y face
- Cuando hago click, cambia la cara a guiño
*/

const headUser = document.querySelector(".js-head");
const faceUser = document.querySelector(".js-face");

headUser.addEventListener("click", () =>{
    faceUser.innerHTML = ";)";
})
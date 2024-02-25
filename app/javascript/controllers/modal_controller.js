import { Controller, Application } from "@hotwired/stimulus"
import { Modal } from "tailwindcss-stimulus-components"

const application = Application.start();
// Connects to data-controller="modal"
export default class extends Controller {
  connect() {
    application.register('modal', Modal)
  }
  open(event){
    const modal = document.getElementById("modal");
    modal.classList.add("open");
  }
  // close(event) {
  //   const modal = document.getElementById("modal");
  //   modal.classList.remove("open");
  // }
}

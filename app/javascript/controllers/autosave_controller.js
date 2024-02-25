import { Controller , Application } from "@hotwired/stimulus"
import { Autosave } from "tailwindcss-stimulus-components"
// Connects to data-controller="autosave"
export default class extends Controller {
  connect() {
    const application = Application.start();
    application.register('autosave', Autosave)
  }
}

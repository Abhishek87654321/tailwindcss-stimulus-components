import { Controller, Application } from "@hotwired/stimulus"
import { Dropdown } from "tailwindcss-stimulus-components"
const application = Application.start();
// Connects to data-controller="dropdown"
export default class extends Controller {
  connect() {
    application.register('dropdown', Dropdown);
  }

}

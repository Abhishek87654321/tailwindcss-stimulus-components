import { Controller, Application } from "@hotwired/stimulus"
import { Alert } from "tailwindcss-stimulus-components"


// Connects to data-controller="alert"
export default class extends Controller {
  connect() {
    const application = Application.start();
    application.register('alert', Alert)
  }
}

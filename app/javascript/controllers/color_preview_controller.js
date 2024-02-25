import { Controller, Application } from "@hotwired/stimulus"
import { ColorPreview } from "tailwindcss-stimulus-components"
const application = Application.start();

// Connects to data-controller="color-preview"
export default class extends Controller {
  connect() {
    application.register('color-preview', ColorPreview)
  }
}

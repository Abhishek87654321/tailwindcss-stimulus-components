import { Application, Controller } from "@hotwired/stimulus"
import { Tabs } from "tailwindcss-stimulus-components"
const application = Application.start()

// Connects to data-controller="tabs"
export default class extends Controller {
  connect() {
    application.register("tabs", Tabs)
  }
}

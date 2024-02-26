// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import AlertController from "./alert_controller"
application.register("alert", AlertController)

import AutosaveController from "./autosave_controller"
application.register("autosave", AutosaveController)

import ColorPreviewController from "./color_preview_controller"
application.register("color-preview", ColorPreviewController)

import DropdownController from "./dropdown_controller"
application.register("dropdown", DropdownController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import ModalController from "./modal_controller"
application.register("modal", ModalController)

import PopoverController from "./popover_controller"
application.register("popover", PopoverController)

import SlideoverController from "./slideover_controller"
application.register("slideover", SlideoverController)

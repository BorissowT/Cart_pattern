import time

from .locators import FormPageLocators, MainPageLocators
from .base_page import BasePage


class FormPage(BasePage):
    def should_be_form_page(self):
        self.should_be_visible_form()

    def should_be_visible_form(self):
        assert self.is_element_visible(*FormPageLocators.FORM), "form isn't opened"

    def if_closed(self):
        form_container = self.browser.find_element(*FormPageLocators.FORM)
        time.sleep(2)
        assert form_container.value_of_css_property("visibility") == "hidden", "form isn't closed"

    def close_form_with_cart_button(self):
        assert self.is_element_present(*MainPageLocators.CART_BUTTON), "there is no cart button"
        cart_button = self.browser.find_element(*MainPageLocators.CART_BUTTON)
        cart_button.click()
        self.if_closed()

    def close_form_with_grey_background(self):
        assert self.is_element_present(*FormPageLocators.GRAY_BACKGROUND), "there is no grey background"
        cart_button = self.browser.find_element(*FormPageLocators.GRAY_BACKGROUND)
        cart_button.click()
        self.if_closed()

    def close_form_with_close_button(self):
        assert self.is_element_present(*FormPageLocators.CLOSE_BUTTON), "there is no close button"
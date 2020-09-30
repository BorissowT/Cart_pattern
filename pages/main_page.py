from .base_page import BasePage
from .locators import MainPageLocators, CartPageLocators
import time

class MainPage(BasePage):
    def should_be_main_page(self):
        self.should_be_cart()

    def should_be_cart(self):
        assert self.is_element_present(*MainPageLocators.CART_BUTTON), "cart is not presented"

    def open_cart(self):
        assert self.is_element_present(*MainPageLocators.CART_BUTTON), "there is no cart button"
        cart_button = self.browser.find_element(*MainPageLocators.CART_BUTTON)
        cart_button.click()

    def if_closed(self):
        cart_container = self.browser.find_element(*MainPageLocators.CART_CONTAINER)
        time.sleep(2)
        assert cart_container.value_of_css_property("visibility") == "hidden", "cart isn't closed"

    def close_cart_with_cart_button(self):
        assert self.is_element_present(*MainPageLocators.CART_BUTTON), "there is no cart button"
        cart_button = self.browser.find_element(*MainPageLocators.CART_BUTTON)
        cart_button.click()
        self.if_closed()

    def close_cart_with_close_button(self):
        assert self.is_element_present(*CartPageLocators.CLOSE_BUTTON), "there is no close button"
        close_button = self.browser.find_element(*CartPageLocators.CLOSE_BUTTON)
        close_button.click()
        self.if_closed()

    def close_cart_with_gray_background(self):
        gray_button = self.browser.find_element(*CartPageLocators.GRAY_BACKGROUND)
        assert gray_button.value_of_css_property("visibility") == "visible", "gray back ground isn't visible"
        gray_button.click()
        self.if_closed()

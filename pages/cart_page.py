import time

from .locators import CartPageLocators, MainPageLocators
from .base_page import BasePage


class CartPage(BasePage):
    def should_be_cart_page(self):
        self.should_be_visible_cart_container()

    def should_be_visible_cart_container(self):
        assert self.is_element_visible(*CartPageLocators.CART_CONTAINER), "cart isn't opened"

    def should_have_products(self):
        assert self.is_element_present(*CartPageLocators.ANY_PRODUCTS), "there is no products in cart"

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

    def if_closed(self):
        cart_container = self.browser.find_element(*CartPageLocators.CART_CONTAINER)
        time.sleep(2)
        assert cart_container.value_of_css_property("visibility") == "hidden", "cart isn't closed"

    def order_products(self):
        order_button = self.browser.find_element(*CartPageLocators.ORDER_BUTTON)
        order_button.click()
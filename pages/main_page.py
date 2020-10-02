from .base_page import BasePage
from .locators import MainPageLocators, CartPageLocators
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium import webdriver


class MainPage(BasePage):
    def should_be_main_page(self):
        self.should_be_visible_container()

    def should_be_visible_container(self):
        assert self.is_element_visible(*MainPageLocators.CONTAINER), "cart is not presented"

    def open_cart(self):
        assert self.is_element_present(*MainPageLocators.CART_BUTTON), "there is no cart button"
        cart_button = self.browser.find_element(*MainPageLocators.CART_BUTTON)
        cart_button.click()





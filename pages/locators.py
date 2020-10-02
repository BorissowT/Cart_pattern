from selenium.webdriver.common.by import By


class MainPageLocators:
    CART_BUTTON = (By.CSS_SELECTOR, ".cart_button")
    CONTAINER = (By.CSS_SELECTOR, ".container")


class CartPageLocators:
    CLOSE_BUTTON = (By.CSS_SELECTOR, ".exit_cart")
    GRAY_BACKGROUND = (By.CSS_SELECTOR, ".grey_cart_background")
    CART_CONTAINER = (By.CSS_SELECTOR, ".cart_container")
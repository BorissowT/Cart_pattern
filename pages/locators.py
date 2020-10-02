from selenium.webdriver.common.by import By


class MainPageLocators:
    CART_BUTTON = (By.CSS_SELECTOR, ".cart_button")
    CONTAINER = (By.CSS_SELECTOR, ".container")
    ADD_MILK_BUTTON = (By.CSS_SELECTOR, '.add_to_cart[name="Beautiful Milk"]')


class CartPageLocators:
    CLOSE_BUTTON = (By.CSS_SELECTOR, ".exit_cart")
    GRAY_BACKGROUND = (By.CSS_SELECTOR, ".grey_cart_background")
    CART_CONTAINER = (By.CSS_SELECTOR, ".cart_container")
    ORDER_BUTTON = (By.CSS_SELECTOR, ".order_button")
    ANY_PRODUCTS = (By.CSS_SELECTOR, ".product_in_cart")


class FormPageLocators:
    FORM = (By.CSS_SELECTOR, ".form")
    GRAY_BACKGROUND = (By.CSS_SELECTOR, ".grey_cart_background")
    CLOSE_BUTTON = (By.CSS_SELECTOR, ".exit_form")

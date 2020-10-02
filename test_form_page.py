from .pages.form_page import FormPage
from .pages.main_page import MainPage
from .pages.cart_page import CartPage
import time
import pytest

link = "http://127.0.0.1:5501/"


class TestOpenAndCloseForm:

    def test_if_form_can_be_opened_and_closed_with_cart_button(self, browser):
        browser.implicitly_wait(5)
        main_page = MainPage(browser, link)
        main_page.open()
        main_page.should_be_main_page()
        main_page.add_one_milk_to_cart()
        time.sleep(1)
        main_page.open_cart()
        time.sleep(2)
        cart_page = CartPage(browser, link)
        cart_page.should_be_cart_page()
        cart_page.should_have_products()
        cart_page.order_products()
        cart_page.if_closed()
        form_page = FormPage(browser, link)
        form_page.should_be_form_page()
        form_page.close_form_with_cart_button()

    @pytest.mark.xfail(reason="can't click gray BG on the side of form (in cart does somehow work)")
    def test_if_form_can_be_opened_and_closed_with_grey_background(self, browser):
        browser.implicitly_wait(5)
        main_page = MainPage(browser, link)
        main_page.open()
        main_page.should_be_main_page()
        main_page.add_one_milk_to_cart()
        time.sleep(1)
        main_page.open_cart()
        time.sleep(2)
        cart_page = CartPage(browser, link)
        cart_page.should_be_cart_page()
        cart_page.should_have_products()
        cart_page.order_products()
        cart_page.if_closed()
        form_page = FormPage(browser, link)
        form_page.should_be_form_page()
        form_page.close_form_with_grey_background()


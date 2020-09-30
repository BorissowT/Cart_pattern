from .pages.main_page import MainPage
import time
import pytest

link = "http://127.0.0.1:5501/"


class TestOpenCart:

    def test_if_cart_can_be_opened_and_closed_with_cart_button(self, browser):
        browser.implicitly_wait(5)
        main_page = MainPage(browser, link)
        main_page.open()
        main_page.should_be_main_page()
        main_page.open_cart()
        time.sleep(2)
        main_page.close_cart_with_cart_button()
        time.sleep(2)

    def test_if_cart_can_be_opened_and_closed_with_close_button(self, browser):
        main_page = MainPage(browser, link)
        main_page.open()
        main_page.should_be_main_page()
        main_page.open_cart()
        time.sleep(2)
        main_page.close_cart_with_close_button()
        time.sleep(2)

    @pytest.mark.xfail(reason="i dunno how to click gray BG")
    def test_if_cart_can_be_opened_and_closed_with_gray_background(self, browser):
        main_page = MainPage(browser, link)
        main_page.open()
        main_page.should_be_main_page()
        main_page.open_cart()
        time.sleep(2)
        main_page.close_cart_with_gray_background()
        time.sleep(2)

import pytest
from selenium import webdriver


@pytest.fixture(scope="function")
def browser(request):
    browser = webdriver.Chrome()
    browser.set_window_size(1000, 1000)
    yield browser
    print("\nquit browser..")
    browser.quit()

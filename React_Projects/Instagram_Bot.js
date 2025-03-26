from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome()
driver.get("https://www.instagram.com/")
username = driver.find_element("name", "username")
password = driver.find_element("name", "password")

username.send_keys("your_username")
password.send_keys("your_password")
password.send_keys(Keys.RETURN)

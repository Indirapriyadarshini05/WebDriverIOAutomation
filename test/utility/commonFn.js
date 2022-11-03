class commonFn {

  async clickBtn(selector) {
    await browser.$(selector).click();
  }

  async setvalueTextbox(selector, value) {
    await (await browser.$(selector)).setValue(value);
  }

  async waitTime(timeouts) {
    await this.waitForDisplayed({timeout:timeouts});
  }
}

module.exports = new commonFn();

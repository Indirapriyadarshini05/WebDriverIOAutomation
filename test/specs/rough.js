

/*
    // direct xpath
    $('//input[@name="username"]').setValue("Admin");
    await browser.waitUntil();
    await $('//input[@name="password"]').setValue("admin123");
    await $('button[type="submit"]').click();

    // using driver object
    await browser.$('//input[@name="username"]').setValue("Admin");
    await browser.$('//input[@name="password"]').setValue("admin123");
    await browser.$('button[type="submit"]').click();

    // using pageobject
    await loginPage.username.setValue("Admin");
    await loginPage.password.setValue("admin123");
    await loginPage.submitButton.click();*/
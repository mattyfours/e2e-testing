import a from '../tests/a.json'
import puppeteer from 'puppeteer-core';
import viewportConfigs from './viewports';




;(async () => {
  const browser = await puppeteer.launch({
    channel: 'chrome',
    headless: false,
  })
  const page = await browser.newPage()
  page.setDefaultNavigationTimeout(10000)

  try {
    await page.setViewport(viewportConfigs.desktop);
    await page.goto('https://ouidad.com/')
   

    // // Wait and click on first result
    // const searchResultSelector = '.devsite-result-item-link';
    await page.waitForSelector('#shopify-section-header > hh-sticky-header > hh-header > div > header > div.header__utility > hh-details-modal > span > hh-button');
    await page.click('#shopify-section-header > hh-sticky-header > hh-header > div > header > div.header__utility > hh-details-modal > span > hh-button');

    // // Locate the full title with a unique string
    const textSelector = await page.waitForSelector(
      'text/Customize and automate'
    );


    // const fullTitle = await textSelector?.evaluate(el => el.textContent);

    // // Print the full title
    // console.log('The title of this blog post is "%s".', fullTitle);
  } catch(err) {
    console.error(err)
    
  } finally {
    await browser.close()
  }
})()


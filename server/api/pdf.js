const puppeteer = require('puppeteer');

export default async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://news.ycombinator.com', {
    waitUntil: 'networkidle2',
  });
  const pdf = await page.pdf({ path: 'hn.pdf', format: 'a4' });

  await browser.close();

  return pdf
}

import puppeteer from "puppeteer";

const url = "http://localhost:5173/KEEPSHORT/"


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);


  const rootSelector = '#root' 
  await page.waitForSelector(rootSelector);

  await page.$("[data-testid='button_open_menu']").then(async (btn)=> {
    if(btn === null) throw Error('not found overlay button_open_menu')
    await btn.click()
  }) 

  await page.$("[data-testid='button_plane_add_testid']").then(async (btn)=>{ 
    if(btn === null) throw Error("overlay hasn't been opened")
    await btn.click()
   })

  await page.type("[data-testid='title_testid']", 'testTitle')
  await page.type("[data-testid='textarea_testid']", 'testBody')


  await page.$("[data-testid='create_button_testid']").then(async(btn)=>{ 
    if(btn === null) throw Error('was not created')
    await btn.click()
  })

  const card = await page.$('[data-testid=card_testid]')
  
  if(card === null) throw Error('the card was not created')

  await page.$('[data-testid=button_edit_testid]').then(async(btn)=>{
    if(btn === null) throw Error('the card configuration is broken')
    await btn.click()
  })

  await page.$('[data-testid=button_delete_testid]').then(async(btn)=>{
    if(btn === null) throw Error('the card configuration is broken')
    await btn.click()
  })

  await browser.close();
})();

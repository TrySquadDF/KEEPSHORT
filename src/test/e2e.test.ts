import { preview } from "vite";
import type { PreviewServer } from "vite";
import puppeteer from "puppeteer";
import { afterAll, beforeAll, describe, expect, test } from "vitest";
import type { Browser, Page } from "puppeteer";
import { getDocument, queries } from "pptr-testing-library";

describe("e2e", async () => {
  let server: PreviewServer;
  let browser: Browser;
  let page: Page;
  let { queryByTestId, getByTestId } = queries;

  beforeAll(async () => {
    server = await preview({ preview: { port: 3000 } });
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    await new Promise<void>((resolve, reject) => {
      server.httpServer.close((error) => (error ? reject(error) : resolve()));
    });
  });

  test("correct operation of the main functions of the application", async () => {
    try {
      await page.goto(server.resolvedUrls.local[0]);
      const rootSelector = "#root";
      await page.waitForSelector(rootSelector);

      const $document = await getDocument(page);

      await page
        .$("[data-testid='button_open-create-popup_testid']")
        .then(async (btn) => {
          if (btn === null)
            throw Error("not found overlay button_open-create-popup_testid");
          await btn.click();
        });

      await page.type("[data-testid='title_testid']", "testTitle");
      await page.type("[data-testid='textarea_testid']", "testBody");

      await page.$("[data-testid='create_button_testid']").then(async (btn) => {
        if (btn === null) throw Error("was not created");
        await btn.click();
      });

      const card = await page.$("[data-testid=card_testid]");

      if (card === null) throw Error("the card was not created");

      await page.$("[data-testid=button_edit_testid]").then(async (btn) => {
        if (btn === null) throw Error("the card configuration is broken");
        await btn.click();
      });

      await page.$("[data-testid=button_delete_testid]").then(async (btn) => {
        if (btn === null) throw Error("the card configuration is broken");
        await btn.click();
      });
    } catch (e) {
      expect(e).toBeUndefined();
    }
  }, 60_000);
});

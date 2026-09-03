import { expect, test } from "@playwright/test";

/**
 * Release-gating critical flows (see docs/TEST-PLAN):
 * upload PDF, upload FDX, curate entities, confirm register, risk board,
 * budget pause + resume request, producer review, reviewer invite/edit/approve,
 * PDF download, project and account deletion.
 */
test.describe("critical flows", () => {
  test("landing page states the legal boundary", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "PERMISSA" })).toBeVisible();
    await expect(
      page.getByText(/does not provide legal advice/i),
    ).toBeVisible();
  });

  test.fixme("producer completes a clearance run", async () => {
    // Implemented in tranche 4 against the golden fixture.
  });
});

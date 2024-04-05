// entryTest.ts

import { test, expect } from "@playwright/test";
import { APITestPOM } from "../POM/api-test-pom";

test("Read the response, find all objects with property “Category: Authentication & Authorization” ", async ({
  request,
}) => {
  //Pass the request object to the POM class instance
  const entryPage = new APITestPOM(request);

  //Filter entries by category "Authentication & Authorization" from the endpoint "entries"
  const filteredEntries = await entryPage.filterEntriesByCategory(
    "Authentication & Authorization",
    "entries"
  );


  //Assert the number of entries
  expect(filteredEntries.length).toEqual(7);

  
});

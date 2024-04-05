// entryPage.ts

import { APIRequestContext, Page } from '@playwright/test';

interface Entry {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

interface ApiResponse {
  count: number;
  entries: Entry[];
}

export class APITestPOM {
//   private page: Page;
  private request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

async getEntries({endpoint}:{endpoint:string}): Promise<ApiResponse> {
    const res =  await this.request.get(`/${endpoint}`);
    return await res.json();
}

async filterEntriesByCategory(category: string, endpoint:string): Promise<Entry[]> {
    const apiRes = await this.getEntries({ endpoint });
    return apiRes.entries.filter((entry: Entry) => entry.Category === category);
}

}
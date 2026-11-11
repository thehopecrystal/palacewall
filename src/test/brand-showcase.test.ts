import { describe, expect, it } from "vitest";
import { contentPages } from "@/lib/palacewall-content";

describe("Palacewall brand showcase", () => {
  it.each([
    ["Kayluvas", "https://kayluvas.com"],
    ["Edo Faces Radio", "https://edofaces.com"],
    ["Casa Jade Wine", "https://casajadewine.com"],
  ])("lists %s with its supplied website", (name, href) => {
    const brand = contentPages.brands.brandShowcase?.find((item) => item.name === name);

    expect(brand?.href).toBe(href);
  });
});
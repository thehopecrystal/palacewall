import { describe, expect, it } from "vitest";
import { contactDetails, contentPages } from "@/lib/palacewall-content";

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

describe("Palacewall contact details", () => {
  it("publishes the supplied email and phone number", () => {
    expect(contactDetails.email).toBe("info@palacewall.com");
    expect(contactDetails.phone).toBe("+1-416-886-0339");
    expect(contentPages.contact.feature?.copy).toContain(contactDetails.email);
    expect(contentPages.contact.feature?.copy).toContain(contactDetails.phone);
  });
});
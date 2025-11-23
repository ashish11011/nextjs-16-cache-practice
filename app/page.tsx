"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const Page = () => {
  const handleBrandClick = (brandName: string, brandId: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "brand_clicks", {
        brand_name: brandName,
        brand_id: brandId,
      });
    }

    console.log(`Tracked click: ${brandName}`);
  };

  return (
    <div className="space-y-4">
      <h1>Brand Buttons</h1>

      {/* Zara */}
      <Button onClick={() => handleBrandClick("Zara", "ZARA_123")}>Zara</Button>

      {/* Nike */}
      <Button onClick={() => handleBrandClick("Nike", "NIKE_456")}>Nike</Button>

      {/* Adidas */}
      <Button onClick={() => handleBrandClick("Adidas", "ADIDAS_789")}>
        Adidas
      </Button>
    </div>
  );
};

export default Page;

"use client";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "brand_page_view", {
        brand_name: "zara",
        brand_id: "ZARA_123",
      });
    }
  }, []);

  return <div>page</div>;
};

export default Page;

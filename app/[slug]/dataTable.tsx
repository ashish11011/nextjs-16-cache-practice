"use client";

import { increaseValue } from "@/lib/helper";
import { useState } from "react";

const Datatable = ({ data }: any) => {
  const [loading, setLoading] = useState(false);
  async function handleincreaseclick(id: string) {
    try {
      setLoading(true);
      await increaseValue(id);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {data.map((item: any) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.viewCount}</p>
          <button onClick={() => handleincreaseclick(item.name)}>
            {loading ? "Loading..." : "Increase"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Datatable;

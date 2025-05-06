import React, { useState } from "react";
import Button from "./Button";

export const GetRequestComponent: React.FC = () => {
  const [data, setData] = useState<{ message: string; title: string } | null>(null);

  const handleClick = async () => {
    setData(null);

    try {
      const response = await fetch("http://localhost:5000/api/data");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Button size="medium" color="secondary" title="Get - Запрос" onClick={handleClick} />

      {data && (
        <div>
            <p>{data.title}</p>
            <p>{data.message}</p>
        </div>
      )}
    </div>
  );
};
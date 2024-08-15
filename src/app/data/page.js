"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Dashboard from "../comps/dashboard/page";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const Data = () => {
  const [balljoint, setBallJointData] = useState([]);

  useEffect(() => {
    getBallJointData();
  }, []);

  async function getBallJointData() {
    const { data, error } = await supabase.from("balljoint").select();
    if (error) {
      console.error("Error fetching balljoint:", error);
    } else {
      console.log( "balljoint data ---> ",data[0])
      setBallJointData(data);
      Dashboard(data)
    }
  }


  return (
    <ul className="p-2">
      {balljoint.map((balljoint) => (
        <li key={balljoint.id}>{balljoint.oem_no}-|-{balljoint.car_name}</li>
      ))}
    </ul>
  );
}

export default Data;
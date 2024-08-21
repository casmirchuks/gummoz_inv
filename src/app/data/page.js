"use client";
import { useEffect, useState } from "react";
import supabase from "../config/supabaseConfig";

export default function Data () {
  const [balljoints, setBallJoints] = useState(null);

  useEffect(() => {
    const fetchBallJoint = async () => {
      const { data, error } = await supabase
        .from("balljoint")
        .select(); 
      if (error) {
        console.error("Error fetching balljoint:", error);
        setBallJoints(null)
      } else {
        setBallJoints(data);
      }
    }
    fetchBallJoint();
  }, []);


  return (
    <ul className="p-2">
      {balljoints && (
        <div>
          {balljoints.map(balljoint => (
            <li>
                <p>{balljoint.oem_no}-{balljoint.name}</p><img src={balljoint.image}/>
            </li>
          ))}
        </div> 
      )}
    </ul>  
  );
}


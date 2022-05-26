import React, { useEffect, useState } from "react";
import { useData } from "../Context";

export default function App() {
  const { data } = useData();
  console.log('useData Context: ', data);
  
  return (
    <div>
      <h1>Ultimate Movie List</h1>
    </div>
  );
};
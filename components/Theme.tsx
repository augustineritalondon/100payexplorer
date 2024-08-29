"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const Theme = () => {
  const searchParams = useSearchParams();

  //   useEffect(() => {
  //     const theme = searchParams.get(“currentTheme”);
  //     theme && setSiteTheme(tab);
  //   }, [searchParams]);

  return <div>Theme</div>;
};

export default Theme;

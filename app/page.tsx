"use client";

import React, { useState } from "react";
import BusinessCard from "@/components/BusinessCard";
import Navbar from "@/components/Navbar";
import Image from "next/image";

interface Business {
  name: string;
  description: string;
  isOnline: boolean;
  location: string;
  storeType: string;
  image: string;
  website: string;
  category: string;
}

const businesses: Business[] = [
  {
    name: "Business 1",
    description: "gadget stores, lorem ipsum something",
    isOnline: true,
    location: "Online Store",
    storeType: "Online ",
    image:
      "https://images.unsplash.com/photo-1720659201108-4efe526b289c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    website: "https://www.business1.com",
    category: "technology",
  },
  {
    name: "Mot's Business",
    description: "gadget stores, lorem ipsum something",
    isOnline: false,
    location: "5 makele street",
    storeType: "Physical",
    image:
      "https://plus.unsplash.com/premium_photo-1674740442550-4f787e4e85cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    website: "https://www.business2.com",
    category: "technology",
  },
  {
    name: "Angela 3",
    description: "gadget stores, lorem ipsum something",
    isOnline: true,
    location: "Online",
    storeType: "Online ",
    image:
      "https://images.unsplash.com/photo-1720549385830-905a78562bbe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
    website: "https://www.business3.com",
    category: "food",
  },
  {
    name: "Rita's Business",
    description: "gadget stores, lorem ipsum something",
    isOnline: true,
    location: "Online Store",
    storeType: "Online",
    image:
      "https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZ298ZW58MHx8MHx8fDA%3D",
    website: "https://www.business3.com",
    category: "clothing",
  },
  {
    name: "Rachael's Business",
    description: "gadget stores, lorem ipsum something",
    isOnline: false,
    location: "Port Harcourt",
    storeType: "Physical",
    image:
      "https://images.unsplash.com/photo-1557053964-937650b63311?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxvZ298ZW58MHx8MHx8fDA%3D",
    website: "https://www.business3.com",
    category: "beauty",
  },
  // Add more businesses as needed
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredBusinesses = businesses.filter((business) =>
    business.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" mx-auto py-4">
      <Navbar />

      <div className="my-20">
        <div className=" w-48 h-48 mx-auto">
          <Image
            src="/images/discord-logo (1).jpg"
            alt="logo"
            className="w-full h-auto object-cover mb-4 rounded-full"
            width={1000}
            height={200}
          />
        </div>

        <div className="mt-5 w-[90%] lg:w-[70%] mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center">
            100Pay Explorer
          </h1>
          <p className=" font-medium text-center">
            100 Pay Explorer is a comprehensive search tool that enables users
            to discover businesses utilizing the 100 Pay platform for their
            transactions. This tool ensures that you can easily find merchants
            who support your preferred payment method, making shopping
            convenient and seamless.
          </p>
        </div>
      </div>

      <div className=" w-[90%] lg:w-[70%] mx-auto flex items-center">
        <input
          type="text"
          placeholder="Search for a business..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex w-[86%] mx-auto items-center justify-between rounded-full bg-white px-4 py-5 shadow-lg focus:outline-none"
        />

        <div>
          <button className="flex items-center text-sm border p-2 rounded-full bg-white px-4 py-5 shadow-lg">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/dotty/80/horizontal-settings-mixer.png"
              alt="horizontal-settings-mixer"
            />
            <p className="mx-2">Filter</p>
            <img
              width="18"
              height="18"
              src="https://img.icons8.com/ios-glyphs/30/DBDBDB/sort-down.png"
              alt="sort-down"
            />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 lg:mt-20 w-[90%] lg:w-[80%] mx-auto">
        {filteredBusinesses.map((business, index) => (
          <BusinessCard key={index} business={business} />
        ))}
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import BusinessCard from "@/components/BusinessCard";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { SkeletonCard } from "@/components/SkeletonCard";
import { ArrowRight2, ArrowRight3 } from "iconsax-react";
import { useSearchParams } from "next/navigation";

interface Business {
  name: string;
  description: string;
  isOnline: boolean;
  location: string;
  storeType: string;
  image: string;
  website: string;
  category: string;
  business: string;
}

const businesses: Business[] = [
  {
    name: "Business 1",
    description: "gadget stores, lorem ipsum something",
    isOnline: true,
    location: "Online Store",
    storeType: "Online",
    image:
      "https://images.unsplash.com/photo-1720659201108-4efe526b289c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    website: "https://www.business1.com",
    category: "Education",
    business: "University",
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
    category: "Technology",
    business: "Hardware Stores",
  },
  {
    name: "Angela 3",
    description: "gadget stores, lorem ipsum something",
    isOnline: true,
    location: "Online",
    storeType: "Online",
    image:
      "https://images.unsplash.com/photo-1720549385830-905a78562bbe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
    website: "https://www.business3.com",
    category: "Restaurants and Food",
    business: "Fast Food",
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
    category: "Entertainment and Recreation",
    business: "University",
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
    category: "Beauty and Personal Care",
    business: "University",
  },
  // Add more businesses as needed
];

const categories = [
  {
    name: "Technology",
    sub: ["Hardware Stores", "Tech Startups", "Tech Support Services"],
  },
  {
    name: "Restaurants and Food",
    sub: ["Fast Food", "Bakeries", "Fine Dining", "Pizzerias"],
  },
  {
    name: "Beauty and Personal Care",
    sub: [
      "Hair Saloons",
      "Barber Shops",
      "Nail Saloons",
      "Beauty Spa",
      "Comestics Stores",
    ],
  },
  {
    name: "Entertainment and Recreation",
    sub: [
      "Movie Theaters",
      "Amusement Parks",
      "Night Clubs",
      "Art Galleries",
      "Musuems",
    ],
  },
  {
    name: "Education",
    sub: [
      "Schools",
      "Universities",
      "Dance Studios",
      "Music Schools",
      "Tutoring Centers",
    ],
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<any>("All");
  const [loading, setLoading] = useState(false);
  const [filteredBusinesses, setFilteredBusinesses] = useState<any>(businesses);

  const [darkMode, setDarkMode] = useState(true);

  const searchParams = useSearchParams();

  // const dispatch = useDispatch();

  useEffect(() => {
    // Check if user prefers dark mode initially
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    // Update localStorage and apply dark mode class
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
      // dispatch(setCurrentTheme("dark"));
      // localStorage.setItem("currentTheme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
      // dispatch(setCurrentTheme("light"));
      // localStorage.setItem("currentTheme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const theme = searchParams.get("currentTheme");

    console.log(theme);
    setDarkMode(theme?.includes("dark") || false); // Set darkMode to true if theme is 'dark', otherwise false
  }, [searchParams]);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const filtered = businesses.filter((business) => {
        return (
          (selectedCategory === "All" ||
            business.category === selectedCategory ||
            business.business === selectedCategory ||
            business.storeType === selectedCategory) &&
          business.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setFilteredBusinesses(filtered);
      setLoading(false);
    }, 1000);
  }, [selectedCategory]);

  useEffect(() => {
    const searchedItem = businesses.filter((business) => {
      return business.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredBusinesses(searchedItem);
  }, [searchTerm]);

  return (
    <div className=" mx-auto py-4 mb-8">
      <Navbar />

      <div className="my-20">
        <div className=" w-48 h-48 mx-auto hidden lg:block">
          <Image
            src="/images/discord-logo (1).jpg"
            alt="logo"
            className="w-full h-auto object-cover mb-4 rounded-full"
            width={1000}
            height={200}
          />
        </div>

        <div className="mt-5 w-[90%] lg:w-[70%] mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center dark:text-modernblack-05">
            100Pay Explorer
          </h1>
          <p className="text-center hidden lg:block dark:text-modernblack-05">
            100 Pay Explorer is a comprehensive search tool that enables users
            to discover businesses utilizing the 100 Pay platform for their
            transactions. This tool ensures that you can easily find merchants
            who support your preferred payment method, making shopping
            convenient and seamless. Additionally, you can download the mobile
            app to make payments at these physical stores, enhancing your
            shopping experience.
          </p>
        </div>
      </div>

      <div className=" w-full lg:!w-[70%] mx-auto md:flex items-center">
        <input
          type="text"
          placeholder="Search for a business..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex w-[86%] mx-auto items-center justify-between border border-gray-50 rounded-full bg-white dark:bg-transparent dark:border-modernblack-08 px-4 py-5 shadow-lg focus:outline-none"
        />

        <div className=" mt-5 lg:mt-0 px-8">
          <Drawer>
            <DrawerTrigger>
              <button className="flex items-center text-sm border border-gray-50 dark:bg-transparent dark:border-modernblack-08 p-2 rounded-xl md:rounded-full bg-white px-4 md:py-5 shadow-lg">
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
            </DrawerTrigger>
            <DrawerContent className="max-h-[50vh] dark:bg-[#000]">
              <DrawerHeader className="mt-5">
                <DrawerTitle className="text-left dark:text-modernblack-05">
                  Filter by:
                </DrawerTitle>
                <DrawerDescription className="text-left">
                  You can filter items by choosing your desired category.
                </DrawerDescription>
              </DrawerHeader>

              <div className="px-5 overflow-y-scroll">
                <DrawerClose
                  className="flex items-center my-4 cursor-pointer hover:bg-gray-100 w-fit hover:p-2"
                  onClick={() => setSelectedCategory("All")}
                >
                  {" "}
                  <ArrowRight3
                    size="18"
                    color="#f20733"
                    className="mr-2 text-modernblack-09 dark:text-modernblack-05"
                  />
                  All Stores
                  <ArrowRight2
                    size="15"
                    color="#f20733"
                    className="ml-2 text-modernblack-09 dark:text-modernblack-05"
                  />
                </DrawerClose>
                <DrawerClose
                  className="flex items-center my-4 cursor-pointer hover:bg-gray-100 w-fit hover:p-2"
                  onClick={() => setSelectedCategory("Online")}
                >
                  {" "}
                  <ArrowRight3
                    size="18"
                    color="#f20733"
                    className="mr-2 text-modernblack-09 dark:text-modernblack-05"
                  />
                  Online Stores
                  <ArrowRight2
                    size="15"
                    color="#f20733"
                    className="ml-2 text-modernblack-09 dark:text-modernblack-05"
                  />
                </DrawerClose>
                <DrawerClose
                  className="flex items-center mt-4 cursor-pointer hover:bg-gray-100 w-fit hover:p-2"
                  onClick={() => setSelectedCategory("Physical")}
                >
                  <ArrowRight3
                    size="18"
                    color="#f20733"
                    className="mr-2 text-modernblack-09 dark:text-modernblack-05"
                  />
                  Physical Stores
                  <ArrowRight2
                    size="15"
                    color="#f20733"
                    className="ml-2 text-modernblack-09 dark:text-modernblack-05"
                  />
                </DrawerClose>
                <div className=" overflow-hidden">
                  {categories?.map((item: any, idx: any) => (
                    <div key={idx}>
                      <DrawerClose
                        className="flex items-center my-4 cursor-pointer hover:bg-gray-100 w-fit hover:p-2"
                        onClick={() => setSelectedCategory(item.name)}
                      >
                        <ArrowRight3
                          size="18"
                          color="#f20733"
                          className="mr-2 text-modernblack-09 dark:text-modernblack-05"
                        />
                        {item.name}
                        <ArrowRight2
                          size="15"
                          color="#f20733"
                          className="ml-2 text-modernblack-09 dark:text-modernblack-05"
                        />
                      </DrawerClose>
                      <div className="inline-flex  p-2 w-full overflow-x-scroll scrollbar-hide">
                        {item.sub?.map((subItem: any, subIdx: any) => (
                          <DrawerClose
                            className="bg-gray-100 text-gray-500 p-2 rounded-3xl mx-2 px-4 cursor-pointer text-sm hover:bg-slate-700 hover:text-white whitespace-nowrap"
                            key={subIdx}
                            onClick={() => setSelectedCategory(subItem)}
                          >
                            {subItem}
                          </DrawerClose>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <DrawerFooter>
                <DrawerClose className="absolute top-5 right-5">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios/50/cancel.png"
                    alt="cancel"
                  />
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 lg:mt-20 w-[90%] lg:w-[80%] mx-auto">
        {loading ? (
          <SkeletonCard />
        ) : (
          <>
            {filteredBusinesses.map((business: any, index: any) => (
              <BusinessCard key={index} business={business} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

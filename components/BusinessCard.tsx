import React from "react";
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
  business: string;
}

interface BusinessCardProps {
  business: Business;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => {
  const handleVisitWebsite = () => {
    window.open(business.website, "_blank");
  };

  const handleVisitLocation = () => {
    const googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      business.location
    )}`;
    window.open(googleMapsURL, "_blank");
  };

  return (
    <div className="relative group overflow-hidden rounded-lg ">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={business.image}
          alt={business.name}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
        <div className="absolute bottom-0 top-0 w-full left-0 rounded-xl bg-black bg-opacity-50 p-2 flex flex-col items-start justify-end space-y-2 lg:opacity-0 group-hover:opacity-100 transition-opacity">
          {business.isOnline ? (
            <>
              <button
                onClick={handleVisitWebsite}
                className="bg-white text-black px-2 mb-2 py-1 rounded-3xl hover:bg-white text-xs hidden lg:block"
              >
                Visit Website
              </button>
              <button
                onClick={handleVisitWebsite}
                className="bg-white text-black px-2 mb-2 py-1 rounded-2xl hover:bg-white text-xs lg:hidden flex items-center"
              >
                <img
                  width="18"
                  height="18"
                  src="https://img.icons8.com/glyph-neue/64/000000/internet.png"
                  alt="internet"
                />
                <p className="ml-1">Visit website</p>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleVisitLocation}
                className="bg-white text-black px-2 mb-2 py-1 rounded-3xl hover:bg-white text-xs hidden lg:block"
              >
                Visit Location
              </button>
              <button
                onClick={handleVisitLocation}
                className="bg-white text-black px-2 mb-2 py-1 rounded-2xl hover:bg-white text-xs lg:hidden flex items-center"
              >
                <img
                  width="18"
                  height="18"
                  src="https://img.icons8.com/pastel-glyph/64/000000/marker--v1.png"
                  alt="marker--v1"
                />
                <p className="ml-1">See Location</p>
              </button>
            </>
          )}
        </div>
      </div>
      <h2 className="text-lg font-bold">{business.name}</h2>
      <p className="text-gray-700 text-sm mb-2">{business.description}</p>
      <p className="text-gray-500 text-sm">{business.storeType} Store</p>
    </div>
  );
};

export default BusinessCard;

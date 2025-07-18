import React from "react";
import HeroSVG from "../assets/hero-illustration.svg?react";

const HeroPlaceholder = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12">
            <p className="mt-4 text-gray-500 text-center">
                Start by entering a website URL to see performance results.
            </p>
            <HeroSVG className="w-full max-w-md h-auto" aria-hidden="true" />
            
        </div>
    );
}

export default HeroPlaceholder;
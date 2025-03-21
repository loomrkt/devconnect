"use client"
import { CldImage } from "next-cloudinary";

export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <CldImage
                width="40"
                height="40"
                src="https://res.cloudinary.com/djqniifaa/image/upload/v1742594483/vector-logo-illustration-hexagon-gradient-colorful-style_116762-6152_1-removebg-preview_idzfyl.ico"
                sizes="100vw"
                alt="logo"
                className="animate-pulse"
              />
        </div>
    );
}
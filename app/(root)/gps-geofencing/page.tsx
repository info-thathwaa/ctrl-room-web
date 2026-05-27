import GpsGeofencing from "@/components/gps-geofencing/GpsGeofencing";
import React from "react";

export const metadata = {
  title: "GPS & Geofencing | CTRL-Room",
  description:
    "Take control of your field teams with real-time GPS tracking and customizable geofences.",
};

const page = () => {
  return <GpsGeofencing />;
};

export default page;

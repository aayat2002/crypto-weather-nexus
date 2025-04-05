// "use client";

// import { useSelector } from "react-redux";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Cloud, CloudRain, Sun, Thermometer } from "lucide-react";
// import AddItemForm from "./add-item-form";

// export default function WeatherSection() {
//   const weatherData = useSelector((state: any) => state.weather.cities);

//   const getWeatherIcon = (condition: string) => {
//     switch (condition?.toLowerCase()) {
//       case "rain":
//         return <CloudRain className="h-6 w-6" />;
//       case "cloudy":
//         return <Cloud className="h-6 w-6" />;
//       default:
//         return <Sun className="h-6 w-6" />;
//     }
//   };

//   return (
//     <div className="space-y-4">
//       <h2 className="text-2xl font-bold">Weather Updates</h2>
//       <AddItemForm type="city" placeholder="Add a city (e.g., Paris)" />
//       {Object.entries(weatherData).length === 0 ? (
//         <Card>
//           <CardContent className="py-6">
//             <p className="text-center text-muted-foreground">
//               Add a city to see weather updates
//             </p>
//           </CardContent>
//         </Card>
//       ) : (
//         Object.entries(weatherData).map(([city, data]: [string, any]) => (
//           <Card key={city}>
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-lg font-medium">{city}</CardTitle>
//               {getWeatherIcon(data?.conditions)}
//             </CardHeader>
//             <CardContent>
//               <div className="flex items-center space-x-4">
//                 <Thermometer className="h-4 w-4" />
//                 <span className="text-2xl font-bold">
//                   {data?.temperature ? `${data.temperature}°C` : "Loading..."}
//                 </span>
//               </div>
//               <p className="mt-2 text-sm text-muted-foreground">
//                 {data?.conditions || "Updating weather information..."}
//               </p>
//             </CardContent>
//           </Card>
//         ))
//       )}
//     </div>
//   );
// }
// +++++++++
"use client";

import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, CloudRain, Sun, Thermometer } from "lucide-react";
import AddItemForm from "./add-item-form";

export default function WeatherSection() {
  const weatherData = useSelector((state: any) => state.weather.cities);

  const getWeatherIcon = (condition: string) => {
    switch (condition?.toLowerCase()) {
      case "rain":
        return <CloudRain className="h-6 w-6 text-blue-500" />;
      case "cloudy":
        return <Cloud className="h-6 w-6 text-gray-500" />;
      case "sunny":
        return <Sun className="h-6 w-6 text-yellow-400" />;
      default:
        return <Sun className="h-6 w-6 text-yellow-400" />;
    }
  };

  return (
    <div className="space-y-5">
      <h2 className="text-3xl font-bold tracking-tight">☀️ Weather Updates</h2>

      <AddItemForm type="city" placeholder="Enter a city (e.g., Tokyo)" />

      {Object.entries(weatherData).length === 0 ? (
        <Card className="border-dashed border-2 border-muted">
          <CardContent className="py-10 flex justify-center">
            <p className="text-muted-foreground text-center text-sm">
              🌍 Add a city above to begin tracking the weather.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(weatherData).map(([city, data]: [string, any]) => (
            <Card key={city} className="transition hover:shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-1">
                <CardTitle className="text-xl font-semibold capitalize">
                  {city}
                </CardTitle>
                {getWeatherIcon(data?.conditions)}
              </CardHeader>

              <CardContent className="space-y-2 pt-0">
                <div className="flex items-center space-x-2">
                  <Thermometer className="h-5 w-5 text-muted-foreground" />
                  <span className="text-2xl font-bold">
                    {data?.temperature ? `${data.temperature}°C` : "Loading..."}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground capitalize">
                  {data?.conditions || "Fetching latest data..."}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

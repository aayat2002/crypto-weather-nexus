// "use client";

// import { useEffect } from "react";
// import { useToast } from "@/hooks/use-toast";

// // import WeatherSection from "@/components/weather-section";
// import WeatherSection from "./weather-section";
// import CryptoSection from "@/components/crypto-section";
// // import NewsSection from "@/components/news-section";

// import NewsSection from "./news-section";
// export default function Dashboard() {
//   const { toast } = useToast();

//   useEffect(() => {
//     // Set up WebSocket connection for crypto price updates
//     const ws = new WebSocket(
//       "wss://ws.coincap.io/prices?assets=bitcoin,ethereum,dogecoin"
//     );

//     ws.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       Object.entries(data).forEach(([coin, price]) => {
//         // Show notification for significant price changes (e.g., >5%)
//         if (Math.abs(price) > 5) {
//           toast({
//             title: `${coin.toUpperCase()} Price Alert`,
//             description: `Price has changed by ${price}%`,
//             variant: price > 0 ? "default" : "destructive",
//           });
//         }
//       });
//     };

//     return () => {
//       ws.close();
//     };
//   }, [toast]);

//   return (
//     <div className="min-h-screen bg-background">
//       <header className="border-b">
//         <div className="container mx-auto px-4 py-6">
//           <h1 className="text-4xl font-bold text-foreground">
//             CryptoWeather Nexus
//           </h1>
//         </div>
//       </header>

//       <main className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <WeatherSection />
//           <CryptoSection />
//           <NewsSection />
//         </div>
//       </main>
//     </div>
//   );
// }
// +++++++++++++++

"use client";

import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

import WeatherSection from "./weather-section";
import CryptoSection from "@/components/crypto-section";
import NewsSection from "./news-section";

export default function Dashboard() {
  const { toast } = useToast();

  useEffect(() => {
    // Set up WebSocket connection for crypto price updates
    const ws = new WebSocket(
      "wss://ws.coincap.io/prices?assets=bitcoin,ethereum,dogecoin"
    );

    ws.onmessage = (event) => {
      // CoinCap sends price data as string values
      const data = JSON.parse(event.data) as Record<string, string>;

      Object.entries(data).forEach(([coin, priceStr]) => {
        const price = parseFloat(priceStr);

        // Show notification for significant price changes (e.g., >5%)
        if (Math.abs(price) > 5) {
          toast({
            title: `${coin.toUpperCase()} Price Alert`,
            description: `Price has changed by ${price.toFixed(2)}%`,
            variant: price > 0 ? "default" : "destructive",
          });
        }
      });
    };

    return () => {
      ws.close();
    };
  }, [toast]);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-foreground">
            CryptoWeather Nexus
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <WeatherSection />
          <CryptoSection />
          <NewsSection />
        </div>
      </main>
    </div>
  );
}

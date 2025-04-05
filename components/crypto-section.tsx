// "use client";

// import { useSelector } from "react-redux";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { TrendingUp, TrendingDown, CircleDollarSign } from "lucide-react";

// export default function CryptoSection() {
//   const cryptoData = useSelector((state: any) => state.crypto.data);

//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     }).format(price);
//   };

//   const formatPercentage = (percentage: number) => {
//     return `${percentage > 0 ? "+" : ""}${percentage.toFixed(2)}%`;
//   };

//   if (!cryptoData) {
//     return (
//       <div className="space-y-4">
//         <h2 className="text-2xl font-bold">Crypto Prices</h2>
//         <Card>
//           <CardContent className="py-4">
//             <p className="text-muted-foreground">Loading crypto data...</p>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-4">
//       <h2 className="text-2xl font-bold">Crypto Prices</h2>
//       {Object.entries(cryptoData).map(([crypto, data]: [string, any]) => (
//         <Card key={crypto}>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-lg font-medium capitalize">
//               {crypto}
//             </CardTitle>
//             <CircleDollarSign className="h-6 w-6" />
//           </CardHeader>
//           <CardContent>
//             <div className="flex items-center justify-between">
//               <span className="text-2xl font-bold">
//                 {data?.price ? formatPrice(data.price) : "Loading..."}
//               </span>
//               {data?.priceChange && (
//                 <div
//                   className={`flex items-center ${
//                     data.priceChange > 0 ? "text-green-500" : "text-red-500"
//                   }`}
//                 >
//                   {data.priceChange > 0 ? (
//                     <TrendingUp className="h-4 w-4 mr-1" />
//                   ) : (
//                     <TrendingDown className="h-4 w-4 mr-1" />
//                   )}
//                   <span>{formatPercentage(data.priceChange)}</span>
//                 </div>
//               )}
//             </div>
//             <p className="mt-2 text-sm text-muted-foreground">
//               24h Volume:{" "}
//               {data?.volume ? formatPrice(data.volume) : "Updating..."}
//             </p>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// }
// +++++++++++
// "use client";

// import { useSelector } from "react-redux";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { TrendingUp, TrendingDown, CircleDollarSign } from "lucide-react";

// export default function CryptoSection() {
//   const cryptoData = useSelector((state: any) => state.crypto.data);

//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     }).format(price);
//   };

//   const formatPercentage = (percentage: number) => {
//     return `${percentage > 0 ? "+" : ""}${percentage.toFixed(2)}%`;
//   };

//   return (
//     <div className="space-y-5">
//       <h2 className="text-3xl font-bold tracking-tight">💰 Crypto Prices</h2>

//       {cryptoData && Object.keys(cryptoData).length > 0 ? (
//         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {Object.entries(cryptoData).map(([crypto, data]: [string, any]) => (
//             <Card key={crypto} className="transition hover:shadow-md">
//               <CardHeader className="flex flex-row items-center justify-between pb-1">
//                 <CardTitle className="text-xl font-semibold capitalize">
//                   {crypto}
//                 </CardTitle>
//                 <CircleDollarSign className="h-6 w-6 text-yellow-500" />
//               </CardHeader>

//               <CardContent className="space-y-2 pt-0">
//                 <div className="flex items-center justify-between">
//                   <span className="text-2xl font-bold">
//                     {data?.price ? formatPrice(data.price) : "Loading..."}
//                   </span>
//                   {data?.priceChange && (
//                     <div
//                       className={`flex items-center text-sm font-medium ${
//                         data.priceChange > 0 ? "text-green-500" : "text-red-500"
//                       }`}
//                     >
//                       {data.priceChange > 0 ? (
//                         <TrendingUp className="h-4 w-4 mr-1" />
//                       ) : (
//                         <TrendingDown className="h-4 w-4 mr-1" />
//                       )}
//                       {formatPercentage(data.priceChange)}
//                     </div>
//                   )}
//                 </div>
//                 <p className="text-sm text-muted-foreground">
//                   24h Volume:{" "}
//                   {data?.volume ? formatPrice(data.volume) : "Updating..."}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       ) : (
//         <Card className="border-dashed border-2 border-muted">
//           <CardContent className="py-10 flex justify-center">
//             <div className="w-full p-4 border border-border rounded-lg bg-muted shadow-sm">
//               <p className="text-muted-foreground text-center text-sm">
//                 📉 Loading crypto data...
//               </p>
//             </div>
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   );
// }
// +++++++++++++++++++++++++
"use client";

import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, CircleDollarSign } from "lucide-react";

export default function CryptoSection() {
  // FIXED: Corrected selector to match your slice
  const cryptoData = useSelector((state: any) => state.crypto.coins);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const formatPercentage = (percentage: number) => {
    return `${percentage > 0 ? "+" : ""}${percentage.toFixed(2)}%`;
  };

  return (
    <div className="space-y-5">
      <h2 className="text-3xl font-bold tracking-tight">💰 Crypto Prices</h2>

      {cryptoData && Object.keys(cryptoData).length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(cryptoData).map(([crypto, data]: [string, any]) => (
            <Card key={crypto} className="transition hover:shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-1">
                <CardTitle className="text-xl font-semibold capitalize">
                  {crypto}
                </CardTitle>
                <CircleDollarSign className="h-6 w-6 text-yellow-500" />
              </CardHeader>

              <CardContent className="space-y-2 pt-0">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">
                    {data?.price ? formatPrice(data.price) : "Loading..."}
                  </span>
                  {data?.change24h !== undefined && (
                    <div
                      className={`flex items-center text-sm font-medium ${
                        data.change24h > 0 ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {data.change24h > 0 ? (
                        <TrendingUp className="h-4 w-4 mr-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 mr-1" />
                      )}
                      {formatPercentage(data.change24h)}
                    </div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  Market Cap:{" "}
                  {data?.marketCap
                    ? formatPrice(data.marketCap)
                    : "Updating..."}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="border-dashed border-2 border-muted">
          <CardContent className="py-10 flex justify-center">
            <div className="w-full p-4 border border-border rounded-lg bg-muted shadow-sm">
              <p className="text-muted-foreground text-center text-sm">
                📉 Loading crypto data...
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

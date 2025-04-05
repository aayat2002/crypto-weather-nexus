"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/redux/store";
import { fetchWeatherData } from "@/lib/redux/features/weatherSlice";
import { fetchCryptoData } from "@/lib/redux/features/cryptoSlice";
import { fetchNewsData } from "@/lib/redux/features/newsSlice";
import Dashboard from "@/components/dashboard";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Fetch initial data
    const cities = ["New York", "London", "Tokyo"];
    const cryptos = ["bitcoin", "ethereum", "dogecoin"];

    cities.forEach((city) => dispatch(fetchWeatherData(city)));
    cryptos.forEach((crypto) => dispatch(fetchCryptoData(crypto)));
    dispatch(fetchNewsData());

    // Set up periodic data refresh
    const refreshInterval = setInterval(() => {
      cities.forEach((city) => dispatch(fetchWeatherData(city)));
      cryptos.forEach((crypto) => dispatch(fetchCryptoData(crypto)));
      dispatch(fetchNewsData());
    }, 60000);

    return () => clearInterval(refreshInterval);
  }, [dispatch]);

  return <Dashboard />;
}

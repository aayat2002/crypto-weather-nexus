// components/CryptoSocket.tsx
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCryptoPrice } from "@/lib/redux/features/cryptoSlice";

const CryptoSocket = ({ coins }: { coins: string[] }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (coins.length === 0) return;

    // const ws = new WebSocket(
    //   `wss://ws.coincap.io/prices?assets=${coins.join(",")}`
    // );

    const ws = new WebSocket(
      "wss://ws.coincap.io/prices?assets=bitcoin,ethereum,dogecoin"
    );

    ws.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      for (const coinId in data) {
        const price = parseFloat(data[coinId]);
        dispatch(updateCryptoPrice({ coinId, price }));
      }
    };

    ws.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    return () => {
      ws.close();
    };
  }, [coins, dispatch]);

  return null; // This component only manages WebSocket connection
};

export default CryptoSocket;

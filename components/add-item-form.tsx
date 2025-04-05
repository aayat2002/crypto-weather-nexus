// "use client";

// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Plus } from "lucide-react";
// import { fetchWeatherData } from "@/lib/redux/features/weatherSlice";
// import { fetchCryptoData } from "@/lib/redux/features/cryptoSlice";

// interface AddItemFormProps {
//   type: "city" | "crypto";
//   placeholder: string;
// }

// export default function AddItemForm({ type, placeholder }: AddItemFormProps) {
//   const [input, setInput] = useState("");
//   const dispatch = useDispatch();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     if (type === "city") {
//       dispatch(fetchWeatherData(input.trim()));
//     } else {
//       dispatch(fetchCryptoData(input.toLowerCase().trim()));
//     }

//     setInput("");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
//       <Input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder={placeholder}
//         className="flex-1"
//       />
//       <Button type="submit" size="icon">
//         <Plus className="h-4 w-4" />
//       </Button>
//     </form>
//   );
// }
// ++++++++++++++++++++++++

// "use client";

// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Plus } from "lucide-react";
// import { fetchWeatherData } from "@/lib/redux/features/weatherSlice";
// import { fetchCryptoData } from "@/lib/redux/features/cryptoSlice";
// import type { AppDispatch } from "@/lib/redux/store";

// interface AddItemFormProps {
//   type: "city" | "crypto";
//   placeholder: string;
// }

// export default function AddItemForm({ type, placeholder }: AddItemFormProps) {
//   const [input, setInput] = useState("");
//   const dispatch = useDispatch<AppDispatch>();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     if (type === "city") {
//       dispatch(fetchWeatherData(input.trim()));
//     } else {
//       dispatch(fetchCryptoData(input.toLowerCase().trim()));
//     }

//     setInput("");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
//       <Input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder={placeholder}
//         className="w-full px-4 py-2 border border-input rounded-lg text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
//       />
//       <Button type="submit" size="icon">
//         <Plus className="h-6 w-5" />
//       </Button>
//     </form>
//   );
// }
// ++++++++++++
"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { fetchWeatherData } from "@/lib/redux/features/weatherSlice";
import { fetchCryptoData } from "@/lib/redux/features/cryptoSlice";
import type { AppDispatch } from "@/lib/redux/store";

interface AddItemFormProps {
  type: "city" | "crypto";
  placeholder: string;
}

export default function AddItemForm({ type, placeholder }: AddItemFormProps) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (type === "city") {
      dispatch(fetchWeatherData(input.trim()));
    } else {
      dispatch(fetchCryptoData(input.toLowerCase().trim()));
    }

    setInput("");
  };

  return (
    // <form
    //   onSubmit={handleSubmit}
    //   className="flex items-center gap-2 p-2 rounded-xl bg-muted shadow-sm border border-border"
    // >
    //   <Input
    //     type="text"
    //     value={input}
    //     onChange={(e) => setInput(e.target.value)}
    //     placeholder={placeholder}
    //     className="flex-1 px-4 py-2  h-5 w-5 rounded-lg text-sm bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
    //   />
    //   <Button
    //     type="submit"
    //     size="icon"
    //     className="bg-primary hover:bg-primary/90 text-white rounded-lg"
    //   >
    //     <Plus className="h-5 w-5" />
    //   </Button>
    // </form>
    // ++++++

    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 p-3 rounded-xl bg-muted shadow-sm border border-border mb-6"
    >
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
        className="flex-1 h-10 px-4 py-2 rounded-lg text-sm bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
      />
      <Button
        type="submit"
        size="icon"
        className="bg-primary hover:bg-primary/90 text-white rounded-lg h-10 w-10"
      >
        <Plus className="h-5 w-5" />
      </Button>
    </form>
  );
}

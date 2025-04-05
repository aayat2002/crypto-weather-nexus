// "use client";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Newspaper } from "lucide-react";

// export default function NewsSection() {
//   return (
//     <Card className="w-full">
//       <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//         <CardTitle className="text-sm font-bold">Latest News</CardTitle>
//         <Newspaper className="h-5 w-5 text-muted-foreground " />
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-4">
//           <p className="text-sm text-muted-foreground">loading newss.</p>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
// ++++

// "use client";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Newspaper } from "lucide-react";

// export default function NewsSection() {
//   return (
//     <Card className="w-full border-dashed border-muted transition hover:shadow-md">
//       <CardHeader className="flex items-center justify-between pb-2">
//         <CardTitle className="text-3xl  font-semibold">
//           📰 Latest News
//         </CardTitle>

//       </CardHeader>

//       <CardContent className="py-8 flex items-center justify-center">
//         <p className="text-sm text-muted-foreground">
//           Loading news articles...
//         </p>
//       </CardContent>

//       <CardContent className="py-8 flex justify-center">
//         <div className="flex items-center gap-2 rounded-md border border-muted px-4 py-3 bg-muted/30 text-muted-foreground">

//           <p className="text-sm">Loading news articles...</p>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
// +++++++++++++++++++++++++++++++++

// "use client";

// import { useState, useEffect } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Newspaper } from "lucide-react";

// export default function NewsSection() {
//   const [search, setSearch] = useState("crypto");
//   const [articles, setArticles] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!search) return;
//     setLoading(true);

//     const fetchNews = async () => {
//       try {
//         const response = await fetch(
//           `https://newsapi.org/v2/everything?q=${search}&apiKey=YOUR_NEWS_API_KEY&pageSize=5`
//         );
//         const data = await response.json();
//         setArticles(data.articles || []);
//       } catch (error) {
//         console.error("Error fetching news:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, [search]);

//   return (
//     <Card className="w-full border-dashed border-muted transition hover:shadow-md">
//       <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4">
//         <CardTitle className="text-3xl font-semibold flex items-center gap-2">
//           📰 Latest News
//         </CardTitle>
//         <Input
//           type="text"
//           placeholder="Search news topic (e.g. bitcoin, ethereum)"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full sm:w-[300px]"
//         />
//       </CardHeader>

//       <CardContent className="space-y-4">
//         {loading ? (
//           <div className="flex items-center gap-2 rounded-md border border-muted px-4 py-3 bg-muted/30 text-muted-foreground">
//             <p className="text-sm">Loading news articles...</p>
//           </div>
//         ) : articles.length > 0 ? (
//           articles.map((article, index) => (
//             <div
//               key={index}
//               className="p-4 rounded-md border border-muted bg-muted/20"
//             >
//               <a href={article.url} target="_blank" rel="noopener noreferrer">
//                 <h3 className="text-lg font-semibold">{article.title}</h3>
//               </a>
//               <p className="text-sm text-muted-foreground mt-1">
//                 {article.source?.name} •{" "}
//                 {new Date(article.publishedAt).toLocaleString()}
//               </p>
//               <p className="text-sm mt-2">{article.description}</p>
//             </div>
//           ))
//         ) : (
//           <p className="text-sm text-muted-foreground">No articles found.</p>
//         )}
//       </CardContent>
//     </Card>
//   );
// }
// +++++++++++++++++++++++++++++++ gpttttt this workk
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Newspaper, Search } from "lucide-react";

export default function NewsSection() {
  const [query, setQuery] = useState("crypto");
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    if (!query) return;
    setLoading(true);

    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&from=${
          new Date().toISOString().split("T")[0]
        }&sortBy=publishedAt&language=en&apiKey=${
          process.env.NEXT_PUBLIC_NEWS_API_KEY
        }&pageSize=5`
      );
      const data = await response.json();
      setArticles(data.articles || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full border-dashed border-muted transition hover:shadow-md">
      {/* <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4">
        <CardTitle className="text-3xl font-semibold flex items-center gap-2">
          📰 Latest News
        </CardTitle>
        <div className="relative w-full sm:w-[300px]">
          <Input
            type="text"
            placeholder="Search topic (e.g. bitcoin)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pr-10"
          />
          <Search
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground cursor-pointer"
            onClick={fetchNews}
          />
        </div>
      </CardHeader> */}
      {/* +++++++++++++ */}

      <CardHeader className="flex flex-col items-center gap-4 pb-4">
        <CardTitle className="text-3xl font-semibold flex items-center gap-2">
          📰 Latest News
        </CardTitle>

        {/* Centered Input with Icon inside */}
        <div className="relative w-full max-w-md">
          <Input
            type="text"
            placeholder="Search topic (e.g. bitcoin)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchNews()}
            className="pl-4 pr-10"
          />
          <Search
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground cursor-pointer"
            onClick={fetchNews}
          />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {loading ? (
          <div className="flex items-center gap-2 rounded-md border border-muted px-4 py-3 bg-muted/30 text-muted-foreground">
            <p className="text-sm">Loading news articles...</p>
          </div>
        ) : articles.length > 0 ? (
          articles.map((article, index) => (
            <div
              key={index}
              className="p-4 rounded-md border border-muted bg-muted/20"
            >
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <h3 className="text-lg font-semibold">{article.title}</h3>
              </a>
              <p className="text-sm text-muted-foreground mt-1">
                {article.source?.name} •{" "}
                {new Date(article.publishedAt).toLocaleString()}
              </p>
              <p className="text-sm mt-2">{article.description}</p>
            </div>
          ))
        ) : (
          <p className="text-sm text-muted-foreground">No articles found.</p>
        )}
      </CardContent>
    </Card>
  );
}

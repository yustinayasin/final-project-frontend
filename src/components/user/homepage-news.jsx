import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NewsLoader } from "components/ui/loader";

export function HomepageNews({ allNews }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://berita-indo-api.vercel.app/v1/okezone-news?title=vaksin")
      .then((res) => {
        if (allNews) {
          setNews(res.data.data);
        } else {
          setNews(res.data.data?.slice(0, 3));
        }
        setLoading(false);
      });
  }, []);
  return (
    <div className="flex flex-col py-8 space-y-3 lg:px-8">
      <p className="text-base font-bold text-left font-primary md:text-lg">
        Berita Terbaru
      </p>
      {loading ? (
        <div className="flex flex-col items-center justify-center">
          <NewsLoader />
        </div>
      ) : (
        <>
          <div className="space-y-2">
            {news.map((item) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.link}
                className="flex flex-col p-3 space-y-1 transition-colors duration-200 bg-white rounded-lg shadow-lg hover:bg-gray-200"
                key={item.id}
              >
                <div className="flex items-center">
                  <img
                    src={item.image.medium}
                    alt={item.title}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <p className="text-xs font-bold text-gray-800 font-primary md:text-sm">
                      {item.title}
                    </p>
                    <p className="text-xs font-medium text-gray-600">
                      {new Date(item.isoDate).toLocaleDateString("id-ID", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 md:text-sm">
                  {item.content}
                </p>
              </a>
            ))}
          </div>
          {!allNews && (
            <div>
              <Link to="/user/news">
                <p className="px-2 py-1 text-base font-bold text-center bg-dark font-primary rounded-xl md:text-base dark:bg-white dark:text-dark hover:opacity-75">
                  Lihat Berita Lainnya...
                </p>
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
}
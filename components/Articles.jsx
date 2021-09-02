import Link from "next/link";

const Articles = ({ articles }) => {
  return (
    <div className="flex flex-wrap space-x-3 mt-6">
      {articles?.map((article) => (
        <div className="rounded border border-gray-700 w-70 mt-3">
          <img src={article?.cover_image} className="h-64 w-70" />
          <div className="p-3">
            <h2 className="text-gray-400 text-lg font-semibold">
              {article?.title}
            </h2>
            <div className="flex items-center text-gray-300 text-xs">
              {article?.tag_list?.map((list) => (
                <p className="mx-1">#{list}</p>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">{article?.description}</p>
            <Link href={article?.url}>
              <button className="bg-gray-800 px-6 mt-3 rounded py-1 text-xs">
                View
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;

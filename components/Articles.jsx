import Link from "next/link";
import Image from "next/image";

const Articles = ({ articles }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-8">
      {articles?.map((article) => (
        <div className="rounded border border-gray-700 w-70 mt-3">
          <Image src={article?.cover_image} height="300" width="600" />
          <div className="p-3">
            <h2 className="text-gray-400 text-lg font-semibold leading-5 mb-3">
              {article?.title}
            </h2>
            <div className="flex flex-wrap items-center text-gray-300 text-sm">
              {article?.tag_list?.map((list) => (
                <p className="mr-1">#{list}</p>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">{article?.description}</p>
            <Link href={article?.url}>
              <button className="bg-gray-800 px-6 mt-3 rounded py-1 text-sm">
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

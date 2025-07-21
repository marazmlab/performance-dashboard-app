import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://devoted-flowers-148a8fb309.strapiapp.com/api/about-project";

function AboutProject() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(json => setData(json.data));
  }, []);

  if (!data) return <div className="text-center py-10 text-lg">Loading...</div>;

  const { title, description, repoUrl, demoUrl } = data;

  return (
    <section className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8  transition-colors">
      <Link
        to="/"
        className="inline-block text-gray-800 hover:underline dark:text-gray-100 mb-4"
      >
        ← Back to Dashboard
      </Link>
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{title}</h1>
      <div className="flex gap-4 mb-6">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-800 dark:bg-white text-white dark:text-gray-900 rounded hover:bg-blue-700 dark:hover:bg-blue-700 dark:hover:text-white transition"
        >
          Check GitHub repo
        </a>
      </div>
      
      <div className="prose dark:prose-invert mb-6">
        {Array.isArray(description)
          ? description.map((block, idx) => (
              <p key={idx} className="mb-">
                {block.children
                  ? block.children.map((child, cidx) => child.text).join(" ")
                  : ""}
              </p>
            ))
          : description}
      </div>
    </section>
  );
}

export default AboutProject;
import { Link } from "react-router-dom";

const AboutProject = () => (
  <main className="max-w-2xl mx-auto py-8 px-4">
    <Link to="/" className="text-gray-600 hover:underline mb-4 block">
      ← Back to Dashboard
    </Link>
    <h1 className="text-3xl font-bold mb-4">About Project</h1>
    <p>
      This page will display information about the project. Content can be managed via Strapi Cloud in the future.
    </p>
  </main>
);

export default AboutProject;
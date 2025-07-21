import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const API_URL = 'https://devoted-flowers-148a8fb309.strapiapp.com/api/about-project';

const AboutProject = () => {
  const [data, setData] = useState(null); 

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(json => setData(json.data));
  }, []);

  if(!data) return <div>Loading...</div>

  const { title, description, repoUrl, demoUrl } = data.attributes;

  return (
    <section>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      <p>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">Repozytorium</a>
      </p>
      <p>
        <Link to="/">Back to Dashboard</Link>
      </p>
    </section>
  );


};

export default AboutProject;
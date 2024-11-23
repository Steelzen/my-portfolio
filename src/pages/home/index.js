import React, { useEffect, useState  } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";

const HomeComponent = React.lazy(() => import("./HomeComponent"));

export const Home = () => {
  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    const loadComponents = async () => {
      await Promise.all([
        import("./HomeComponent"),
      ]);
      setIsLoaded(true);
    };

    loadComponents();
  }, []);

  if (!isLoaded) return <div>Loading the page...</div>;

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <HomeComponent  />
      </section>
    </HelmetProvider>
  );
};

import type { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
useEffect(() => {
        import('~/components/WebApps').then((module) => {
            customElements.define("webapp-1", module.WebApp1);
            customElements.define("webapp-2", module.WebApp2);
        });
      }, []);

  return (
    <div className="font-sans p-4">
      <h1>Here are two web-components</h1>
      <webapp-1 />
      <webapp-2 />
    </div>
  );
}



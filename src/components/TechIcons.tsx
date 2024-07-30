import React from 'react'; // Optional for React 17+ but good practice
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiGit,
  SiNodedotjs,
  SiSass,
  SiWebpack,
  SiRedux,
  SiGraphql, 
  SiFirebase,
  SiNextdotjs,
  SiStyledcomponents,
} from 'react-icons/si';

function TechIcons() {
  return (
    <div className="flex items-center justify-center">
      <SiHtml5 className="mr-8 text-6xl icon html" />
      <SiCss3 className="mr-8 text-6xl icon css" />
      <SiJavascript className="mr-8 text-6xl icon javascript" />
      <SiReact className="mr-8 text-6xl icon react" />
      <SiTypescript className="mr-8 text-6xl icon typescript" />
      <SiTailwindcss className="mr-8 text-6xl icon tailwind" />
      <SiMongodb className="mr-8 text-6xl icon mongodb" />
      <SiGit className="mr-8 text-6xl icon git" />
      <SiNodedotjs className="mr-8 text-6xl icon nodejs" />
      <SiSass className="mr-8 text-6xl icon sass" />
      <SiWebpack className="mr-8 text-6xl icon webpack" />
      <SiRedux className="mr-8 text-6xl icon redux" />
      <SiGraphql className="mr-8 text-6xl icon graphql" />
      <SiFirebase className="mr-8 text-6xl icon firebase" />
      <SiNextdotjs className="mr-8 text-6xl icon nextjs" />
      <SiStyledcomponents className="mr-8 text-6xl icon styled-components" />
    </div>
  );
}

export default TechIcons;

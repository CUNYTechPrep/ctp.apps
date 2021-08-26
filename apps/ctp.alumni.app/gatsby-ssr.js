import React from 'react';

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      async
      src="https://www.googleoptimize.com/optimize.js?id=OPT-NR3T8JQ"
    />,
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-EHPRWCNXFV"
    />,
    <script
      dangerouslySetInnerHTML={{
        __html: `
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'UA-201299127-1');
	gtag('config', 'G-EHPRWCNXFV');
	`,
      }}
    ></script>,
  ]);
};

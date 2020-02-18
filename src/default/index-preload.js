import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import fs from 'fs';

import { PagePreloader } from 'frontm/components/ui/PagePreloader';

const htmlMarkup = ReactDOMServer.renderToString(
  <PagePreloader color="black" />
);

export default params => {
  const htmlTemplatePath = path.join('public', params.instance, 'index.html');
  const appHTML = fs.readFileSync(htmlTemplatePath).toString();

  return appHTML
    .replace('{{__injected_preloader__}}', htmlMarkup);
};

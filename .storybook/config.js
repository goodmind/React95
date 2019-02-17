import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import "../src/components/index.css";
addDecorator(
  withInfo({
    inline: true,
    header: false,
    source: true,
    maxPropsIntoLine: 1,
    styles: stylesheet => ({
      // Setting the style with a function
      ...stylesheet,
      table: {
        background: "red"
      }
    })
  })
);

const req = require.context("../src", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
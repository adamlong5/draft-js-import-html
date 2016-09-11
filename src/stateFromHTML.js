/* @flow */

const {stateFromElement} = require('../draft-js-import-element/lib/main')
import parseHTML from './parseHTML';

const {ContentState} = global.Draft

type Options = {
  parser?: (html: string) => Element;
};

export default function stateFromHTML(html: string, options?: Options): ContentState {
  let parser = (options == null || options.parser == null) ? parseHTML : options.parser;
  let element = parser(html);
  return stateFromElement(element, options);
}

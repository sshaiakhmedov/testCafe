import { Selector } from 'testcafe';

const getElementsByXPath = Selector((xpath) => {
  // eslint-disable-next-line max-len
  const iterator = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
  const items = [];

  let item = iterator.iterateNext();

  while (item) {
    items.push(item);
    item = iterator.iterateNext();
  }

  return items;
});

// eslint-disable-next-line func-names
export default function (xpath) {
  return Selector(getElementsByXPath(xpath));
}

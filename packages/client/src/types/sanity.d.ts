interface Image {
  _type: 'image';
  asset: Asset;
}

interface Asset {
  _type: 'reference';
  _ref: string;
}

function importAll(r) {
  return r.keys().map((key, index) => ({
    id: index + 1,
    src: r(key),
    alt: `Gallery Image ${index + 1}`
  }));
}

const galleryImages = importAll(
  require.context('../assets/', false, /\.(png|jpe?g|svg)$/)
);

export default galleryImages;
function multiplyNumeric(image) {
  for (var K in image) {
    if (isFinite(image[K])) {
      image[K] = image[K] * 2;
    } else continue;
  }
  return image;
}

module.exports = multiplyNumeric;

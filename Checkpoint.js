function produitScalaire(V1, V2) {
  var ps = 0;
  for (let i = 0; i < V1.length; i++) {
    ps = V1[i] * V2[i] + ps;
  }
  return ps;
}
produitScalaire([1, 2], [1, 2]);
function orthogonaux(vectors) {
  for (let i = 0; i < vectors.length; i++) {
    for (let j = i + 1; j < vectors.length; j++) {
      if (produitScalaire(vectors[i], vectors[j]) !== 0) {
        return false;
      }
    }
  }
  return true;
}

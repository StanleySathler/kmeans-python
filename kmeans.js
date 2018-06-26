const absoluteNumber = (number) => (
  number < 0
    ? number * (-1)
    : number
);

const distanceFromCenter = (number, center) => (
  absoluteNumber(number - center)
);

const kmeans = (groups, centers) => {
  const nextGroups = [];

  for (let groupsIndex = 0; groupsIndex < groups.length; groupsIndex++) {
    const currentGroup = groups[groupsIndex];

    // Add an empty array for each new subgroup
    for (let indexCenters = 0; indexCenters < centers.length; indexCenters++)
      nextGroups[indexCenters] = [];

    for (let numbersIndex = 0; numbersIndex < currentGroup.length; numbersIndex++) {
      const currentNumber = currentGroup[numbersIndex];

      let indexNearestCenter = 0;
      let lessDistanceFromCenter = distanceFromCenter(currentNumber, centers[0]);

      for (let indexCenters = 0; indexCenters < centers.length; indexCenters++) {
        const currentCenter = centers[indexCenters];
        if (distanceFromCenter(currentNumber, currentCenter) < lessDistanceFromCenter) {
          indexNearestCenter = indexCenters;
          lessDistanceFromCenter = distanceFromCenter(currentNumber, currentCenter);
        }
      }

      nextGroups[indexNearestCenter].push(currentNumber);
    }
  }

  return nextGroups;
};

(function main() {
  const group = [
    20, 40, 2, 1, 6, 7, 18, 21, 4, 5,
    201, 37, 3, 30, 36, 46, 43, 77, 17,
    9, 211, 210, 280, 180, 120, 161, 1000,
    1008, 107, 98, 97
  ];

  console.log(kmeans([group], [6, 18, 1000]));
})();

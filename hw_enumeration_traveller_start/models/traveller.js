const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function () {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
  // return this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
  // return this.journeys.map(journey => journey.endLocation);
};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map((journey) => {
    return journey.transport;
  });
  // return this.journeys.map(journey => journey.getModesOfTransport);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
  // return this.journeys.filter(journey => journey.transport === transport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
    return this.journeys.filter((journey) => {
      return journey.distance >= minDistance;
  });
  // return this.journeys.filter(journey => journey.distance >= minDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((running, journey) => {
    return running += journey.distance
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const unique = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  return this.getModesOfTransport().filter(unique);
};

// return [...new Set(this.getModesOfTransport())];


module.exports = Traveller;

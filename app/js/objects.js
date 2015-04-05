var Planet = require('./classes/Planet');
var BattleGroup = require('./classes/BattleGroup');

var Tatooine = new Planet({
  id: "Tatooine",
  type: "Planet",
  radius: 100,
  color: 0x000000,
  texture: 'assets/mars.jpg',
  homePosition: new THREE.Vector3(-300, 100, 0),
  autoRotationSpeed: -0.005,
  videoId: 'video',
  moons: {
    count: 2
  }
});

var Hoth = new Planet({
  id: "Hoth",
  type: "Planet",
  radius: 70,
  color: 0x000000,
  texture: 'assets/planet_hoth.png',
  homePosition: new THREE.Vector3(300, 100, 0),
  autoRotationSpeed: -0.005,
  videoId: 'video',
  moons: {
    count: 4
  }
});

var RebelAllianceBattleGroup = new BattleGroup({
  id: "Rebal Alliance Battle Group",
  type: "BattleGroup",
  laserColor: 0x3FFF00,
  obj: 'assets/star-wars/ARC170-2/Arc170.obj',
  mtl: 'assets/star-wars/ARC170-2/Arc170.mtl',
  homePosition: new THREE.Vector3(200, -100, 0),
  radius: 40,
  shipPositions: [
    new THREE.Vector3(0, 40, 0),
    new THREE.Vector3(20, 20, 0),
    new THREE.Vector3(-20, 20, 0),

    new THREE.Vector3(0, 0, 30),
    new THREE.Vector3(0, 0, -30),
  ],
  autoRotationSpeed: -0.004,
  scale: 0.02,
  videoId: 'video'
});

var RepublicBattleGroup = new BattleGroup({
  id: "Republic Battle Group",
  type: "BattleGroup",
  laserColor: 0xDC143C,
  obj: 'assets/star-wars/ARC170-2/Arc170.obj',
  mtl: 'assets/star-wars/ARC170-2/Arc170.mtl',
  homePosition: new THREE.Vector3(-200, -100, 0),
  radius: 40,
  shipPositions: [
    new THREE.Vector3(0, 40, 0),
    new THREE.Vector3(20, 20, 0),
    new THREE.Vector3(-20, 20, 0),

    new THREE.Vector3(0, 0, 30),
    new THREE.Vector3(0, 0, -30),
  ],
  autoRotationSpeed: -0.004,
  scale: 0.02,
  videoId: 'video'
});

var sun = new THREE.Mesh(
  new THREE.SphereGeometry(50, 64, 64),
  new THREE.MeshBasicMaterial({
    map: THREE.ImageUtils.loadTexture("assets/texture_sun.jpg")
  }) 
);

module.exports = {
  objects: [
    Hoth, Tatooine, RebelAllianceBattleGroup, RepublicBattleGroup
  ],
  sun: sun
};

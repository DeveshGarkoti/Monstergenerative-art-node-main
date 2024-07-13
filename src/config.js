const layersOrder = [
    { name: 'background', number: 117 },
    { name: 'background1', number: 1 },
    { name: 'hands', number: 7 },
    { name: 'legs', number: 8 },
    { name: 'horns', number: 15 },
    { name: 'body', number: 108 },
    { name: 'eyes', number: 164 },
    { name: 'mouth', number: 67 },
];
  
  
const format = {
    width: 3000,
    height: 3000
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 1000;

module.exports = { layersOrder, format, rarity, defaultEdition };

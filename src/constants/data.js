import images from './images';

const appetizers = [
  {
    title: 'Clams Kimsino',
    price: '$26',
    tags: 'Bacon-Kimchi Butter, Breadcrumbs',
  },
  {
    title: 'Seared Foie Gras',
    price: '$29',
    tags: 'Apples, Caramel Cider Gastrique, Rossa Onion, Seeded Rye Sourdough',
  },
  {
    title: 'Oyster Rockefeller',
    price: '$28',
    tags: 'Greens, Shallot Butter, Absinthe',
  },
  {
    title: 'Golden Beet Salad',
    price: '$19',
    tags: 'Pistachios, Sesame, Yogurt',
  },
  {
    title: 'Cured Salmon',
    price: '$26',
    tags: 'Gribiche, Salmon Roe, Pumpernickel, Caper Berries',
  },
];

const mains = [
  {
    title: 'Tortiglioni',
    price: '$32',
    tags: 'Butternut Squash, Mushroom, Parmesan',
  },
  {
    title: "Mushroom Pot Pie",
    price: '$32',
    tags: 'Cannellini Beans, Kale, Thyme',
  },
  {
    title: 'Brick Pressed Jerk Chicken',
    price: '$36',
    tags: 'Carolina Gold Rice, Sweet Potato, Cilantro',
  },
  {
    title: 'Roasted Koginut Squash',
    price: '$28',
    tags: 'Rye Berries, Shaved Brussels Sprouts, Pecans, Quince, Savory Granola',
  },
  {
    title: 'Grilled Black Bass',
    price: '$34',
    tags: 'Farro, Sunchokes, Citrus',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { appetizers, mains, awards };

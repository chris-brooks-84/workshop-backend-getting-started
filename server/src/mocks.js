module.exports = {
  Track: () => ({
    id: () => 'track_01',
    title: () => 'Astro Kitty, Space Explorer',
    thumbnail: () =>
      'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
    length: () => 1210,
    modulesCount: () => 6,
    numberOfViews: () => 25,
    numberOfLikes: () => 14,
  }),
  Author: () => ({
    id: () => 'author_01',
    name: () => 'Grumpy Cat',
    photo: () => 'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg'
  }),
  Module: () => ({
    id: () => 'module_01',
    title: () => 'How to get to the moon',
    length: () => '42',
    content: () => 'In this lesson, we\'ll teach you everything you need to know to get yourself to the moon.',
    videoUrl: () => 'https://www.youtube.com/watch?v=dwLI70eP3mw&list=PLpi1lPB6opQzKiVK8tgVMyHWThqdCsnvO'
  })
};

// likes data are stored in memory
const likes = {};

const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.catstronautsAPI.getTracksForHome();
    },

    // get a single track by ID, for the track page
    track: (_, { id }, { dataSources }) => {
      return dataSources.catstronautsAPI.getTrack(id);
    },

    // get a single module by ID, for the module detail page
    module: (_, { id }, { dataSources }) => {
      return dataSources.catstronautsAPI.getModule(id);
    },
  },
  Mutation: {
    likeTrack: (_, { trackId }, { dataSources }) => {
      var number = 1;
      if (likes[trackId]) {
        number = likes[trackId] + 1;
        likes[trackId] = likes[trackId] + 1;
      } else {
        likes[trackId] = 1;
      }
      return {
        code: 200,
        success: true,
        track: { id: trackId, numberOfLikes: number },
      };
    },
    // increments a track's numberOfViews property
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try {
        const track = await dataSources.catstronautsAPI.incrementTrackViews(id);
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null,
        };
      }
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.catstronautsAPI.getAuthor(authorId);
    },

    modules: ({ id }, _, { dataSources }) => {
      return dataSources.catstronautsAPI.getTrackModules(id);
    },

    durationInSeconds: ({ length }) => length,
    numberOfLikes: ({ id }) => {
      return likes[id] || 0;
    },
  },
  Module: {
    durationInSeconds: ({ length }) => length,
  },
};

module.exports = resolvers;

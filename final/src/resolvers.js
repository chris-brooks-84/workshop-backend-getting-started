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
    likeTrack: async (_, { trackId }, { dataSources }) => {
      try {
        const track = await dataSources.catstronautsAPI.incrementTrackLikes(trackId);

        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of likes for track ${trackId}`,
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
    // increments a track's numberOfViews property
    incrementTrackViews: async (_, { trackId }, { dataSources }) => {
      try {
        const track = await dataSources.catstronautsAPI.incrementTrackViews(trackId);
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${trackId}`,
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
  },
};

module.exports = resolvers;

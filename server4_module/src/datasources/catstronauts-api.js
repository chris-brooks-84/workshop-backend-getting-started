import { RESTDataSource } from "@apollo/datasource-rest";

export class CatstronautsAPI extends RESTDataSource {
  constructor() {
    super();
    // the Catstronauts catalog is hosted on this server
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
  }

  // retrieves a list of tracks
  getAllTracks() {
    return this.get("tracks");
  }

  // find track by ID
  getTrack(trackId) {
    return this.get(`track/${trackId}`);
  }

  // retrieves the list of modules for a given track
  getTrackModules(trackId) {
    return this.get(`track/${trackId}/modules`);
  }

  // increases the number of views for a track by 1
  incrementTrackViews(trackId) {
    return this.patch(`track/${trackId}/numberOfViews`);
  }

  // increases the number of likes for a track by 1
  incrementTrackLikes(trackId) {
    return this.patch(`track/${trackId}/numberOfLikes`);
  }

  // find author by ID
  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }

  // find module by ID
  getModule(moduleId) {
    return this.get(`module/${moduleId}`);
  }
}

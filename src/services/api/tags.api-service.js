import BaseApiService from './base.api-service'

const ENDPOINTS = {
  TAGS: 'tags'
}

class TagsApiService extends BaseApiService {
  async getTags () {
    return this.get(ENDPOINTS.TAGS)
  }

  create (tag) {
    return this.post(ENDPOINTS.TAGS, tag)
  }

  remove (tag) {
    return this.delete(`${ENDPOINTS.TAGS}/${tag.id}`, tag)
  }
}

export default new TagsApiService()

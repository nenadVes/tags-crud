import BaseApiService from './base.api-service'

const ENDPOINTS = {
  TAGS: 'tags'
}

class TagsApiService extends BaseApiService {
  async getTags () {
    try {
      return await this.get(ENDPOINTS.TAGS)
    } catch (e) {
      return [
        {
          name: 'Green',
          color: '29ef69'
        },
        {
          name: 'Blue',
          color: '0d12ef'
        },
        {
          name: 'Red',
          color: 'ef1a1c'
        },
        {
          name: 'Yellow',
          color: 'efdd21'
        }
      ]
    }
  }

  create (tag) {
    return this.post(ENDPOINTS.TAGS, tag)
  }

  remove (tag) {
    return this.delete(ENDPOINTS.TAGS, tag)
  }
}

export default new TagsApiService()

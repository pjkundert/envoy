import * as Config from '../src/config'


export const TEST_HAPPS = {
  basicChat: {
    happId: 'basic-chat-test-happ-id',
    dnas: [
      {
        location: Config.DEPENDENCIES.testResources.basicChat.dna.location,
        hash: 'QmW5tVmqmgHQVxi3JtpQtpHHmDXn7W7qBrhSeArskR7ULC',
        handle: 'basic-chat-handle',  // TODO: is this right?
      }
    ],
    ui: {
      location: Config.DEPENDENCIES.testResources.basicChat.ui.location,
      hash: 'FAKEHASH'
    },
  },

  // The following are for unit tests only
  testApp1: {
    happId: 'test-app-1',
    dnas: [
      {location: 'nowhere', hash: 'test-dna-hash-1a', handle: '1a'},
    ],
    ui: {location: 'nowhere.zip', hash: 'test-ui-hash-1'}
  },

  testApp3: {
    happId: 'test-app-3',
    dnas: [
      {location: 'nowhere', hash: 'test-dna-hash-3a', handle: '3a'},
      {location: 'nowhere', hash: 'test-dna-hash-3b', handle: '3b'},
      {location: 'nowhere', hash: 'test-dna-hash-3c', handle: '3c'},
    ],
    ui: {location: 'nowhere.zip', hash: 'test-ui-hash-3'}
  }
}

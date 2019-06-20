import * as path from 'path'


export default (resourcePath: string ) => ({
  holochainVersion: '0.0.18-alpha1',  // check against `holochain --version`
  resources: {
    serviceLogger: {
      dna: {
        // location: 'https://github.com/Holo-Host/servicelogger/releases/download/v0.0.3/QmR5XnQP5pGNh53PT6qyjj3XmZgGHiyGMpPvaDWK1UJgQv.dna.json',
        location: 'https://holo-artifacts.s3-us-west-2.amazonaws.com/servicelogger-v0.0.3.dna.json',
        path: path.join(resourcePath, 'servicelogger.dna.json'),
      }
    },
    holofuel: {
      dna: {
        // location: 'https://github.com/Holo-Host/holofuel/releases/download/v0.9.1-alpha1/holofuel.dna.json',
        location: 'https://holo-artifacts.s3-us-west-2.amazonaws.com/holofuel-v0.8.5-alpha1.dna.json',
        path: path.join(resourcePath, 'holofuel.dna.json'),
      }
    },
    holoHosting: {
      dna: {
        location: 'https://github.com/Holo-Host/Holo-Hosting-App/releases/download/v0.2.3-alpha1/QmS68VfLBKZPvNp17uCkHFwKVvxDxzESeiMmBg2QAgUwdH.dna.json',
        path: path.join(resourcePath, 'holo-hosting.dna.json'),
      },
      ui: {
        location: 'https://github.com/Holo-Host/holo-hosting-app_GUI/releases/download/v0.1.0/ui.zip',
        path: path.join(resourcePath, 'holo-hosting-ui'),
        port: 8800,
      },
    },
    happStore: {
      dna: {
        location: 'https://github.com/holochain/HApps-Store/releases/download/0.2.1--alpha1/happ-store.dna.json',
        path: path.join(resourcePath, 'happ-store.dna.json'),
      },
      ui: {
        location: 'https://github.com/holochain/HApps-Store/releases/download/0.2.1--alpha1/ui.zip',
        path: path.join(resourcePath, 'happ-store-ui'),
        port: 8880,
      },
    }
  },
  testResources: {
    basicChat: {
      dna: {
        // Only the location is used, it is downloaded through the normal installation process
        location: 'https://holo-artifacts.s3-us-west-2.amazonaws.com/holochain-basic-chat.dna.json',
        // path: path.join(resourcePath, 'holochain-basic-chat.dna.json'),
      },
      ui: {
        location: 'https://holo-artifacts.s3-us-west-2.amazonaws.com/holochain-basic-chat-ui.zip',
      },
    }
  }
})
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';

const tron = Reactotron.configure({ host: 'localhost' })
  .setAsyncStorageHandler!(AsyncStorage)
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
    editor: false, // there are more options to editor
    errors: false, // or turn it off with false
    overlay: false, // just turning off overlay
  })
  .use(reactotronRedux())
  .use(sagaPlugin({ except: [''] }))
  .connect();

tron.clear!();

console.tron = tron;

export default tron;

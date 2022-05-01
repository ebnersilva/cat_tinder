import { Alert } from 'react-native';

export function handleResponseApi(err: any): string | undefined {
  if (!err) return;

  let errorMessage = null;

  // Some error returned from api
  if (err.response) {
    const { response } = err;
    const { error } = response.data;
    const { message } = error;

    Alert.alert('Error', message);
    errorMessage = message;
    // Did not connected to API
  } else if (err.request) {
    Alert.alert('Error', 'Request Error');
    errorMessage = 'Request Error';
    // Another unknown error
  } else {
    Alert.alert('Error', err.message);
    errorMessage = err.message;
  }

  return errorMessage;
}

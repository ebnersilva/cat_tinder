import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 40,

    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;

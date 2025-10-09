import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: width / 2,
  },
  carousel: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  content: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

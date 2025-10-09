import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
  },
});

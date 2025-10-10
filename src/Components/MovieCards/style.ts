import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeMore: {
    color: '#F2C94D',
    fontSize: 14,
  },
  listContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  card: {
    width: 120,
    marginRight: 12,
  },
  cardImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    backgroundColor: '#333',
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
  },
});

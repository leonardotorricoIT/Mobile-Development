import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
import { getPopularMovies } from '../../service/TMDBService';

const Movies = () => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data);
      } catch (err) {
        console.log('Error:', err);
      }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Movies</Text>
    </SafeAreaView>
  );
};

export default Movies;

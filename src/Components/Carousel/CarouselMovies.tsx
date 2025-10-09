import React, { useEffect, useState, useRef } from 'react';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { Dimensions, Text, View, Image } from 'react-native';
import { getPopularMovies } from '../../service/TMDBService';
import { styles } from './style';

const width = Dimensions.get('window').width;

export default function CarouselMovies() {
  const [movies, setMovies] = useState<any[]>([]);
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

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

  if (movies.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Cargando películas...</Text>
      </View>
    );
  }

  return (
    <View>
      <Carousel
        ref={ref}
        width={width}
        height={width * 0.8}
        data={movies}
        onProgressChange={progress}
        renderItem={({ item }) => (
          <View style={styles.carousel}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
              }}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.content}>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

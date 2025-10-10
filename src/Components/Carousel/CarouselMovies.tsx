import React, { useEffect, useState, useRef } from 'react';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { Dimensions, Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { getPopularMovies } from '../../service/TMDBService';
import { styles } from './style';
import { TMDB_IMAGE_BASE_URL } from '@env';

const width = Dimensions.get('window').width;

export default function CarouselMovies() {
  const [movies, setMovies] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  useEffect(() => {
    (async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data.slice(0, 5));
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
        height={width * 1.2}
        data={movies}
        onProgressChange={progress}
        onSnapToItem={index => setActiveIndex(index)}
        renderItem={({ item }) => (
          <View style={styles.carousel}>
            <Image
              source={{
                uri: `${TMDB_IMAGE_BASE_URL}${item.poster_path}`,
              }}
              style={styles.image}
              resizeMode="cover"
            />
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.9)']}
              style={styles.gradient}
            />
          </View>
        )}
      />

      <View style={styles.pagination}>
        {movies.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              activeIndex === index && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

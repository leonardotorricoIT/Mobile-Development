import { SafeAreaView, View, ScrollView } from 'react-native';
import { styles } from './style';
import CarouselMovies from '../../Components/Carousel/CarouselMovies';
import Buttons from '../../Components/Buttons/Buttons';
import GenreNavbar from '../../Components/GenreNavbar/GenreNavbar';
import MovieCards from '../../Components/MovieCards/MovieCards';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Movies = () => {
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.carouselContainer}>
        <CarouselMovies />
        <SafeAreaView
          style={{
            position: 'absolute',
            top: insets.top,
            width: '100%',
            zIndex: 3,
          }}
        >
          <GenreNavbar onSelectGenre={setSelectedGenre} />
        </SafeAreaView>

        <View style={styles.buttonsOverlay}>
          <Buttons />
        </View>
      </View>

      <MovieCards title="Marvel studios" />
      <MovieCards title="Trending Now" />
      <MovieCards title="Top Rated" />
    </ScrollView>
  );
};

export default Movies;

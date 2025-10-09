import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import CarouselMovies from '../../Components/Carousel/CarouselMovies';
import Buttons from '../../Components/Buttons/Buttons';

const Movies = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Movies screen</Text>
      <CarouselMovies />
      <Buttons />
    </SafeAreaView>
  );
};

export default Movies;

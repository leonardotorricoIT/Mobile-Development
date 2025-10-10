import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import CarouselMovies from '../../Components/Carousel/CarouselMovies';
import Buttons from '../../Components/Buttons/Buttons';

const Movies = () => {
  return (
    <View>
      <CarouselMovies />
      <Buttons />
    </View>
  );
};

export default Movies;

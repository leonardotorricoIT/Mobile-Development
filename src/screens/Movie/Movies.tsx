import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
import { getPopularMovies } from '../../service/TMDBService';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';

const data = [...new Array(6).keys()];
const width = Dimensions.get('window').width;

const Movies = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const ref = React.useRef<ICarouselInstance>(null);
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

  return (
    <SafeAreaView style={styles.container}>
      <Text>Movies</Text>
      <Carousel
        ref={ref}
        width={width}
        height={width / 2}
        data={data}
        onProgressChange={progress}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
            }}
          >
            <Text style={{ textAlign: 'center', fontSize: 30 }}>{index}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Movies;

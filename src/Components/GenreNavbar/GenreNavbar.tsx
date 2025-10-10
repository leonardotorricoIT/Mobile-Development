import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { getGenres } from '../../service/TMDBService';
import { styles } from './style';

export default function GenreNavbar({
  onSelectGenre,
}: {
  onSelectGenre: (id: number | null) => void;
}) {
  const [genres, setGenres] = useState<{ id: number; name: string }[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getGenres();
        console.log(data);
        setGenres(data);
      } catch (err) {
        console.log('Error:', err);
      }
    })();
  }, []);

  const handleSelect = (id: number | null) => {
    setSelected(id);
    onSelectGenre(id);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={[{ id: null, name: 'All' }, ...genres]}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => String(item.id ?? 'all')}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.genreButton,
              selected === item.id && styles.genreButtonActive,
            ]}
            onPress={() => handleSelect(item.id)}
          >
            <Text
              style={[
                styles.genreText,
                selected === item.id && styles.genreTextActive,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

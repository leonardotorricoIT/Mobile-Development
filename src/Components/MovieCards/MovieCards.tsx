import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { getMoviesByGenre, getPopularMovies } from '../../service/TMDBService';
import { styles } from './style';
import { TMDB_IMAGE_BASE_URL } from '@env';

interface MovieCardsProps {
  title: string;
  genreId: number;
  type?: 'genre';
}

export default function MovieCards({
  title,
  genreId,
  type = 'genre',
}: MovieCardsProps) {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getMoviesByGenre(genreId);
        setMovies(data ? data.slice(0, 10) : []);
      } catch (err) {
        console.log('Error:', err);
      }
    })();
  }, [genreId, type]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>See more</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image
              source={{
                uri: `${TMDB_IMAGE_BASE_URL}${item.poster_path}`,
              }}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <Text style={styles.cardTitle} numberOfLines={2}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

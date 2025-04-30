import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedComplejo, setSelectedComplejo] = useState('all');
    const [complejos, setComplejos] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        fetch('https://api.movie.com.uy/api/shows/rss/data')
            .then(res => res.json())
            .then(json => {
                const allMovies = json.contentCinemaShows || [];

                const complejosSet = new Set();
                allMovies.forEach(movie => {
                    movie.cinemaShows?.forEach(cs => {
                        complejosSet.add(cs.cinema);
                    });
                });

                const complejosArray = ['Todos los complejos', ...Array.from(complejosSet)];
                setComplejos(complejosArray);
                setSelectedComplejo(complejosArray[0]);
                setMovies(allMovies);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error cargando cartelera:', err);
                setLoading(false);
            });
    }, []);

    const filteredMovies =
        selectedComplejo === 'Todos los complejos'
            ? movies
            : movies.filter(movie =>
                movie.cinemaShows?.some(cs => cs.cinema === selectedComplejo)
            );

    const renderItem = ({ item }) => {
        const cineData = item.cinemaShows.find(cs => cs.cinema === selectedComplejo);

        return (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Detail', {
                        movie: item,
                        cine: cineData
                    })
                }
                style={styles.item}
            >
                <Image source={{ uri: item.posterURL }} style={styles.poster} />
                <Text style={styles.title}>{item.movie}</Text>
            </TouchableOpacity>
        );
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
                <Text>Cargando cartelera...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedComplejo}
                onValueChange={setSelectedComplejo}
                style={styles.picker}
            >
                {complejos.map((complejo) => (
                    <Picker.Item key={complejo} label={complejo} value={complejo} />
                ))}
            </Picker>
            <FlatList
                data={filteredMovies}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${item.movie}-${index}`}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 10, backgroundColor: '#fff' },
    picker: { marginHorizontal: 10, marginBottom: 10 },
    list: { paddingHorizontal: 10 },
    item: { alignItems: 'center', marginBottom: 20 },
    poster: { width: 140, height: 210, borderRadius: 10, resizeMode: 'cover' },
    title: { marginTop: 8, fontSize: 16, fontWeight: '500', textAlign: 'center' },
    loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

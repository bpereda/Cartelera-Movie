import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function DetailScreen({ route }) {
    const { movie } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: movie.posterURL }} style={styles.poster} />
            <Text style={styles.title}>{movie.movie}</Text>
            <Text style={styles.description}>{movie.description}</Text>

            <Text style={styles.subtitle}>Horarios:</Text>
            {movie.cinemaShows?.map((cine, cineIndex) => (
                <View key={cineIndex} style={styles.cinemaBlock}>
                    <Text style={styles.cinemaTitle}>{cine.cinema}</Text>
                    {cine.shows.map((show, index) => (
                        <View key={index} style={styles.scheduleRow}>
                            <Text style={styles.scheduleTime}>{show.timeToDisplay}</Text>
                            <Text style={styles.scheduleInfo}>
                                {show.formatLang} - {show.screenName}
                            </Text>
                        </View>
                    ))}
                </View>
            ))}

            {movie.trailerURL && (
                <View style={styles.trailerContainer}>
                    <Text style={styles.subtitle}>Tráiler:</Text>
                    <WebView
                        source={{ uri: movie.trailerURL }}
                        style={styles.webview}
                        allowsFullscreenVideo
                    />
                </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    poster: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        marginBottom: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    description: {
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 18,
        marginTop: 20,
        fontWeight: '600',
    },
    cinemaBlock: {
        marginTop: 15,
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    cinemaTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },
    scheduleRow: {
        marginBottom: 8,
    },
    scheduleTime: {
        fontWeight: '500',
    },
    scheduleInfo: {
        color: '#555',
        marginLeft: 5,
    },
    trailerContainer: {
        marginTop: 20,
        height: 220,
    },
    webview: {
        height: 200,
        width: '100%',
    },
});


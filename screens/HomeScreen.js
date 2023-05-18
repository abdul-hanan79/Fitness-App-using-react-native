/* eslint-disable prettier/prettier */
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import FitnessCards from '../components/FitnessCards';

const HomeScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.heading}>Home Workout</Text>

                <View style={styles.rowContainer}>
                    <View style={styles.column}>
                        <Text style={styles.counting}>0</Text>
                        <Text style={styles.label}>WORKSOUT</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.counting}>0</Text>
                        <Text style={styles.label}>KCAL</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.counting}>0</Text>
                        <Text style={styles.label}>MINS</Text>
                    </View>

                </View>
                <View style={styles.imageContainer}>

                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png',
                        }}
                    />
                </View>
            </View>
            <FitnessCards />

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CD853F',
        padding: 10,
        height: 200,
        width: '100%',
        marginBottom: 50,
    },
    heading: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    column: {
        flex: 1,
        alignItems: 'center',
    },
    counting: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
    },
    label: {
        color: '#D0D0D0',
        fontSize: 17,
        marginTop: 6,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        width: '90%',
        height: 120,
        marginTop: 20,
        borderRadius: 7,
        // backgroundColor: 'red',
    },
});

export default HomeScreen;

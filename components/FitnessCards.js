/* eslint-disable prettier/prettier */
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fitnessData } from '../data/FitnessData'
import { useNavigation } from '@react-navigation/native'
const FitnessCards = () => {
    const data = fitnessData;
    const navigation = useNavigation()
    // console.warn(data)
    return (
        <View>
            {data.map((item, key) => (
                <Pressable key={key} style={{ alignItems: 'center', justifyContent: 'center', margin: 10, paddingTop: 10 }} onPress={() => navigation.navigate('Workout', {
                    image: item.image,
                    excersises: item.excersises,
                    id: item.id,

                })}>
                    <Image
                        style={{ width: "95%", height: 140, borderRadius: 7 }}
                        source={{ uri: item.image }}
                    />
                    <Text style={{ position: 'absolute', color: 'white', fontSize: 16, fontWeight: 'bold', left: 20, top: 20 }}>{item?.name}</Text>

                </Pressable>
            ))}
            {/* <Text>FitnessCards</Text> */}
            {/* <Text style={{color:'white'}}>hlfhdsjfdjlo g</Text> */}
        </View>
    );

};

export default FitnessCards;

// const styles = StyleSheet.create({})
/* eslint-disable prettier/prettier */
import { StyleSheet, Image, Pressable, View, Text, ScrollView } from 'react-native';
import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

const WorkoutScreen = () => {
    const navigation = useNavigation()
    const route = useRoute();
    const data = route.params;
    // console.log(route.params)
    // console.log("data in workout exercises ",data.excersises)
    return (
        <>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <Image style={{ width: '100%', height: 170 }} source={{
                    uri: data.image,
                }} />
                {/* <Text>{data.excersises.sets}</Text> */}
                {data?.excersises?.map((item, index) => (
                    <Pressable style={{ maring: 10, flexDirection: 'row', alignItems: 'center',gap:10 }} key={index
                    }>
                        <Image style={{ width: 90, height: 90 }} source={{
                            uri: item.image,
                        }} />
                        <View style={{ marginTop: 15, }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                            <Text style={{ marginTop: 4, fontSize: 16, color: 'grey' }}>X{item.sets}</Text>
                        </View>
                    </Pressable>
                ))}
            </ScrollView>

            <Pressable style={{ backgroundColor: 'blue', padding: 10, marginLeft: 'auto', marginRight: 'auto', marginVertical: 20 }} onPress={() => navigation.navigate("Fit", {
                excersises: data.excersises,
            })}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontWeight: '600' }}>START</Text>
            </Pressable>
        </>


    )
}

export default WorkoutScreen

// const styles = StyleSheet.create({})
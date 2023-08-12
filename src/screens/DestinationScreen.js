import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon, ClockIcon } from 'react-native-heroicons/outline';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeartIcon, MapPinIcon, SunIcon } from 'react-native-heroicons/solid';
import { theme } from '../theme';


export default function DestinationScreen(props) {
    const item = props.route.params
    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false)


    return (
        <View className="flex-1 bg-white">
            <StatusBar style="light" />
            {/* Destination image */}
            <Image source={item.image} style={{ width: wp(100), height: wp(120) }} />

            <SafeAreaView className="flex-row justify-between items-center w-full absolute mt-4">
                {/* Back button */}
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className="p-2 rounded-full ml-4"
                    style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
                >
                    <ChevronLeftIcon size={wp(7)} strokeWidth={4} color={'white'} />
                </TouchableOpacity>

                {/* Hearct Icon */}
                <TouchableOpacity
                    onPress={() => toggleFavourite(!isFavourite)}
                    className="p-2 rounded-full mr-4"
                    style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
                >
                    <HeartIcon size={wp(7)} strokeWidth={4} color={isFavourite ? 'red' : 'white'} />
                </TouchableOpacity>
            </SafeAreaView>

            {/* title & desction & booking */}
            <View style={{ borderTopLeftRadius: 44, borderTopRightRadius: 44 }} className="-mt-16 p-5 flex flex-1 justify-between bg-white pt-8">
                <ScrollView showsVerticalScrollIndicator={false} className="space-y-5">
                    <View className="flex-row justify-between items-start">
                        <Text style={{ fontSize: wp(7) }} className="font-bold flex-1 text-neutral-700">
                            {item?.title}
                        </Text>
                        <Text style={{ fontSize: wp(7), color: theme.text }} className="font-semibold">
                            ${item?.price}
                        </Text>
                    </View>
                    <Text style={{ fontSize: wp(3.3) }} className="text-neutral-700 tracking-wide mb-2">
                        {item?.longDescription}
                    </Text>
                    <View className="flex-row justify-between mx-1">
                        <View className="flex-row space-x-2 items-start">
                            <ClockIcon size={wp(7)} color='skyblue' />
                            <View className="flex space-y-2">
                                <Text style={{ fontSize: wp(4.5) }} className="font-bold  text-neutral-700">
                                    {item.duration}
                                </Text>
                                <Text className="text-neutral-600 tracking-wide">Duration</Text>
                            </View>
                        </View>
                        <View className="flex-row space-x-2 items-start">
                            <MapPinIcon size={wp(7)} color='#f87171' />
                            <View className="flex space-y-2">
                                <Text style={{ fontSize: wp(4.5) }} className="font-bold  text-neutral-700">
                                    {item.distance}
                                </Text>
                                <Text className="text-neutral-600 tracking-wide">Distance</Text>
                            </View>
                        </View>
                        <View className="flex-row space-x-2 items-start">
                            <SunIcon size={wp(7)} color='orange' />
                            <View className="flex space-y-2">
                                <Text style={{ fontSize: wp(4.5) }} className="font-bold  text-neutral-700">
                                    {item.weather}
                                </Text>
                                <Text className="text-neutral-600 tracking-wide">Sunny</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity style={{ backgroundColor: theme.bg(0.7), height: wp(15), width: wp(50) }} className="mb-6 mx-auto flex justify-center items-center rounded-full">
                    <Text style={{fontSize: wp(5.5)}} className="font-boldtext-white">Book now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeartIcon } from 'react-native-heroicons/solid';
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
                        <Text style={{fontSize : wp(7)}} className="font-bold flex-1 text-neutral-700">
                            {item?.title}
                        </Text>
                        <Text style={{ fontSize: wp(7), color: theme.text }} className="font-semibold">
                            ${item?.price}
                        </Text>
                    </View>
                    <Text style={{fontSize: wp(3.7)}} className="text-neutral-700 tracking-wide mb-2">
                        {item?.longDescription}
                    </Text>
                </ScrollView>
            </View>
        </View>
    )
}
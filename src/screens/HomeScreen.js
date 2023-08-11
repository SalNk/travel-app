import { View, Text, ScrollView, Image, TextInput } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories';

const ios = Platform.OS == 'ios'
const topMargin = ios ? 'mt-3' : 'mt-10'
export default function HomeScreen() {
    return (

        <SafeAreaView className="flex-1 bg-white mt-3">
            <StatusBar style='black' />

            <ScrollView showsHorizontalScrollIndicator={false} className={"space-y-6" + topMargin}>
                {/* avatar */}
                <View className="mx-5 flex-row justify-between items-center mb-10">
                    <Text style={{ fontSize: widthPercentageToDP(7) }} className="font-bold text-neutral-700">Let's Discover</Text>
                    <Image source={require('../../assets/images/avatar.png')} style={{ height: widthPercentageToDP(12), width: widthPercentageToDP(12) }} />
                </View>

                {/* Search bar */}
                <View className="mx-5 mb-4">
                    <View className="flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6">
                        <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
                        <TextInput
                            placeholder='Seach destination'
                            placeholderTextColor={'gray'}
                            className="flex-1 text-base mb-1 pl-1 tracking-wider"
                        />
                    </View>
                </View>

                {/* categories */}
                <View className="mb-4">
                   <Categories/> 
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


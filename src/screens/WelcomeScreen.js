import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
    const navigation = useNavigation()
    return (
        <View className="flex-1 flex justify-end">
            <StatusBar style="light" />
            {/* Backgroung image */}
            <Image
                source={require('../../assets/images/welcome.png')}
                className="h-full w-full absolute"
            />

            {/* content & gradient */}
            <View className="p-5 pb-10 space-y-8">
                <LinearGradient
                    colors={['transparent', 'rgba(3,105,161,0.8)']}
                    style={{ width: wp(100), height: hp(60) }}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    className="absolute bottom-0"
                />
                
                <View className="space-y-3">
                    <Text className="text-white text-4xl font-bold" style={{ fontSize: wp(10) }}>Traveling made easy !</Text>
                    <Text className="text-neutral-200" style={{ fontSize: wp(4) }}>
                        Experience the world'sbest adventure around the world with us
                    </Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate("Home")} className="bg-orange-500 mx-auto p-3 px-12 rounded-full">
                    <Text className="text-white font-bold" style={{ fontSize: wp(5) }}>Let's go!</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
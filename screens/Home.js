import { Text, View, SafeAreaView, Image, TouchableOpacity, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import { theme } from '../theme';

export default function Home({ navigation }){
    return (
        <View className="flex-1 relative">
            <StatusBar style="light" />
            <Image source={require('../assets/images/bg.png')} 
                blurRadius={70}
                className="absolute w-full h-full"
            />
            <SafeAreaView className="mx-4">
                {/* Search button */}
                <View className="flex-row justify-end">
                    <Pressable onPress={() => navigation.navigate('Search')} className=" p-3 m-1 rounded-full" style={{backgroundColor : theme.bgWhite(0.2)}}>
                        <MagnifyingGlassIcon size="25" color="white" />
                    </Pressable>
                </View>


                {/* Location */}
                <View className="flex mt-8">
                    <Text className="text-white text-center text-4xl font-bold">
                        Paris, 
                        <Text className="text-2xl font-semibold text-gray-300"> France</Text>
                    </Text>
                </View>

                {/* Weather icon */}
                <View className="flex-row justify-center mt-8">
                    <Image source={require('../assets/images/partlycloudy.png')}
                        className="w-52 h-52"
                    />
                </View>

                {/* Degree celcius */}
                <View className="mt-16">
                    <Text className="text-white font-bold text-6xl text-center">
                        21&#176;
                    </Text>
                    <Text className="text-white text-center text-xl tracking-widest">
                        Partiellement nuageux
                    </Text>
                </View>

                {/* Other statistiques */}
                <View className="flex-row justify-between mx-4 mt-16">
                    <View className="flex-row space-x-2">
                        <Image source={require('../assets/icons/wind.png')} className="w-6 h-6" />
                        <Text className="text-white font-semibold text-base">1.2 Km</Text>
                    </View>
                    <View className="flex-row space-x-2">
                        <Image source={require('../assets/icons/drop.png')} className="w-6 h-6" />
                        <Text className="text-white font-semibold text-base">93%</Text>
                    </View>
                    <View className="flex-row space-x-2">
                        <Image source={require('../assets/icons/sun.png')} className="w-6 h-6" />
                        <Text className="text-white font-semibold text-base">08:00 AM</Text>
                    </View>
                </View>

            </SafeAreaView>
        </View> 
    )
}



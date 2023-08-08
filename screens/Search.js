import { StatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, Image, Pressable } from 'react-native';

export default function Search({ navigation}){
    return(
        <View className="flex-1 relative">
            <StatusBar style="light" />
            <Image source={require('../assets/images/bg.png')} 
                blurRadius={70}
                className="absolute w-full h-full"
            />
            <SafeAreaView className="mx-4">
                <View>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Text className="text-white text-lg">Back</Text>
                    </Pressable>
                    <Text className="text-white  text-4xl font-bold">
                            Recherche 
                    </Text>
                </View>
            </SafeAreaView>

        </View>
    )
}
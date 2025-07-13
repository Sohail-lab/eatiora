import {View, Text, Button} from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context";
import {router, Slot} from "expo-router";

const _Layout = () => {
    return (
        <SafeAreaView>
            <Text>Auth Layout</Text>
            <Button title="Homepage" onPress={() => router.push('/')}></Button>
            <Slot />
        </SafeAreaView>
    )
}
export default _Layout

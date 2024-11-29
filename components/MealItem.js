import { View, Text, StyleSheet, Pressable, Image, Platform, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetails from './MealDetails';

function MealItem({ id, title, imageUrl, duration, complexity, affordability, }) {

    const navigation = useNavigation();

    function selecteMealItemHandler() {
        navigation.navigate('MealDetail', { MealId: id })
    }

    return <View style={styles.mealItem}>
        <Pressable android_ripple={{ color: '#ccc' }}

            style={({ pressed }) =>
                pressed ? styles.buttonPressed : null}
            onPress={selecteMealItemHandler}

        >
            <View style={styles.innerContainer}>
                <View>
                    <Image style={styles.image} source={{ uri: imageUrl }} />
                    <Text style={styles.title} >
                        {title}
                    </Text>
                </View>
                <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
            </View>
        </Pressable>
    </View>
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowOpacity: 0.35,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8
    },

    innerContainer: { // for ios app borderRadius and overflow
        borderRadius: 8,
        overflow: 'hidden'
    },
    buttonPressed: {
        opacity: 0.5
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        marging: 8
    },


})

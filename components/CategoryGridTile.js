import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';

function CategoryGridTile({ title, color, onPress }) {
    // This component is use for  access Categories items


    return <View style={[styles.GridItem, { backgroundColor: color }]}>
        <Pressable android_ripple={{ color: '#ccc' }}
            style={({ pressed }) => // used for ios ripple style
                [styles.button, pressed ? styles.buttonPressed : null]}
            onPress={onPress}
        >
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    GridItem: {
        flex: 1,
        margin: 16,
        borderRadius: 8,
        height: 150,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        // shadowColor: 'black', // for ios shadow
        //  shadowOpacity: 0.25,
        //  shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 8,
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,

        padding: 16,

        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }

})
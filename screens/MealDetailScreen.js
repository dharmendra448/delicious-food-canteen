import { useLayoutEffect } from 'react'
import { View, Image, Text, StyleSheet, ScrollView, Button } from 'react-native';

import List from '../components/mealsEntry/List';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';

import SubTitle from '../components/mealsEntry/SubTitle';
import IconButton from '../components/IconButton';
function MealDetailScreen({ route, navigation }) {

    const MealId = route.params.MealId;

    const selectedMeals = MEALS.find((meal) => meal.id = MealId)

    function headerButtonPressHandler() {
        return console.log('pressed')
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <IconButton
                icon='star' color='white'
                onPress={headerButtonPressHandler} />
        })
    }, [navigation, headerButtonPressHandler])

    return <ScrollView style={styles.root}>
        <Image style={styles.image} source={{ uri: selectedMeals.imageUrl }} />
        <Text style={styles.mealTitle}>{selectedMeals.title}</Text>
        <View>
            <MealDetails
                duration={selectedMeals.duration}
                complexity={selectedMeals.complexity}
                affordability={selectedMeals.affordability}
                textStyle={styles.textDetail}
            />
        </View>
        <View style={styles.ListOuterContainer} >
            <View style={styles.ListContainer} >
                <SubTitle>Ingredients</SubTitle>
                <List data={selectedMeals.ingredients} />
                <SubTitle>Steps</SubTitle>
                <List data={selectedMeals.steps} />
            </View>
        </View>
    </ScrollView>

}

export default MealDetailScreen;

const styles = StyleSheet.create({
    root: {
        marginBottom: '10%'
    },
    image: {
        width: '100%',
        height: 300,
    },
    mealTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        padding: 6
    },
    mealDetailStyle: {
        color: '#ccc'
    },
    textDetail: {
        color: 'white'
    },
    ListOuterContainer: {
        alignItems: 'center'
    },
    ListContainer: {
        width: '80%'
    }

})
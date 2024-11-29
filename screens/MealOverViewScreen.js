import { useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealItem';
function MealOverViewScreen({ route, navigation }) {

    const catId = route.params.categoryId;

    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((Category) => Category.id === catId).title
        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation])



    function renderMealItem(itemData) {
        const item = itemData.item
        const MealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        }


        return <MealItem  {...MealItemProps} />
    }

    return <View style={styles.container}>
        <FlatList data={displayMeals} keyExtractor={(item) => item.id}
            renderItem={renderMealItem} />
    </View>
}

export default MealOverViewScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})
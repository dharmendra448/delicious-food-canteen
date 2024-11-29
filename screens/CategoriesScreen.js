import { FlatList, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

// created this screen to access/ render all Category meal 


function CategoriesScreen({ navigation }) {

    function renderCategoryItem(itemData) { // to render Category Item 

        function PressHandler() {
            navigation.navigate('MealOverView', { categoryId: itemData.item.id })
        }

        return <View>
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color} onPress={PressHandler}

            />
        </View>
    }


    return <FlatList data={CATEGORIES}
        keyExtractor={(item) => item.id}
        // numColumns={2} // to split the categoryitem into colums
        renderItem={renderCategoryItem}



    />
}

export default CategoriesScreen;
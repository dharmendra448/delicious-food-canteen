import { Text, View, StyleSheet } from 'react-native';
function List({ data }) {
    return data.map(dataPoints =>
        <View key={dataPoints} style={Styles.ListItem}>
            <Text style={Styles.itemText}>{dataPoints}</Text>
        </View>
    )
}

export default List;
const Styles = StyleSheet.create({
    ListItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497',
    },
    itemText: {
        color: '#351401',
        textAlign: 'center',
    }
})
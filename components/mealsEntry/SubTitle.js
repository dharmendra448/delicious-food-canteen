import { View, Text, StyleSheet } from 'react-native';
function SubTitle({ children }) {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    )

}
export default SubTitle;

const styles = StyleSheet.create({
    subTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: '#e2b497'
    },
    subTitleContainer: {
        marginHorizontal: 16,
        marginVertical: 6,
        padding: 6,
        borderBottomWidth: 2,
        borderBottomColor: '#e2b497'
    }
})
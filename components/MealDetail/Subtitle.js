import { View, Text, StyleSheet } from 'react-native';
function Subtitle() {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>Steps</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: 'slate',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
      },
      subtitleContainer: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        marginHorizontal: 24,
        marginVertical: 4,
        margin: 4,
        padding: 6,
      },
});

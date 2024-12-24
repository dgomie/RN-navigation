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
  subtitleContainer: {},
  subtitle: {},
});

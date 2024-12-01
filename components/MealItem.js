import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

export default function MealItem({ title, imageUrl }) {
  return (
    <View>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    }
})

import { View, StyleSheet, Text, Image } from 'react-native';
import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';

export default function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({ title: meal.title });
  }, [mealId, navigation]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: meal.imageUrl }} />
      <Text>{meal.title}</Text>
      <View></View>
      <Text>Ingredients</Text>
      <Text>Steps</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

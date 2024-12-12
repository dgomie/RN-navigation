import { View, StyleSheet, Text, Image } from 'react-native';
import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';

export default function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  useLayoutEffect(() => {
    const meal = MEALS.find((meal) => meal.id === mealId);
    navigation.setOptions({ title: meal.title });
  }, [mealId, navigation]);

  return (
    <View style={styles.container}>
      <Image />
      <Text></Text>
      <View>
        
      </View>
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

import { View, StyleSheet, Text, Image } from 'react-native';
import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';

export default function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({ title: meal.title });
  }, [mealId, navigation]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <View>
        <MealDetails
          duration={meal.duration}
          affordability={meal.affordability}
          complexity={meal.complexity}
          textStyle={styles.detailText}
        />
      </View>
      <Subtitle>Ingredients</Subtitle>
   
        {meal.ingredients.map((ingredient) => (
          <Text key={ingredient}>{ingredient}</Text>
        ))}

        <Subtitle>Steps</Subtitle>
        
        {meal.steps.map((step) => (
          <Text key={step}>{step}</Text>
        ))}
   
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
  },
  detailText: {
    color: 'white',
  },
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

import {CATEGORIES} from "../data/dummy-data";
import {FlatList} from "react-native";

export default function CategoriesScreen(){
   function renderCategoryItem(item) {
        return
    }

    return <>
    <FlatList data={CATEGORIES} keyExtractor={(item) => item.id}  renderItem={renderCategoryItem}/>
    </>
}
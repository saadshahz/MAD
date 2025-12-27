import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "expo-router";
import ApiContext from "../../context/ApiContext";

export default function Products() {
  const { getProducts } = useContext(ApiContext);
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getProducts().then(setData);
  }, []);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => router.push(`/product/${item.id}`)}>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

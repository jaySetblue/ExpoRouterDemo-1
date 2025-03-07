import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import { useRouter } from "expo-router";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 15,
              borderBottomWidth: 1,
              borderColor: "#ddd",
            }}
            onPress={() => router.push(`/product/${item.id}`)}
          >
            <Image source={{ uri: item.image }} style={{ width: 50, height: 50, marginRight: 10 }} />
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

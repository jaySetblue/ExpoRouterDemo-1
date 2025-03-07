import { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Image, ActivityIndicator, Button, ScrollView } from "react-native";

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(true);
        router.replace("/not-found"); // Redirect if product is invalid
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return null; // Redirecting, so don't render anything

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20, alignItems: "center" }}>
      <Image source={{ uri: product.image }} style={{ width: 200, height: 200, marginBottom: 10 }} />
      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>{product.title}</Text>
      <Text style={{ fontSize: 16, marginTop: 10, textAlign: "center" }}>{product.description}</Text>
      <Text style={{ fontSize: 20, color: "green", marginTop: 10 }}>${product.price}</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </ScrollView>
  );
}

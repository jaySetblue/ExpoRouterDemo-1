import { View, Text, TouchableOpacity, Platform } from "react-native";
import { Link } from "expo-router";
import { useWindowDimensions } from "react-native";

const Header = () => {
  const { width } = useWindowDimensions(); // Get screen width for responsiveness

  return (
    <View
      style={{
        height: '20%',
        width: "100%",
        backgroundColor: "lightblue",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: Platform.OS === 'web' ? '10%' : '5%',
        paddingRight: Platform.OS === 'web' ? '20%' : '5%',
        paddingVertical: 10,
        paddingTop:Platform.OS === 'ios' ? 20 : Platform.OS === 'android' ? 20 : 0,
        borderBottomColor: "gray",
        borderBottomWidth: 1,

      }}
    >
      {/* Logo */}
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>MoviesHub</Text>

      {/* Navigation Links */}
      {width > 600 ? ( // Show full menu on large screens (Web)
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: '70%',
          }}
        >
          <Link href="/home">
            <Text style={{ fontSize: 16 }}>Home</Text>
          </Link>
          <Link href="/movies">
            <Text style={{ fontSize: 16 }}>Movies</Text>
          </Link>
          <Link href="/tv-shows">
            <Text style={{ fontSize: 16 }}>TV Shows</Text>
          </Link>
          <Link href="/genre">
            <Text style={{ fontSize: 16 }}>Genre</Text>
          </Link>
          <Link href="/country">
            <Text style={{ fontSize: 16 }}>Country</Text>
          </Link>
        </View>
      ) : (
        // Mobile-friendly navigation (show as buttons)
        <TouchableOpacity onPress={() => alert("Open Menu")}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>☰ Menu</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

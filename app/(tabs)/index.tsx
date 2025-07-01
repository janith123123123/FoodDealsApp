import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import "react-native-reanimated";
import { useDeals } from "../../context/DealsContext";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function HomeScreen() {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();
  const { deals, isLoading } = useDeals();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={{ paddingTop: 80, paddingLeft: 20 }}>
          Loading deals...
        </Text>
      </View>
    );
  }

  const handleSearch = () => {
    if (query.trim() !== "") {
      router.push({
        pathname: "/searchScreen",
        params: { query: query },
      });
    }
  };

  const hitMeal = () => {
    console.log("Meal");
  };
  const hitBaked = () => {
    console.log("Baked");
  };
  const hitSnacks = () => {
    console.log("Snacks");
  };
  const hitDessert = () => {
    console.log("Dessert");
  };
  const hitDrinks = () => {
    console.log("Drinks");
  };
  const tapFoodItem = () => {
    router.push("/foodDetails");
  };

  const getLocalImage = (id: number) => {
    switch (id) {
      default:
        return require("../../assets/images/deal1.jpg");
    }
  };

  console.log("Deals:", deals);

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>Find Food Deals</Text>

        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search for food (e.g., Pizza)"
            placeholderTextColor="#999"
            value={query}
            onChangeText={setQuery}
            onSubmitEditing={handleSearch}
            returnKeyType="search"
          />
          <TouchableOpacity onPress={handleSearch}>
            <Ionicons
              name="search"
              size={24}
              color="#999"
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.whitetbox}>
        <View style={styles.categoryContainer}>
          <Category
            icon="silverware-fork-knife"
            label="Meal"
            onPress={hitMeal}
          />
          <Category
            icon="bread-slice-outline"
            label="Baked"
            onPress={hitBaked}
          />
          <Category icon="cookie" label="Snacks" onPress={hitSnacks} />
          <Category icon="cupcake" label="Dessert" onPress={hitDessert} />
          <Category icon="local-bar" label="Drinks" onPress={hitDrinks} />
        </View>

        <View style={styles.line}></View>

        <Text
          style={{
            color: "#000",
            marginBottom: 10,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Populer Deals
        </Text>

        <FlatList
          data={deals}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableHighlight
              underlayColor="#DDDDDD"
              onPress={tapFoodItem}
              style={{ borderRadius: 16, marginBottom: 10 }}
            >
              <View style={styles.card}>
                <Image source={getLocalImage(item.id)} style={styles.image} />
                <View style={styles.cardContent}>
                  <Text style={styles.foodname}>{item.name}</Text>
                  <Text style={styles.foodprice}>{item.price}</Text>
                </View>
              </View>
            </TouchableHighlight>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

type CategoryProps = {
  icon: string;
  label: string;
  onPress: () => void;
};

function Category({ icon, label, onPress }: CategoryProps) {
  const IconComponent =
    icon === "cookie" || icon === "local-bar"
      ? MaterialIcons
      : MaterialCommunityIcons;

  return (
    <TouchableOpacity style={styles.categoryItem} onPress={onPress}>
      <View style={styles.iconWrapper}>
        <IconComponent name={icon as any} size={40} color="#E95322" />
      </View>
      <Text style={styles.categoryText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5CB58",
    justifyContent: "flex-start",
  },
  topSection: {
    top: 0,
    left: 0,
    right: 0,
    paddingTop: screenHeight * 0.05,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: screenHeight * 0.04,
    marginBottom: screenHeight * 0.052,
    textAlign: "center",
    color: "#fff",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 20,
    marginBottom: screenHeight * 0.056,
    marginHorizontal: screenWidth * 0.08,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingLeft: 18,
  },
  searchIcon: {
    marginLeft: 8,
  },
  whitetbox: {
    paddingBottom: 0,
    padding: screenWidth * 0.05,
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    flex: 1,
    justifyContent: "flex-start",
  },
  textInWhitebox: {
    fontSize: 16,
    marginBottom: screenHeight * 0.012,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  categoryItem: {
    alignItems: "center",
    flex: 1,
  },
  iconWrapper: {
    padding: 9,
    backgroundColor: "#F3E9B5",
    borderRadius: 58,
    marginBottom: screenHeight * 0.0001,
    height: screenHeight * 0.07,
    width: screenWidth * 0.14,
  },
  categoryText: {
    fontSize: 12,
    color: "#391713",
  },
  line: {
    padding: 0.9,
    backgroundColor: "#F3E9B5",
  },

  whiteboxscroll: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 62,
    zIndex: 1,
  },
  scrollArea: {
    flex: 1,
  },
  ScrollContent: {
    paddingBottom: 0,
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: "row",
    borderRadius: 16,
    backgroundColor: "#f9f9f9",
    overflow: "hidden",
  },
  image: {
    width: 80,
    height: 80,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  cardContent: {
    padding: 10,
    justifyContent: "center",
  },
  foodname: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  foodprice: {
    fontSize: 14,
    color: "#666",
  },
});

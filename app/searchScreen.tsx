import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
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
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDeals } from '../context/DealsContext';

const { width: screenWidth } = Dimensions.get('window');

export default function SearchScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { query } = useLocalSearchParams();
  const { deals } = useDeals();

  const [searchText, setSearchText] = useState('');
  const [confirmedSearch, setConfirmedSearch] = useState('');
  const [filteredResults, setFilteredResults] = useState(deals);

  // ✅ When navigated from index with a query, perform the search
  useEffect(() => {
    if (typeof query === 'string' && query.trim() !== '') {
      setSearchText(query);
      setConfirmedSearch(query);
      const results = deals.filter((deal) =>
        deal.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results);
    }
  }, [query, deals]);

  // ✅ Manually triggered search (icon or Enter)
  const handleSearch = () => {
    const cleaned = searchText.trim();
    if (!cleaned) return;

    const results = deals.filter((deal) =>
      deal.name.toLowerCase().includes(cleaned.toLowerCase())
    );
    setFilteredResults(results);
    setConfirmedSearch(cleaned);
  };

  // ✅ Back button works even if no history
  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/');
    }
  };

  const tapFoodItem = () => {
    router.push('/foodDetails');
  };

  const getLocalImage = (id: number) => {
    // Replace with real image logic later
    return require('../assets/images/deal1.jpg');
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: insets.top + 10 }}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" style={styles.backButton} />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Search for food..."
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />

        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={24} color="#333" style={styles.iconWrapper} />
        </TouchableOpacity>
      </View>

      {/* Label */}
      <Text style={styles.resultLabel}>
        Search results for: <Text style={{ fontWeight: 'bold' }}>{confirmedSearch}</Text>
      </Text>

      {/* Results List */}
      {filteredResults.length > 0 ? (
        <FlatList
          data={filteredResults}
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
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text style={{ color: '#888' }}>No results found.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 15,
    marginHorizontal: 15
  },
  backButton: {
    marginRight: 6,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingLeft: 6,
    paddingRight: 10,
    color: '#000',
  },
  iconWrapper: {
    paddingLeft: 4,
  },
  resultLabel: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000',
  },
  card: {
    flexDirection: 'row',
    borderRadius: 16,
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
  },
  image: {
    width: 80,
    height: 80,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  cardContent: {
    padding: 10,
    justifyContent: 'center',
  },
  foodname: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  foodprice: {
    fontSize: 14,
    color: '#666',
  },
});


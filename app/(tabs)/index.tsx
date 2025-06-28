import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


export default function HomeScreen() {
  const [query, setQuery] = useState<string>('');

  const router = useRouter();

  const handleSearch = () => {
    router.push({
      pathname: '/(modals)/searchScreen',
      params: {query: query},
    });
    
  };

  const hitMeal = () => {
    console.log('Meal');
  };
  const hitBaked = () => {
    console.log('Baked');
  };
  const hitSnacks = () => {
    console.log('Snacks');
  };
  const hitDessert = () => {
    console.log('Dessert');
  };
  const hitDrinks = () => {
    console.log('Drinks');
  };

  return (
      <View style={styles.container}>
        <View style={styles.topSection}>

          <Text style={styles.title}>Find Food Deals</Text>

          <View style={styles.searchBarContainer}>
            <TextInput style={styles.searchBar}
              placeholder="Search for food (e.g., Pizza)"
              placeholderTextColor="#999"
              value={query}
              onChangeText={setQuery}
              onSubmitEditing={handleSearch}
              returnKeyType='search'
            />
          
              
            <TouchableOpacity onPress={handleSearch}>
            <Ionicons name='search' size={24} color='#999' style={styles.searchIcon}/>
            </TouchableOpacity>
          </View>
          

        </View>

          <View style={styles.whitetbox}>

            <View style = {styles.categoryContainer}>
              <TouchableOpacity style = {styles.categoryItem} onPress={hitMeal}>
                <View style = {styles.iconWrapper}>
                  <MaterialCommunityIcons name="silverware-fork-knife" size={40} color="#E95322" /> 
                </View>
                <Text style = {styles.categoryText}>Meal</Text>
              </TouchableOpacity>

              <TouchableOpacity style = {styles.categoryItem} onPress={hitBaked}>
                <View style = {styles.iconWrapper}>
                  <MaterialCommunityIcons name="bread-slice-outline" size={41} color="#E95322" />
                </View>
                <Text style = {styles.categoryText}>Baked</Text>
              </TouchableOpacity>

              <TouchableOpacity style = {styles.categoryItem} onPress={hitSnacks}>
                <View style = {styles.iconWrapper}>
                  <MaterialIcons name = 'cookie' size={41} color='#E95322'/>
                </View>
                <Text style = {styles.categoryText}>Snacks</Text>
              </TouchableOpacity>
                  
              <TouchableOpacity style = {styles.categoryItem} onPress={hitDessert}>
                <View style = {styles.iconWrapper}>
                  <MaterialCommunityIcons name="cupcake" size={41} color="#E95322" />
                </View>
                <Text style = {styles.categoryText}>Dessert</Text>
              </TouchableOpacity>
                  
              <TouchableOpacity style = {styles.categoryItem} onPress={hitDrinks}>
                <View style = {styles.iconWrapper}>
                  <MaterialIcons name = 'local-bar' size={41} color='#E95322'/>
                </View>
                <Text style = {styles.categoryText}>Drinks</Text>
              </TouchableOpacity>  
            </View>

            <View style = {styles.line}></View>

            <ScrollView style = {styles.scrollArea} contentContainerStyle = {styles.ScrollContent} showsVerticalScrollIndicator={false}>
              <Text style={styles.textInWhitebox}> Burger King</Text>
              <Text style={styles.textInWhitebox}> Pizza Hut</Text>
              <Text style={styles.textInWhitebox}> KFC</Text>
              <Text style={styles.textInWhitebox}> Burger King</Text>
              <Text style={styles.textInWhitebox}> Pizza Hut</Text>
              <Text style={styles.textInWhitebox}> KFC</Text>
              <Text style={styles.textInWhitebox}> Burger King</Text>
              <Text style={styles.textInWhitebox}> Pizza Hut</Text>
              <Text style={styles.textInWhitebox}> KFC</Text>
              <Text style={styles.textInWhitebox}> Burger King</Text>
              <Text style={styles.textInWhitebox}> Pizza Hut</Text>
              <Text style={styles.textInWhitebox}> Pizza Hut</Text>
              <Text style={styles.textInWhitebox}> Pizza Hut</Text>
              <Text style={styles.textInWhitebox}> KFC</Text>
              <Text style={styles.textInWhitebox}> Burger King</Text>
              <Text style={styles.textInWhitebox}> Pizza Hut</Text>
              <Text style={styles.textInWhitebox}> KFC</Text>
              <Text style={styles.textInWhitebox}> Burger King</Text>
              <Text style={styles.textInWhitebox}> Pizza Hut</Text>
              <Text style={styles.textInWhitebox}> KFC</Text>
              <Text style={styles.textInWhitebox}> Burger King</Text>
              <Text style={styles.textInWhitebox}> Pizza Hut</Text>
              <Text style={styles.textInWhitebox}> KFC</Text>
              <Text style={styles.textInWhitebox}> Burger King</Text>
              <Text style={styles.textInWhitebox}> Pizza Hut</Text>
              <Text style={styles.textInWhitebox}> KFC</Text>
            </ScrollView>
      
          </View>
        

        
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5CB58',
    justifyContent: 'flex-start',
  },
  topSection: {
    //flex:1,
    //position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: screenHeight * 0.05,
    //alignItems: 'center',
    //backgroundColor: '#F5CB58',
},
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: screenHeight * 0.040,
    marginBottom: screenHeight * 0.052,
    textAlign: 'center',
    color: '#fff',
    
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 20,
    marginBottom: screenHeight * 0.056,
    marginHorizontal:screenWidth * 0.080,
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
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    flex: 1, 
    justifyContent: 'flex-start',
  },
  textInWhitebox: {
    fontSize: 16,
    marginBottom: screenHeight * 0.012,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryItem: {
    alignItems: 'center',
    flex: 1,
  },
  iconWrapper: {
    padding:9,
    backgroundColor: '#F3E9B5',
    borderRadius: 58,
    marginBottom: screenHeight * 0.0001,
    height: screenHeight * 0.070,
    width: screenWidth * 0.140,
  },
  categoryText:{
    fontSize: 12,
    color: '#391713'
  },
  line: {
    padding: 0.9,
    backgroundColor: '#F3E9B5',
  },
  whiteboxscroll: {
    position: 'absolute',
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
  },


});

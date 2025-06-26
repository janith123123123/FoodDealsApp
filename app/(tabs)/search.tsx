import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function SearchScreen() {
  const [query, setQuery] = useState<string>('');

  const handleSearch = () => {
    console.log('Searching for:', query);
  };

  const hitHome = () => {
    console.log('Home');
  };

  const hitCart = () => {
    console.log('Cart');
  };

  const hitHeart = () => {
    console.log('Heart');
  };

  const hitHelp = () => {
    console.log('Help');
  };

  const hitProfile = () => {
    console.log('Profile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>Find Food Deals</Text>
        <View style = {styles.searchBarContainer}>
          <TextInput style={styles.input}
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

        <View style={styles.resultbox}>
          <Text style={styles.resultText}> Burger King</Text>
          <Text style={styles.resultText}> Pizza Hut</Text>
          <Text style={styles.resultText}> KFC</Text>
        </View>
      </View>

      
      <View style={styles.rectangle} />

      <View style={styles.menubar}>
        <TouchableOpacity style = {styles.menuItem} onPress={hitHome}>
          <Ionicons name = 'home-outline' size={24} color='#fff'/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.menuItem} onPress={hitCart}>
          <Ionicons name = 'cart-outline' size={24} color='#fff'/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.menuItem} onPress={hitHeart}>
          <Ionicons name = 'heart-outline' size={24} color='#fff'/>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.menuItem} onPress={hitHelp}>
          <MaterialIcons name="support-agent" size={28} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style = {styles.menuItem} onPress={hitProfile}>
          <Ionicons name = 'person-outline' size={24} color='#fff'/>
        </TouchableOpacity>
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
  flex: 1, 
},
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: screenHeight * 0.035,
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
    marginRight:screenWidth * 0.070,
    marginLeft:screenWidth * 0.070,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingLeft: 10,
  },
  searchIcon: {
  marginLeft: 8,
  },
  resultbox: {
    padding: screenWidth * 0.05,
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    flex: 1, 
    justifyContent: 'flex-start',
  },
  resultText: {
    fontSize: 16,
    marginBottom: 10,
  },
  menubar: {
    height: 61,
    flexDirection: 'row',
    backgroundColor: '#E95322',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  menuItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    backgroundColor: '#f5f5f5',
    height: 61,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    zIndex: 0,
  },

});

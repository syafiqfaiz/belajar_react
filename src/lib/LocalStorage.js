import { AsyncStorage } from 'react-native';

class LocalStorage {

  async setItem(key, payload){
    try {
      await AsyncStorage.setItem(key, payload);
    } catch (error) {
      return false
    }
  }

  async getItem(key){
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null){
        return value;
      }
    } catch (error) {
      return null
    }
  }

  async removeItem(key){
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      return false;
    }
  }
}

const localStorage = new LocalStorage();
export default localStorage;
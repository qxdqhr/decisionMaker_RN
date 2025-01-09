import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

// 在文件开头添加类型定义
type RootStackParamList = {
  SingleDecision: undefined;
  CoinFlip: undefined;
  DiceRoll: undefined;
  WheelSpin: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SingleDecision: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleCoinFlip = () => {
    navigation.navigate('CoinFlip');
  };

  const handleDiceRoll = () => {
    // 处理掷骰子逻辑
  };

  const handleWheelSpin = () => {
    // 处理幸运转盘逻辑
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={handleCoinFlip}>
        <Icon name="disc-outline" size={40} color="#0066cc" />
        <Text style={styles.cardTitle}>抛硬币</Text>
        <Text style={styles.cardDescription}>随机生成正面或反面</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={handleDiceRoll}>
        <Icon name="cube-outline" size={40} color="#0066cc" />
        <Text style={styles.cardTitle}>掷骰子</Text>
        <Text style={styles.cardDescription}>随机生成1-6的数字</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={handleWheelSpin}>
        <Icon name="radio-outline" size={40} color="#0066cc" />
        <Text style={styles.cardTitle}>幸运转盘</Text>
        <Text style={styles.cardDescription}>自定义选项的随机选择</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 8,
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default SingleDecision; 
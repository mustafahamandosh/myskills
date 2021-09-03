import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

type SkillData = {
  id: string;
  name: string;
};

export const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [greeting, setGreeting] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Good morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good night');
    }
  }, []);

  // handle is a convention name.
  // this indicate it is a user interaction
  const handleAddNewSkill = () => {
    const data: SkillData = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    setMySkills([...mySkills, data]);
  };

  const handleRemoveSkill = (skillId: string): void => {
    setMySkills(prevState => prevState.filter(({ id }) => id !== skillId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, Mustafa</Text>
      <Text style={styles.greeting}>{greeting}</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#999"
        onChangeText={setNewSkill}
      />
      <Button
        onPress={handleAddNewSkill}
        activeOpacity={0.8}
        buttonTitle="Add"
      />
      <Text style={[styles.title, { marginTop: 50, marginBottom: 20 }]}>
        My skills
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard
            skill={item.name}
            activeOpacity={0.8}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 80,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 10,
  },
  greeting: {
    color: '#fff',
    fontSize: 14,
    marginTop: 10,
  },
});

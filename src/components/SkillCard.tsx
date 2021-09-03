import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface SkillProps extends TouchableOpacityProps {
  skill: string;
}

export const SkillCard = ({ skill, ...rest }: SkillProps) => {
  return (
    <TouchableOpacity style={styles.containerSkill} {...rest}>
      <Text style={styles.skill}>{skill}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerSkill: {
    backgroundColor: '#1f1e25',
    borderRadius: 10,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginVertical: 10,
  },
  skill: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

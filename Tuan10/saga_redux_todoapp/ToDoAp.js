import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './todoSlice';

const TodoApp = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const loading = useSelector((state) => state.todos.loading);

  const handleAddTodo = () => {
    if (todo.trim()) {
      dispatch(addTodo({ id: Date.now(), text: todo }));
      setTodo('');
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={todo}
        onChangeText={setTodo}
        placeholder="Add a new todo"
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
      {loading && <ActivityIndicator />}
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text>{item.text}</Text>
            <Button title="Remove" onPress={() => handleRemoveTodo(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default TodoApp;
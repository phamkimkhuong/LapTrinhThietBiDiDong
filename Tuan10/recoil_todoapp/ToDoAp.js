import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListState, fetchTodos } from './todoState';

const TodoApp = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useRecoilState(todoListState);
  const fetchedTodos = useRecoilValue(fetchTodos);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setTodos(fetchedTodos);
      setLoading(false);
    };

    loadData();
  }, [fetchedTodos, setTodos]);

  const handleAddTodo = () => {
    if (todo.trim()) {
      const newTodo = { id: Date.now(), title: todo, completed: false };
      setTodos((prev) => [...prev, newTodo]);
      setTodo('');
    }
  };

  const handleRemoveTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
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
            <Text>{item.title}</Text>
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

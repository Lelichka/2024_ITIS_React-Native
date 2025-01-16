import {Alert, SafeAreaView, StyleSheet, Text} from 'react-native';
import {TaskModel} from '../models/TaskModel.tsx';
import {useRootStore} from '../hooks/useRootStore.tsx';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export const TaskElement = (task: TaskModel) => {
    const {toDoListStore} = useRootStore();

    const handleDelete = (deletedTask: TaskModel) => {
        Alert.alert('Delete Task', `Are you sure you want to delete the task ${deletedTask.name}?`, [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () => toDoListStore.deleteTask(deletedTask.id)},
        ]);
    };
    const handleCompletedCheckbox = (id: number) => {
        toDoListStore.changeIsCompleted(id);
    };
    return (
        <SafeAreaView
            style={[styles.taskContainer, task.isCompleted ? styles.completedTaskContainer : styles.notCompletedTaskContainer]}>
            <Text style={styles.taskText}>{task.name}</Text>
            <Icon onPress={() => handleCompletedCheckbox(task.id)}
                  name={task.isCompleted ? 'checkmark-circle-sharp' : 'checkmark-circle-outline'}
                  size={28}
                  color={task.isCompleted ? '#9ACD32' : '#808080'}
                  style={styles.taskIcon}/>
            <Icon onPress={() => handleDelete(task)}
                  name="trash"
                  size={28}
                  color={'#262626'}
                  style={styles.taskIcon}/>
        </SafeAreaView>
    );

};
const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 5,
        borderColor: 'black',
        borderBottomWidth: 1,
    },
    completedTaskContainer: {backgroundColor: '#cee2ca'},
    notCompletedTaskContainer: {backgroundColor: '#f1f2f3'},
    taskText: {fontSize: 14, width: '80%', height: '100%'},
    taskIcon: {width: '10%', paddingHorizontal: 5},
});


import {
    ActivityIndicator,
    Button,
    FlatList,
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';
import {observer} from 'mobx-react';
import {useRootStore} from '../hooks/useRootStore.tsx';
import React, {useEffect, useState} from 'react';
import {TaskElement} from './TaskElement.tsx';

export const HomeScreen = observer(() => {
    const {toDoListStore} = useRootStore();
    const [text, setText] = useState('');
    useEffect(() => {
        toDoListStore.getListObjectFromService();
    }, []);
    const handleAddClick = (name: string) => {
        toDoListStore.addTask(name);
    };
    return (
        <SafeAreaView>
            <View style={{height: '15%', paddingTop: 15}}>
                <TextInput style={styles.textInput}
                           placeholder={'Enter your task'}
                           onChangeText={(value) => setText(value)}/>
                <Button onPress={() => handleAddClick(text)} title={'Add Task'} color={'#478430'}/>
            </View>
            <View style={{height: '85%'}}>
                {toDoListStore.taskListModel && !toDoListStore.isLoading ? (
                        <View><FlatList data={toDoListStore.taskListModel.list}
                                        renderItem={(value) => <TaskElement id={value.item.id}
                                                                            isCompleted={value.item.isCompleted}
                                                                            name={value.item.name}
                                                                            key={value.item.id}/>}/>
                        </View>

                    )
                    : (<ActivityIndicator/>)}
            </View>


        </SafeAreaView>
    );
});
const styles = StyleSheet.create({
    screenContainer: {marginVertical: 20},
    textInput: {borderColor: 'black', borderWidth: 1, padding: 15, margin: 5, fontSize: 18},
});

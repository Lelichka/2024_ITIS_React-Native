import {
    ActivityIndicator,
    Button,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import {observer} from 'mobx-react';
import {useRootStore} from '../hooks/useRootStore.tsx';
import React, {useEffect, useState} from 'react';
import {TaskElement} from './TaskElement.tsx';
import {Modalize, useModalize} from 'react-native-modalize';


export const HomeScreen = observer(() => {

    const {ref, open} = useModalize();

    const {toDoListStore} = useRootStore();
    const [text, setText] = useState('');
    useEffect(() => {
        toDoListStore.getListObjectFromService();
    }, [toDoListStore]);
    const handleAddClick = (name: string) => {
        toDoListStore.addTask(name);
    };
    return (
        <SafeAreaView style={{height: '100%', padding: 10}}>
            <View style={styles.inputView}>
                <TextInput style={styles.textInput}
                           placeholder={'Enter your task'}
                           onChangeText={(value) => setText(value)}/>
                <Button onPress={() => handleAddClick(text)} title={'Add Task'} color={'#478430'}/>
            </View>
            {toDoListStore.taskListModel && !toDoListStore.isLoading ? (
                    <View style={{flex: 1}}>
                        <View style={styles.listContainer}>
                            <View><FlatList data={toDoListStore.taskListModel.list.filter(item => !item.isCompleted)}
                                            renderItem={(value) => <TaskElement id={value.item.id}
                                                                                isCompleted={value.item.isCompleted}
                                                                                name={value.item.name}
                                                                                key={value.item.id}/>}/>
                            </View>
                        </View>
                        <Button onPress={() => open()} title={'View completed tasks'} color={'#478430'}/></View>)
                : (<ActivityIndicator/>)}
            {toDoListStore.taskListModel && !toDoListStore.isLoading ? (
            <Modalize ref={ref} modalTopOffset={200} flatListProps={{
                data: toDoListStore!.taskListModel!.list.filter(item => item.isCompleted),
                renderItem: ({item}) => <View style={{marginHorizontal:10}}><TaskElement id={item.id}
                                                           isCompleted={item.isCompleted}
                                                           name={item.name}
                                                           key={item.id}/></View>,
                keyExtractor: item => item.id,
                showsVerticalScrollIndicator: false,
            }}>
            </Modalize>) : <></>}
        </SafeAreaView>
    );
});
const styles = StyleSheet.create({
    inputView: {paddingTop: 15},
    textInput: {borderColor: 'black', borderWidth: 1, padding: 15, marginVertical: 5, fontSize: 18},
    listContainer: {
        flex: 1,
    },
});



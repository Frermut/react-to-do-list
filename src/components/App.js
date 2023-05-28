import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header'
import Search from './Search'
import List from './List'
import ListItem from './AddItem'

const App = () => {
    return (
        <div className="todo-app">
            <Header />
            <Search />
            <List />
            <ListItem />
        </div>
    );
}

export default App;
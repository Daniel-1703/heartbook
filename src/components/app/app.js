import React from 'react';

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import './app.css';

const App = () => {

    const data = [
        {label: "I like React", important: true, id: 'qwqw'},
        {label: "My favorite activity is developing applications", important: false, id: 'gfds'},
        {label: "Frontend is cool", important: false, id: 'fdfdf'}
    ];

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;
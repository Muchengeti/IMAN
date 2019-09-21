import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

class SearchBar extends React.Component{
    render(){
        return (
            <div align="center">
                <Search
                placeholder="Search article"
                enterButton="Search"
                size="default"
                style={{ width: 400}}
                align="right"
                onSearch={value => console.log(value)}
                />
            </div>

        );
    }
}

export default SearchBar;
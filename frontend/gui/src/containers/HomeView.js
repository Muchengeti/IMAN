import React from 'react';
import Articles from '../components/Article';
import axios from 'axios';
import CustomForm from '../components/ArticleForm';
import logo from './home-background.png';
import logo2 from './image2.png';

class Home extends React.Component {

    render() {
        return(
            <div>
                <h1 align="center">Welcome to IMAN</h1>
                <img align="center"
                    width={1300}
                    alt="logo"
                    src={logo2}
                >
                </img>
            </div>
           

        )

    }
}

export default Home; 
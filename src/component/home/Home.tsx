import React from 'react';
import Bar from "./bar/Bar";
import Header from "./header/header";
import ShoesCard from "./shoesCard/ShoesCard";

class Home extends React.Component {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className='home'>
                <Header />
                <ShoesCard />
                <Bar />
            </div>
        )
    }
}

export default Home;

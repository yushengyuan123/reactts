import React from 'react';
import './ShoesCard.scss'
import {getShoes} from "../../../util/api/getShoes";

interface shoes {
    'shoesId': string,
    'shoesName': string,
    'shoesImage': string,
    'publishDate': string,
    'shoesPrice': {
        'msrp': number,
        'fullRetailPrice': number,
        'currentRetailPrice': number,
        'onSale': boolean
    },
    'purchaseType': string,
    'CargoNum': string,
    'merchantStatus': string,
    'shoesSize': any,
    'num': number,
    'seoSlug': string
}

class ShoesCard extends React.Component {
    state: any = {
        shoesList: []
    }

    getShoesList(): void {
        getShoes.getShoesList().then(res => {
            console.log(res)
            this.setState({
                shoesList: res.data.slice(0, 10)
            })
        })
    }

    componentDidMount(): void {
        // console.log('我执行了声明周期')
        this.getShoesList()
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (this.state.shoesList.map((item: shoes) => {
            return (<div className='shoes-card-container' key={item.num}>
                <div className='shoes-card-header-container'>
                    <div className='snkrs-png'>
                    </div>
                    <div className='shoes-card-header-title'>
                        SNKRS国区
                    </div>

                    <div className='shoes-card-time-title'>
                        2020-01-03 09:00:00
                    </div>
                </div>
                <div className='left-container'>
                    <div className='shoes-name-container'>
                        {item.shoesName}
                    </div>

                    <div className='shoes-other-info-container'>
                        状态:{item.purchaseType}
                    </div>

                    <div className='shoes-other-info-container'>
                        发售时间:2020-01-03 09:00:00
                    </div>
                </div>

                <div className='right-container'>
                    <img src={item.shoesImage} alt='wori'/>
                </div>
            </div>)
        }))
    }
}

export default ShoesCard;

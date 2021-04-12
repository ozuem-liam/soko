import React from 'react';
import BagItem from './BagItem';

export default function BagList({value}) {
    const {bag} = value;
   
    return (
        <div className="container-fluid">
            {bag.map(item => {
                return <BagItem key={item.id} item={item} value={value}/>
            })}
            
        </div>
    )
}

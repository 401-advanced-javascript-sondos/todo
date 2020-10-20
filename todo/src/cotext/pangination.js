import React, { createContext } from 'react';
import {useState} from 'react';

export const PanginationContext= React.createContext();

function Pangination (props){

    const [current , setCurrent]= useState(1);
    const [ itemIn , setItemIn]= useState(4);


    const paginate= pagecurrent=> setCurrent(pagecurrent);
    const setitems= pageNumbers=> setItemIn(pageNumbers)

    //number of posts
    const numberofItems=current*itemIn;
    const indexOfFirstItem = numberofItems - itemIn;
    const list = props.list.sort((a,b)=> a.difficulty > b.difficulty ? 1 : -1);
    let currentItems = list.slice(indexOfFirstItem, numberofItems);

    
    const setCurrentItem=result=>{
        setItemIn(itemIn)
        currentItems=result;
    }



let state={

current,
itemIn,
currentItems,
paginate,
setitems,
setCurrent:setCurrent,
setItemIn:setItemIn,
setCurrentItem,

}


    return(
        <PanginationContext.Provider value={state}>
            {props.children}
        </PanginationContext.Provider>
    )

};


export default Pangination;
import React, { Component } from 'react';

let mobiles = [{
    id:"001",
    name :"oneplus11",
    price : 56999,
    isPurchased: true},
    {
    id:"002",
    name : "Vivi Y100",
    price : 24999,
    isPurchased: false},
    {
    id:"003",
    name : "Redmi 10",
    price : 56999,
    isPurchased : true},
    {
    id:"004",
    name : "iphone 13",
    price : 62990,
    isPurchased : false},
    {
    id:"005",
    name : "Nokia",
    price : 12000,
    isPurchased : true},
    {
    id:"006",
    name : "Poco M4",
    price : 13999,
    isPurchased : true}]

class Class extends Component {
    constructor(){
        super ()
        let get=mobiles;
        this.state ={
            get
    }
    }
  render(){
    const sortMobilesLTH = () => {
        const sortedMobilesLTH = [...mobiles].sort((a, b) => a.price - b.price);
          this.setState({get:sortedMobilesLTH});
        };
        
        const sortMobilesHTL = () => {
        const sortedMobilesHTL =[...mobiles].sort((a, b) => a.price - b.price);
        this.setState({get:sortedMobilesHTL.reverse()});
        };

        const filtermobiles=()=>{
            const filteredmobiles =mobiles.filter((elm)=>elm.isPurchased===true)
           this. setState({get:filteredmobiles})
          }

          const sortMobilesAsc=()=>{
            const sortedAsc=[...mobiles].sort((a, b) =>{
             if (a.name.toLowerCase() < b.name.toLowerCase()) {
               return -1;
             }
             if (a.name.toLowerCase() > b.name.toLowerCase()) {
               return 1;
             }
             return 0;
           });
           
           console.log(sortedAsc)
           this.setState({get:sortedAsc})
           }
           const sortMobilesDes=()=>{
           const sortedDes=[...mobiles].sort((a, b) =>{
             if (a.name.toLowerCase() < b.name.toLowerCase()) {
               return -1;
             }
             if (a.name.toLowerCase() > b.name.toLowerCase()) {
               return 1;
             }
             return 0;
           });
           this.setState({get:sortedDes.reverse()})
           }
        let mobile=this.state.get 
    return (
        <>
        { mobile.map((value,index)=>{
            return(
                <div key={index}>
                    <h1>Name:{value.name}</h1>
                    <h3>price:{value.price}</h3>
                    <p>isPurchased:{value.isPurchased}</p>
                </div>
            )

  })}
       <button onClick={sortMobilesAsc}>Sort By Asc</button>
        <button  onClick={sortMobilesDes}>Sort By Des</button>
        <button  onClick={sortMobilesLTH}>LOW TO HIGH</button>
        <button onClick={sortMobilesHTL}>HIGH TO LOW</button>
        <button onClick={filtermobiles}>Filter</button>
        </>
    )

}
}
export default Class;
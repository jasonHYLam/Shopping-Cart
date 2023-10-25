import Card from "./Card"
import NavBar from "./NavBar";
import containerStyle from "./flexContainer.module.css"


const ShopPage = (
    {idArray,
    }) => {

    return (
        <>
        <h1>ITEMS</h1>


        <div className={containerStyle.container}>
        
            {idArray.map(item => {
                return (
                    <Card key={item} shopId={item}/>
                )
            })}
        </div>




        </>
    )
}

export default ShopPage;
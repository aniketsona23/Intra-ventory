import { useState } from "react"
import "../styles/home.css"

function Home(){
    const [itemName,setItemName] = useState("")
    const [stockNum,setStockNum] = useState(0)

    async function onAdd(e){
        e.preventDefault()
        const bodyt={
            name:itemName,
            stock:stockNum,
            itemid:12
        };

        const response = await fetch("/api/additem",{
            method:"POST",
            body:JSON.stringify(bodyt),
            headers:{
                "Content-Type":"application/json"
            }
        })

        const json = await response.json()
        console.log(json)
    }

    return(
        <>
            <section className="add-item-container" onSubmit={onAdd}>
                <form action="" >
                    <div className="item-input">
                        <label htmlFor="item-name"></label>
                        <input type="text" id="item-name" name="item-name" value={itemName} onChange={(e)=>setItemName(e.target.value)}/>
                    </div>
                    <div className="item-input">
                        <label htmlFor="stock-num"></label>
                        <input type="number" id="stock-num" name="stock-num" value={stockNum} onChange={(e)=>setStockNum(e.target.value)}/>
                    </div>
                    <button>Add</button>
                </form>
            </section>
        </>
    )
}

export default Home
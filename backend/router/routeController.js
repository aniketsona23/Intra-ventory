const Item =require('../modals/Item')

const homeShow = (req,res)=>{
    res.send("Hello Brother")
} 

const showAllItems = (req,res)=>{
    const allItems =  Item.find({}).sort({"name":1})
    res.status(200).json(allItems)
}

const addItem = async (req,res)=>{
    const item = req.body
    console.log(item)

    try{
        const adding = await Item.create(item);
        res.status(200)
        console.log("[+] Item added Successfully");
    }catch(err){
        console.log("[-] Coudn't add new item : "+err);
    }
}

module.exports = {homeShow,showAllItems,addItem}
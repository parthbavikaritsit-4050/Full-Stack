function DynamicLists() {

    const fruits:String[]=["Apple","Cherry","Papaya"];
    
    return (
        <>
       {fruits.map((values,index)=>(
        <li key={index}>{values}</li>
    
    ))} 
    </>
     );
}

export default DynamicLists;
function Header() {
   
    const name:String="Parth";
    return ( 
        <>
        <h2>This is my header</h2>
        <h2 style={{color:"purple"}}>Welcome {name}</h2>
        </>
     );
}

export default Header;
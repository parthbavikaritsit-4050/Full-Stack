function Content() {
   let islogedin:boolean=true;
    return (
        <>
        <h1>{islogedin ? "Welcome user":"login please"}</h1>
        </>
      );
}

export default Content;
import React from 'react';
import axios from 'axios';



class App extends React.Component{


    onClickButton = async () => {
     const response = await axios.get('http://www.mocky.io/v2/5c6ceec53700001d0ffa30c2');
     console.log(response.data);
     
    }


    render(){
        return(
            <div>
             <button onClick={this.onClickButton}>CallApi</button>
             {/* <div>
             {
                    this.props.response.map(
                        (item , i) => (
                            <div>
                                <ul onClick = {() => console.log(item)}>
                                    <li>Product Name : {item.pname}</li>
                                    <li>Product Price : {item.pprice}</li>
                                </ul>
                            </div>
                        )
                    )
                }
             </div> */}
            </div>
        );
    }
}

export default App;
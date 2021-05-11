import axios from 'axios';
import React from 'react'

class ColorStrip extends React.Component {
    constructor() {
        super();
        this.state = {
            colorstrips: undefined,
            savedValues:[0,0,0,0,0,0],
            initialColors: undefined
        }
    }
    saveValues = (index,value,color) => {
        const {savedValues,initialColors} = this.state
        savedValues[index]=value;
        initialColors[index]=color
        this.setState({savedValues:savedValues,initialColors:initialColors})
    }
    setData = (initialColors,colorstrips) => {
        this.setState({ colorstrips: colorstrips,initialColors:initialColors })
    }
    componentDidMount() {
        axios({
            url: "https://5f16ad48a346a0001673929b.mockapi.io/api/mockdata/chemicals",
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then(result => {
            let initialColors = []
            result.data.map(item=>{
                initialColors.push(item.values[0].color)
            })
            this.setData(initialColors,result.data)
        })
    }
    render() {
        const { colorstrips,savedValues,initialColors } = this.state
        console.log(initialColors)
        return (
            <div className="container m-2">
                <h5>Test Strips</h5>
                {colorstrips ? colorstrips.map((item, index) => {
                    return <div key={index} className="row justify-content-center">
                        <div className="d-flex border p-2 justify-content-center align-items-center">
                            <div style={{ backgroundColor: initialColors[index], height: "20px", width: "20px" }}></div>
                        </div>
                        <div className="col-10 border p-2">
                            <div className="d-inline-block mb-2">{`${item.name} (${item.unit})`}</div>
                            <div className="d-inline-block float-right border pl-5 pr-5 mb-2">{savedValues[index]}</div>
                            <div className="row justify-content-between">
                                {item.values.map((color,cindex) => {
                                    return <div key={cindex} className="col-2 text-center" onClick={()=>this.saveValues(index,color.value,color.color)}>
                                        <div style={{ "background-color": color.color, "height": "20px", "width": "50px", borderRadius: "15%" }}>
                                        </div>
                                        <div style={{ "height": "20px", "width": "50px" }}>
                                            {color.value}
                                </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                })
                    : null
                }
            </div >
        )
    }
}

export default ColorStrip
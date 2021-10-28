import React from "react";
import Multiselect from 'multiselect-react-dropdown';
import reactDom from "react-dom";
import { render } from "@testing-library/react";
import './Dropdown.styles.css'
import Card from '../machine-card/machine-card.component'
class DropDown extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            selected: [],
            options: [
                {name: '1️⃣',id:'1'},
                {name: '2️⃣',id:'2'},
                {name: '3️⃣',id:'3'},
                {name: '4',id:'4'},
                {name: '3️5',id:'5'}
            ]
           
        }
        this.multiselectRef = React.createRef();
        this.onSelect = this.onSelect.bind(this);
        this.onRemove=this.onRemove.bind(this);
        
        
    }
   
    
    resetValues() {
        // By calling the belowe method will reset the selected values programatically
        this.multiselectRef.current.resetSelectedValues();
      }
    
   /* getValues() {
        var a = this.multiselectRef.current.getSelectedItems();
        console.log(a)
        this.setState({selectedValues: a})
        console.log(this.state)
    }*/

    onSelect(selectedList,selectedItem) {
      //  this.setState({selected:selectedList})

      // this.setState({selected:[...this.state.selected,selectedItem]})
      // console.log(selectedItem)
    //  console.log(typeof(selectedItem))
     // console.log(typeof(selectedList))
      var a = [];
      this.state.selected.push(selectedItem)
      a = this.state.selected
      console.log(typeof(a)) 
      console.log(a)
      this.setState({selected : a })
      console.log(typeof(this.state.selected))
      console.log(a)
      //console.log(this.state.selected)
     // (this.state.selected.push(selectedItem))
      
     // console.log(this.state.selected)
      //parseInt(selectedItem,10)
     
     // this.state.selected.push(selectedItem)
       //this.setState({selected:b},() => {
       
    }

    onRemove(selectedList,removedItem) {
       
       // console.log(selectedList)
       var a = []
        this.state.selected.pop(removedItem)
        a= this.state.selected
        this.setState({selected : a })
        console.log(this.state.selected)
    }
    
    

 render(){
    
    return(
        
            <span className = 'machine-number'>
                { console.log(typeof(this.state.options))}
                { console.log(typeof(this.state.selected))}
              <Multiselect 
                options={this.state.options}
              //  onChange = {this.handleChange} // Options to display in the dropdown
                ref={this.multiselectRef}
                         //      Preselected value to persist in dropdown
                onSelect={this.onSelect} // Function will trigger on select event
                onRemove={this.onRemove} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options 
                showCheckbox={true}
                selectionLimit = "4"
                placeholder = "Select Machine Number"
                avoidHighlightFirstOption = {true}
                style={{ multiselectContainer: { // To change css for multiselect (Width,height,etc..)
                    "minWidth":"100%",
                    "maxMarginLeft" : "80%",
                  },chips: { background: "red" },
                   searchBox: { border: "none", "borderBottom": "1px solid blue", "borderRadius": "0px" } }}
              />
              {
                  this.state.selected.length? this.state.selected.map( e => {
                      return(
                          <div key = {e.id}>
                              {console.log(e)}
                              <Card variant="outlined"></Card>
                          </div>
                      )
                  }) : console.log('nahi yar')
              }
            </span>
            
                  
        
    )

  }
}
export default DropDown;
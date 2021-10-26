import React from "react";
import Multiselect from 'multiselect-react-dropdown';
import reactDom from "react-dom";
import { render } from "@testing-library/react";
import './Dropdown.styles.css'
class DropDown extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            options: [{name: '1️⃣'},{name: '2️⃣'},{name: '3️⃣'},{name: '4'},{name: '3️5'}],
            selected: []
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
        this.setState({selected:selectedList})

       //this.setState({selected:[...this.state.selected,selectedItem]})
       //console.log(selectedItem)
    }

    onRemove(selectedList,removedItem) {
        
        this.setState({selected:selectedList})
    }
    
    

 render(){
    
    return(
        
            <span className = 'machine-number'>
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
              {console.log(this.state)}
            
            </span>
            
                  
        
    )

  }
}
export default DropDown;
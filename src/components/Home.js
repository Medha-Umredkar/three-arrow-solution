import './Home.css';
import { useState } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

const Home = () => {

    const [selected, setSelected] = useState("");
    const [selectedList, setSelectedList] = useState("");

    const employees = [
        {name:"Medha", cat:"All Employee"},
        {name:"Harshal", cat:"All Employee"},
        {name:"Suresh", cat:"All Employee"},
        {name:"Bhagyashree", cat:"All Employee"},
        {name:"Kavita", cat:"All Employee"},
        {name:"Rajesh", cat:"All Employee"}
      ];
    const practitioners = [
        {name:"Dr. Xavier lll", cat:"All Practitioners"},
        {name:"Dr. Don Health", cat:"All Practitioners"},
        {name:"Dr. Siegfried Tausend", cat:"All Practitioners"}
    ];
    const assistants = [
        {name:"Darshana", cat:"All Assistants"},
        {name:"Payal", cat:"All Assistants"},
        {name:"Pankhudi", cat:"All Assistants"},
        {name:"Rakhi", cat:"All Assistants"}
    ];
    const options = [
        ...employees,
        ...practitioners,
        ...assistants
    ]
    console.log(options)

    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
    };

    let type;
    if (selected === "All Employee") {
        type = employees;
    } else if (selected === "All Practitioners") {
        type = practitioners;
    } else if (selected === "All Assistants") {
        type = assistants;
    }

    const onSelect = (selectedList, selectedItem) => {
        setSelectedList(selectedList)
    }

    const onRemove = (removedItem, selectedList) => {
        setSelectedList(selectedList)
    }

    console.log(JSON.stringify(selectedList))


    return(
        <div >
            <form className='home' >
                <div className="form">
                    <h3>Select Employee</h3>
                    <select onChange={changeSelectOptionHandler} className="select">
                        <option value="" ><span>{employees.length + practitioners.length + assistants.length}</span>|| Select Employee</option>
                        <option value="All Employee" ><span>{employees.length}</span>|| All Employee</option>
                        <option value="All Practitioners" ><span>{practitioners.length}</span>|| All Practitioners</option>
                        <option value="All Assistants" ><span>{assistants.length}</span>|| All Assistants</option>
                    </select>

                    {selected &&
                        <Multiselect
                            options={options}
                            displayValue="name"
                            showCheckbox={true}
                            placeholder="Search Employee"
                            avoidHighlightFirstOption="false"
                            onSelect={onSelect}
                            onRemove={onRemove}
                            groupBy="cat"
                            selectedValues={type}
                            className="select"
                            style={{ chips: { background: "#142A51" }, option:{backgroundColor:"#142A51"},
                                searchBox:{background: "#254883", border:"none"}, optionContainer:{background:"#254883", color:"#DAE2EF"},
                                groupHeading:{color:"#A0B5D9"} }}
                        />  
                    }
                </div>

                <div className='date'>
                    <h3>Select Date</h3>
                    <input type="date"  />
                </div>
                
            </form>
        </div>
    );
}

export default Home;
import React, { Component } from 'react';
import './Header.scss';
import { MDBIcon } from "mdbreact";

class Header extends Component {
    constructor(){
        super();
        //this.handleSearch = this.handleSearch.bind(this); //subaidina funkcija su klase kad matytu jei nenaudoji arrow function
        this.state = {
            names: [],
            isLoaded: false,
            searchName:'',//ka useris suvede i paieskos lauka
            searchNameIndex: {},
            searchSuccess: false
          }
    }
    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://api.meteo.lt/v1/places')
            .then(res => res.json())
            .then(json =>{
            this.setState({
                isLoaded: true,
                names: json,
            })
            });
        }

     handleSearch=()=>{//paspaudus mygtuka paima is state'o paieskos varda ir pagal ji perbega per vietoviu masyva ir jei randa viskas ok
        console.log('mygtukas paspaustas', this.state.searchName);

        if(this.state.isLoaded){
            for (let i of this.state.names)// i masyvo elementas
            {           
                if(i.name === this.state.searchName){
                    this.setState({searchNameIndex: i, searchSuccess: true});
                    console.log(i, 'rado ', this.state.searchNameIndex);
                    break;
                }else{
                    this.setState({searchNameIndex: {}, searchSuccess: false});
                }
            }
            if(!this.state.searchSuccess){
                alert("Tokios vietovės nėra");
            }
        }        
     }
     
     handleSearchChange=(e)=>{
        this.setState({searchName: e.target.value});
     }

     
    render() {
        
        return (
            <header className="row d-flex flex-row bg-color pt-1">
                <div className="col-12 col-lg-3 col-xl-2">
                    <h1><a href="www.delfi.lt">WEATHER</a></h1>
                </div>
                <div className="col-12 col-lg-9 col-xl-10">
                    <div className="input-group md-form form-sm form-1 p-0 m-2 pr-4" >
                        <input className="form-control my-0 py-1 bg-white" type="text" placeholder="Search" name="searchName" value={this.state.searchName} onChange={this.handleSearchChange}/>
                        <div className="input-group-prepend">
                            <button className="input-group-text white" onClick={this.handleSearch}>
                                <MDBIcon className="text-black fa-lg" icon="search" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
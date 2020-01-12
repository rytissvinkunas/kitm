import React, { Component } from 'react';
import Nav from '../nav/Nav';
import Main from '../main/Main';
import Loading from '../loading/Loading';

class PageBody extends Component {
    constructor(props){
        super(props);
        this.state = {
          items: {}, //nufechintas objektas
          title:'', //
          isLoaded: false,//ar nufechino duomenis
          searchSuccess: false,//ar paieska pasiseke
          searchName:'',//ieskomo filmo ivedimo stringas, tikrinamas ar isviso ivestas i input lauka
          arRado: 'False'//ar nufchintam objekte yra filmas pagal pavadinima
        }
    }
    // componentDidMount(){//nesusitvarkau su situo, negaliu niekaip fecho stringui prikabint paieskos frazes
    
    //     let aa = 'terminator';
    //     // console.log('http://www.omdbapi.com/?apikey=e1c0fcab&t='+aa);
    //     // this.setState({searchSuccess: true});
    //     // if(this.state.searchSuccess){
    //        fetch('http://www.omdbapi.com/?apikey=e1c0fcab&t='+aa)
    //         .then(res => res.json())
    //         .then(json =>{
    //         this.setState({
    //             isLoaded: true,
    //             items: json,
    //         })
    //         }); 
    //     //}
    // }

    handleSearch=()=>{
        if(this.state.searchName.length>0){
            this.setState({searchSuccess: true});
            let name = this.state.searchName.replace(/\s/g, "_");//paieskos stringas perdarytas kad tiktu API
           fetch('http://www.omdbapi.com/?apikey=e1c0fcab&t='+name)
            .then(res => res.json())
            .then(json =>{
            this.setState({
                isLoaded: true,
                items: json,
                arRado: json.Response
            })
            });
        }else{
            this.setState({searchSuccess: false});
            alert("Įveskite filmo pavadinimą");
        }        
    }
     
    handleSearchChange=(e)=>{
        this.setState({searchName: e.target.value});
    }

    render() {
        //jei nufechino ir jei nufechintam objekte rado ivesta filma tada perduoda per propsus i Main viska atvaizdavimui
        if(this.state.isLoaded && this.state.arRado==='True')
        {
            var movieComponentsMain =
                <Main
                    title = {this.state.items.Title}
                    year = {this.state.items.Year}
                    rated = {this.state.items.Rated}
                    released = {this.state.items.Released}
                    runtime = {this.state.items.Runtime}
                    genre = {this.state.items.Genre}
                    director = {this.state.items.Director}
                    writer = {this.state.items.Writer}
                    actors = {this.state.items.Actors}
                    plot = {this.state.items.Plot}
                    language = {this.state.items.Language}
                    country = {this.state.items.Country}
                    awards = {this.state.items.Awards}
                    poster = {this.state.items.Poster}
                    ratings = {this.state.items.Ratings}
                    metascore = {this.state.items.Metascore}
                    imdbRating = {this.state.items.imdbRating}
                    imdbVotes ={this.state.items.imdbVotes} 
                    imdbID = {this.state.items.imdbID}
                    type = {this.state.items.Type}
                    dvd = {this.state.items.DVD}
                    boxOffice = {this.state.items.BoxOffice}
                    production = {this.state.items.Production}
                    website = {this.state.items.Website}
                    response = {this.state.items.Response}
                    searchName = {this.state.searchName}
                    searchSuccess = {this.state.searchSuccess}
                />
        }
        //jei nufechino ir jei nufechintam objekte rado ivesta filma tada renderina Nav ir Main componntus su duomenimis
        if(this.state.isLoaded && this.state.arRado==='True'){
            return (
                <React.Fragment>
                    <Nav triggerParentInput={this.handleSearchChange} triggerParentInputValue ={this.state.searchName} triggerParentButton={this.handleSearch} bandom={this.bandom}/>
                    {movieComponentsMain}
                </React.Fragment>
            )
          }
          //jei nenufechino arba nerado nufechintam objekte ieskomo filmo title'o tada renderina Nav ir Loading componentus
          //ALERT!!! nesutvarkiau jeigu nufechintam objekte neranda filmo, neparodo jokio pranesimo nes is pradziu buna FALSE
          else{
            return (
                <React.Fragment>
                    <Nav triggerParentInput={this.handleSearchChange} triggerParentInputValue ={this.state.searchName} triggerParentButton={this.handleSearch} bandom={this.bandom}/>
                    <Loading />
                </React.Fragment>
                
            );
          }










        
    }
}

export default PageBody;
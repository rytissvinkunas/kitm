import React, { Component } from 'react';

class Loading extends Component {
    state = {  }
    render() {
        return (
            <main className="bg-light p-4">
                <p>Sveiki, Jūs atėjot į filmų paieškos puslapį</p>
                <p>Norėdami vykditi paiešką, įveskite tikslų filmo pavadinimą ir spauskite Mugtuką.</p>
            </main>
            
        );
    }
}

export default Loading;
import React, { useState } from "react";
import axios from 'axios';
import './FormMovie.css'

const FormMovie = () => {
    const [addMovie, setAddMovie] = useState({
        title:'', poster:'', comment:''
    })

    const onChange = (e) => {
        setAddMovie({...addMovie, [e.target.name]: e.target.value})
    }

    const submitForm = (e) => {
        e.preventDefault();

        const url = 'https://post-a-form.herokuapp.com/api/movies/';
        
        axios.post(url, addMovie)
        .then(res => res.data)
        .then(() => {
            alert(`Film ajouté!`);
        })
        .catch(e => {
            console.error(e);
            alert(`Erreur lors de l'ajout d'un film: ${e.message}`);
        });
    }

        return (
            <div className="FormMovie">
            <h1>Saisie du film préféré</h1>

            <form onSubmit={submitForm}>
                <fieldset>
                <legend>Informations</legend>
                <div className="form-data">
                    <label htmlFor="title">Title</label>
                    <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={onChange}
                    value={addMovie.title}
                    />
                </div>

                <div className="form-data">
                    <label htmlFor="poster">Poster</label>
                    <input
                    type="text"
                    id="poster"
                    name="poster"
                    onChange={onChange}
                    value={addMovie.poster}
                    />
                </div>

                <div className="form-data">
                    <label htmlFor="comment">Comment</label>
                    <input
                    type="textarea"
                    id="comment"
                    name="comment"
                    onChange={onChange}
                    value={addMovie.comment}
                    />
                </div>
                <hr />
                <div className="form-data">
                    <input type="submit" value="Envoyer" />
                </div>
                </fieldset>
            </form>
            </div>

        )
}

export default FormMovie;
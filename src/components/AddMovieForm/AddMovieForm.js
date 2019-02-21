import React, {Component, Fragment} from 'react';
import './AddMovieForm.css';

class AddMovieForm extends Component {
    render() {
        return (
            <Fragment>
                <input type='text' name='name' className='movie_form' onChange={this.props.onChangeInput} placeholder='Add your movie'/>
                <button type='button' onClick={this.props.onAddMovie} className='btn btn-danger'>Add</button>
            </Fragment>
        )
    }
}

export default AddMovieForm;
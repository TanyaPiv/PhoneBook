import React, { Component } from 'react';
import styles from './CreateContact.module.scss';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v4';
import history from '../../history'

export default class CreateContact extends Component {

    state = {
        contact: {
            name: '',
            phone: '',
            favorite: false,
            id: uuid()
        }
    }

    onInputChange = (event) => {
        const { value, name, checked } = event.target;

        this.setState({
            contact: {
                ...this.state.contact,
                [name]: name === 'favorite' ? checked : value
            }
        })
    }

    onSubmit = () => {
        const {name, phone } = this.state.contact;

        if(!name.length || !phone.length) {
            return
        }
        
        this.props.onContactAdd(this.state.contact)
        history.push('/')
    }

    render () {
        return (
            <div className={styles.wrap}>
                <h2>Добавление нового контакта</h2>
                <input type="text" 
                    placeholder='Ввeдите Имя' 
                    className={styles.name} 
                    onChange={this.onInputChange}
                    name='name'
                />
                <input type="text" 
                    placeholder='Введите Номер' 
                    className={styles.num} 
                    onChange={this.onInputChange}
                    name='phone'
                />
                <label className={styles.favorite}>
                    <input 
                        type='checkbox' 
                        onChange={this.onInputChange}
                        name='favorite'
                    />
                    <h3>Избранное</h3>
                </label>
                <div className={styles.buttons}>
                    <button type='button' onClick={this.onSubmit}>Ок</button>
                    <Link to='/'>
                        <button type='button'>Отмена</button>
                    </Link>
                </div>
                
            </div>
        )
    }
}

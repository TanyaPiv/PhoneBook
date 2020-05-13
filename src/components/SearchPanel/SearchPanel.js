import React, { Component } from 'react';
import styles from './SearchPanel.module.scss';
import { Link } from 'react-router-dom';

export default class SearchPanel extends Component {
    onChange = (event) => {
        const { value } = event.target

        this.props.onChange(value)
    }

    render () {
        return (
            <div className={styles.wrap}>
                <input type="text" 
                    placeholder='Введите номер телефона'
                    onChange={this.onChange}
                />
                <Link to='/create'>
                    <button type='button' className={styles.add}>Добавить</button>
                </Link>
            </div>
        )
    }
}

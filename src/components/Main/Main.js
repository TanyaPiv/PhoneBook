import React, { Component } from 'react';
import SearchPanel from '../SearchPanel';
import ContactList from '../ContactList';
import styles from './Main.module.scss'

export default class Main extends Component {
    state = {
        query: ''
    }

    onSearchPanelChange = (query) => {
        this.setState({
            query: query
        })
    }

    render () {
        return (
            <div className={styles.container}>
                <SearchPanel onChange={this.onSearchPanelChange} />
                <ContactList
                    contacts={this.props.contacts}
                    onLike={this.props.onLike}
                    onDelete={this.props.onDelete}
                    query={this.state.query}
                />
            </div>
        )
    }
}

import React, {Component} from 'react';
import './App.scss';
import 'normalize.css';
import CreateContact from './components/CreateContact';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './components/Main';


export default class App extends Component {
    state = {
        contacts: []
    }

    componentDidUpdate (prevProps, prevState) {
        if (this.state.contacts !== prevState.contacts) {
            const json = JSON.stringify(this.state.contacts)
            localStorage.setItem('contacts', json)
        }
    }

    componentDidMount () {
        const localStorageContacts = localStorage.getItem('contacts')
        const contacts = JSON.parse(localStorageContacts)

        if (contacts) {
            this.setState({
                contacts: contacts
            })
        }
    }


    onDelete = (id) => {
        const newArray = this.state.contacts.filter((el) => el.id !== id)
        this.setState({
            contacts: newArray
        });
    }

    onLike = (id) => {
        const newArr = this.state.contacts.map(cont => {            
            return {
                ...cont,
                favorite: cont.id === id ? !cont.favorite : cont.favorite
            }
        })
        this.setState({
            contacts: newArr
        })

    }

    onContactAdd = (newContact) => {
        this.setState({
            contacts: this.state.contacts.concat(newContact)
        })
    }

    render () {
        return (
            <Switch>
                <Route exact path='/' render={()=> (
                    <Main 
                        contacts={this.state.contacts}
                        onLike={this.onLike}
                        onDelete={this.onDelete}
                    />
                )} />
                <Route path='/create' render={()=>(
                    <CreateContact 
                        onContactAdd={this.onContactAdd}
                    />
                )}/>
                <Redirect to='/'/>
            </Switch>
        );
    }
}

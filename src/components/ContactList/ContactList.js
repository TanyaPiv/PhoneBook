import React, { Component } from 'react';
import styles from './ContactList.module.scss';
import ContactItem from '../ContactItem';

export default class ContactList extends Component {
    render () {
        const { query, contacts, onLike, onDelete } = this.props;
        let arr = [...contacts]


        if (query.length > 0) {
            arr = contacts.filter(({ phone, name }) => (name.toLowerCase().includes(query.toLowerCase())) || (phone.includes(query)))
        }

        arr.sort((a, b)=> {
            return a.name.localeCompare(b.name)
        })
        .sort(({ favorite }) => {
            if (favorite) {
                return -1;
            }

            return 1;
        })


        return (
            <div className={styles.container}>
                {
                    arr.map(cont => {
                        return(
                            <ContactItem 
                                name={cont.name} 
                                phone={cont.phone} 
                                favorite={cont.favorite}
                                key={cont.id}
                                onClick={()=> onLike(cont.id)}
                                onDelete={()=> onDelete(cont.id)}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

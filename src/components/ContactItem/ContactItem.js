import React, {Component} from 'react';
import styles from './ContactItem.module.scss';

export default class ContactItem extends Component {
    render () {
        return (
            <div className={styles.wrap}>
                <div className={styles.name}>{this.props.name}</div>
                <div className={styles.phone}>{this.props.phone}</div>
                <button className={styles.butlike} onClick={this.props.onClick}>
                    {
                        this.props.favorite 
                            ? 'unLike' 
                            : 'Like'
                    }
                </button>
                {
                    this.props.favorite && (
                        <div className={styles.like}>❤️</div>
                    )
                }
                <div 
                    className={styles.trush}
                    onClick={this.props.onDelete}
                >
                    🗑
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import FragChildCom from './fragmentChild';

export default class fragment extends Component {
    render() {
        return (
           <table>
               <tbody>
                    <FragChildCom/>
               </tbody>
           </table>
        )
    }
}

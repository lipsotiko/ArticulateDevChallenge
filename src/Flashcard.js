import React, { Component } from 'react';
import { rotateIcon } from './rotateIcon'
const side = { FRONT: 'FRONT', BACK: 'BACK' }

class Flashcard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            side: side.FRONT
        }
        this._flipFlashcard = this._flipFlashcard.bind(this);
        this._displayContent = this._displayContent.bind(this);
    }

    render() {
        const flashCardContent = this._displayContent();
        return <div className={`flash-card flash-card-${this.props.index}`} onClick={this._flipFlashcard}>
            {flashCardContent}
            {rotateIcon}
        </div>
    }

    _flipFlashcard() {
        if (this.state.side === side.FRONT) {
            this.setState({ side: side.BACK })
        } else {
            this.setState({ side: side.FRONT })
        }
    }

    _displayContent() {
        const flashcard  = this.props.flashcard;
        if (this.state.side === side.FRONT)
            return <h4>{flashcard.frontTitle}</h4>
        
        if (this.state.side === side.BACK && flashcard.backImage)
            return <img src={flashcard.backImage} alt={`back of flashcard ${this.props.index}`}/>

        if (this.state.side === side.BACK && flashcard.backTitle)
            return <h4>{flashcard.backTitle}</h4>

        if (this.state.side === side.BACK && flashcard.backText)
            return <p className='flash-card-text'>{flashcard.backText}</p>

        return <p>Error</p>
    }

}
export default Flashcard;
import React from 'react'

export default class SecondCounter extends React.Component {
    constructor(props) {
        super(props)
        console.log('constructor')
        this.state = {
           currentCount: props.start || 0
        }
    }
    render () {
        console.log('render')
        return (
            <p>{this.state.currentCount}</p>
        )
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.timer = setInterval(() => {
            this.setState((state) => ({
                currentCount: state.currentCount + 1
            }))
        }, 1000)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        return nextState.currentCount % 2 === 0
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillunmount')
        clearInterval(this.timer)
    }
}
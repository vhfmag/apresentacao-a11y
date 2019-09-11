import React from 'react'
import {ni_gradient, ni_blue} from './theme'

export default ({ children, author, date, level = 1 }) => {
    const screen = window.location.pathname !== '/print'
    const Tag = `h${level}`
    if(screen) {
        return <div
            style={{
                width: '100%',
                height: '100%',
                background: ni_gradient,
                backgroundSize: '100% 100%',
                paddingLeft: '1em',
                color: 'white',
                position: 'absolute',
                top: 0

            }}>

            <div style={{
                height: '100%',
                position: 'relative'
            }}>
                <div style={{
                    margin: 0,
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)'
                }}>
                    <div>{date}</div>
                    <Tag style={{
                        fontFamily: 'Roboto Slab',
                        wordSpacing: '-10%',
                        weight: 'bold',
                        color: 'white',
                        fontSize: '3em',
                        marginTop: 0,
                        lineHeight: "100%",
                        textAlign: "left"
                    }}>{children}</Tag>
                </div>
                <div style={{
                    position: 'absolute',
                    bottom: '0.4em',
                    fontSize: '0.7em'
                }}>{author}</div>

            </div>
        </div>
    }
    else {
        return <div style={{
            width: '100%',
            paddingLeft: '1em',
        }}>
            <div>{date}</div>
            <h1 style={{
                fontFamily: 'Roboto Slab',
                wordSpacing: '-10%',
                color: ni_blue,
            }}>{children}</h1>
            <div>{author}</div>
            </div>
    }
}
import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { addAlbum, setAlbums } from '../actions/albums'

// const sleep = time => new Promise(
//     resolve => setTimeout(() => resolve(`After waiting for ${time/1000} seconds.`), time )
// )

class AlbumsListContainer extends React.Component {
    state = {}

    componentDidMount() {
        request('https://jsonplaceholder.typicode.com/albums')
        .then(response => this.props.setAlbums(response.body))

      
    //    request('https://jsonplaceholder.typicode.com/albums')
    //    .then(response => this.setState({ albums: response.body }))
//
//
    //    this.props.addAlbum(5, 'Enjoying Sunshine')
//
    //    this.props.addAlbum(10, 'Having US fun')
    }

    render(){
        console.log(this.props)
        if (!this.props.albums) return 'Loading...'
        return <AlbumsList albums={this.props.albums} />
    }
}

const mapStateToProps = state => {
    return {
        albums: state.albums
    }
}

export default connect(mapStateToProps, { addAlbum: addAlbum, setAlbums: setAlbums })(AlbumsListContainer)
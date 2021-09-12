import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FAIcon from 'react-fontawesome'

import { Input } from 'components'

import './style.scss'
let loopInterval:any

export const WidgetInstagram = ({ data, duration, onNext, onDataChange, isEditable }: { data: any, duration: number, onNext?: Function, onDataChange?: Function, isEditable?: boolean}) => {
  const [state, setState] = useState<any>({
    posts: [],
    activePost: 0,
    query: ''
  })

  // #region FUNCTIONS
  const getPosts = (e: any) => {
    const query = e.target.value
    console.log({ query })
    // setState({
    //   query
    // }, () => console.log(state))
    // if (query.length > 0) {
    //   const data = { hashtag: query }
    //   fetchPosts(data)
    //   props.onDataChange(data)
    // }
  }

  const beginLoop = () => {
    const { posts } = state
    loopInterval = setInterval(() => {
      const activePost = state.activePost + 1
      if (activePost >= posts.length && posts.length > 0) {
        onNext && onNext()
      }
      setState({
        activePost: activePost >= posts.length ? 0 : activePost
      })
    }, duration * 1000)
  }

  const fetchPosts = ({ hashtag, handle }: any) => {
    console.log('fetching: ', { hashtag, handle })

    clearInterval(loopInterval)
    axios({
      method: 'GET',
      url: `https://www.instagram.com/explore/tags/${hashtag}/?__a=1`
    }).then(response => {
      if (response.status === 200) {
        const posts = response.data.graphql.hashtag.edge_hashtag_to_top_posts.edges
        console.log(posts)
        setState({
          posts: posts.map((post: any) => ({
            src: post.node.display_url,
            likes: post.node.edge_liked_by.count,
            caption: post.node.edge_media_to_caption.edges[0].node.text
          })),
          isLooping: true
        })

        // TODO: useStateWithCallback
        setTimeout(beginLoop, 300)
      }
    }).catch(error => {
      console.log('error', error)
    })
  }
  // #endregion

  // #region LIFECYCLE

  useEffect(() => {
    const { hashtag, handle } = data
    setState({
      query: hashtag || handle
    })
    fetchPosts({ hashtag, handle })

    return () => {
      clearInterval(loopInterval)
    }
  }, [])

  useEffect(() => {
    const { hashtag, handle } = data
    fetchPosts({ hashtag, handle })
  }, [data.hashtag, data.handle, state.query])

  // #endregion

  const { posts, query, activePost } = state
  const post = posts.length > 0 ? posts[activePost] : undefined
  return <div className='flex-col' style={{ position: 'relative', overflow: 'hidden' }}>
    {
      isEditable && <Input
        label='#hashtag'
        type='text'
        value={query}
        onChange={getPosts}
      />
    }
    <br />
    {
      post && <div key={`instagram-post-${query}`} className='instagram-post'>
        <div className='details'>
          <div><FAIcon name='heart' color='red' />&nbsp;&nbsp;&nbsp;{post.likes}</div>
          <div>{post.caption}</div>
        </div>
        <img key={`instagram-${query}`} src={post.src} />
      </div>
    }
  </div>
}

WidgetInstagram.defaultProps = {
  onDataChange: (data: any) => console.log(`<WidgetInstagram />.onDataChange() UNDEFINED. \n${data}`),
  isEditable: false,
  duration: 10,
  data: {
    hashtag: 'hdr'
  }
}

WidgetInstagram.propDocs = {
  data: 'The shape containing data required for the component. { hashtag: "whatever" }',
  duration: 'When the component should call onNext()',
  onNext: 'Called if this component should be hidden, for a new one to replace it',
  isEditabe: 'Allows editing of the data'
}

WidgetInstagram.config = {
  name: 'Instagram',
  type: 'widget:instagram',
  icon: 'image',
  props: [{
    name: 'url',
    type: 'text',
    defaultValue: ''
  }]
}

export default WidgetInstagram

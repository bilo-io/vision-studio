/* eslint-disable no-unused-vars */
// #region Modules
import React, { Component, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// #endregion

// #region Components
import {
  Input
  // Select
} from 'components'
// #endregion

// #region Misc
import {
  countries,
  categories,
  getHeadlines
} from './util'
// #endregion

export const WidgetNews = ({
  data,
  isEditable,
  duration,
  onNext,
  onDataChange
}: {
  data: any,
  isEditable?: boolean,
  duration: number,
  onNext?: Function,
  onDataChange?: Function,
}) => {
  const [state, setState] = useState<any>({
    news: [],
    activePost: 0
  })

  // useEffect(() => {
  //   const { data } = this.props
  //   getHeadlines(data || WidgetNews.defaultProps.data).then(
  //     response => {
  //       setState({
  //         news: response.data.articles
  //       }, beginLoop)
  //     }
  //   )
  // }, [])

  // const autoPlay = () => {
  //   const { news } = state
  //   const activePost = state.activePost + 1
  //   if (news.length > 0 && activePost >= news.length) {
  //     clearInterval(loopInterval)
  //     props.onNext()
  //   }
  //   this.setState({
  //     activePost: activePost < news.length
  //       ? activePost
  //       : 0
  //   })
  // }

  // const beginLoop = () => {
  //   const { duration } = this.props
  //   loopInterval = setInterval(this.autoPlay, duration * 1000)
  // }

  // const onChangeUrl = (e: any) => {
  //   const update = {
  //     ...data,
  //     url: e.target.value
  //   }
  //   onDataChange(update)
  // }

  const onChange = (field: string) => (e: any) => {
    const update = {
      ...data,
      [field]: e.target.value
    }
    onChange(update)
  }

  // const { isEditable, data } = this.props
  const { news, activePost } = state
  const { query, country, limit } = data
  const article = news.length > 0 ? news[activePost] : undefined
  return <div className='flex-col'>
    {
      isEditable && <div>
        <Input
          label='search...'
          type='text'
          value={ query }
          onChange={onChange('query')}
        />
        <Input
          label='limit...'
          type='number'
          value={ limit }
          onChange={onChange('limit')}
        />
        {/* <Select
                        onChange={this.onChange('country')}
                        options={ categories.map(category => ({
                            label: category,
                            value: category
                        })) }
                    />
                    <Select
                        onChange={this.onChange('category')}
                        options={ countries.map(country => ({
                            label: country.name,
                            value: country.name
                        })) }
                    /> */}
      </div>
    }
    {
      article && <div key={'widget-news-article'} className='article-container'>
        <img src={article.urlToImage} />
        <div className='content'>
          <div className='title'>{article.title}</div>
          {/* <div className='description'>{article.content}</div> */}
          <div className='author'>{article.author}</div>
          <div className='source'>(Source: {article.source.name})</div>
        </div>
      </div>
    }
  </div>
}

WidgetNews.defaultProps = {
  onDataChange: (data: any) => console.log('define WidgetNews.onDataChange()'),
  duration: 10,
  data: {
    limit: 5,
    country: 'ZA'
  }
}

WidgetNews.config = {
  name: 'News',
  type: 'widget:news',
  icon: 'image',
  props: [{
    name: 'query',
    type: 'text',
    defaultValue: ''
  }, {
    name: 'Country',
    type: 'single',
    defaultValue: 'za',
    options: countries
  }, {
    name: 'Categories',
    type: 'single',
    defaultValue: 'za',
    options: categories
  }]
}

export default WidgetNews

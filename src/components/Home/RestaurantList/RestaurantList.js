import React from 'react'
import './RestaurantList.scss'

const list = Array(13).fill({
  src:
    'https://images.unsplash.com/photo-1532270441355-095a26af8a99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
  title: '약수동 이북식 찜닭 진남포연옥',
  description: '탱글탱글 찜닭과 부추의 조합',
  star: 4.7,
  tags: ['찜닭', '막국수', '만두'],
})

const RestaurantList = () => {
  return (
    <div className="restaurant-list-container">
      <h2>요즘 핫한 추천 맛집</h2>
      <div className="list">
        {list.map((item, idx) => (
          <a href="/" key={idx} className="item-container">
            <div className="img">
              <img src={item.src} />
            </div>
            <div>
              <p className="title">{item.title}</p>
              <p className="description">{item.description}</p>
              <p>
                <span>{item.star}</span>
                <span>{item.tags.map((i) => '#' + i).join(' ')}</span>
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default RestaurantList

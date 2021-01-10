import renderElement from '../tools/renderElement'

class UsersRanking {
  render(userList) {
    const rankingSection = renderElement('section', 'ranking')
    const rankingTitle = renderElement('div', 'ranking__title-container', '', rankingSection)
    rankingTitle.innerHTML = '<svg class=ranking__icon width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M41.6666 0H8.33329V4.16667H41.6666V0ZM41.6666 50V45.8333H8.33329V50H41.6666ZM8.33329 8.33333H41.6666C43.9583 8.33333 45.8333 10.2083 45.8333 12.5V37.5C45.8333 39.7917 43.9583 41.6667 41.6666 41.6667H8.33329C6.04163 41.6667 4.16663 39.7917 4.16663 37.5V12.5C4.16663 10.2083 6.04163 8.33333 8.33329 8.33333ZM25 14.0625C27.5833 14.0625 29.6875 16.1667 29.6875 18.75C29.6875 21.3333 27.5833 23.4375 25 23.4375C22.4166 23.4375 20.3125 21.3333 20.3125 18.75C20.3125 16.1667 22.4166 14.0625 25 14.0625ZM14.5833 32.2917V35.4167H35.4166V32.2917C35.4166 28.8125 28.4791 27.0833 25 27.0833C21.5208 27.0833 14.5833 28.8125 14.5833 32.2917Z" fill="black"/></svg><h2 class=ranking__title>Mode Ranking</h2>'
    
    const place = renderElement('span', 'ranking__position ranking__position--bold', 'Place', rankingSection )
    const player = renderElement('span', 'ranking__position ranking__position--bold', 'Player', rankingSection )
    const answered = renderElement('span', 'ranking__position ranking__position--bold', 'Answered', rankingSection )

    const topUsers = [...userList].slice(0,3)
    topUsers.forEach((topUser, id) => {      
      const position = renderElement('span', 'ranking__position', '', rankingSection)
      if (id === 0) {
        position.innerText = '1st'
      } else if (id === 1) {
        position.innerText = '2nd'
      } else {
        position.innerText = '3rd'
      }
      renderElement('span', 'ranking__position', topUser.name, rankingSection)
      renderElement('span', 'ranking__position', topUser.score, rankingSection)
    })
  }

}

const userRankingObj = new UsersRanking()

export default userRankingObj
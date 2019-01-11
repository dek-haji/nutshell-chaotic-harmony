// This module will build html form for an object and append it to the DOM
const newsCreateObject = {
  // method to build html form, takes one argument it is an object from database
    articleBuilder(articleObject) {
      // create html elements
      let newsSection = document.createElement("section")
      let newsTitle = document.createElement("h3")
      // get content from database
      newsTitle.textContent = `${articleObject.title}`
      let newsSynopsis = document.createElement("p")
      newsSynopsis.textContent = `${articleObject.synopsis}`
      let newsUrl = document.createElement("p")
      newsUrl.textContent = `${articleObject.url}`
      let newsuserId = document.createElement("h4")
      newsuserId.textContent = `${articleObject.userId}`
      let newstimeStamp = document.createElement("h4")
      // append it to the section
      newstimeStamp.textContent = `${articleObject.timeStamp}`
      newsSection.appendChild(newsTitle)
      newsSection.appendChild(newsSynopsis)
      newsSection.appendChild(newsUrl)
      newsSection.appendChild(newsuserId)
      newsSection.appendChild(newstimeStamp)
      return newsSection
    }
  }
  export default newsCreateObject
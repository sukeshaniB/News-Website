function NewsItem({item}){
    const websiteUrl=item.url
    const website=websiteUrl.split('https://').pop().split('/')[0]
    const date=item.publishedAt

    const formatDate=date.replace('T','')
    const formatTime=formatDate.replace('z','')

    return(
        <a href="#"className="article">
            <div className="article-image">
                <img src={item.urlToImage}alt={item.title}/>
            </div>
            <div className="article-content">
                <div className="article-source">
                    <img src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${website}&size=16`}alt={item.source.id}/>
                    <span>{item.source.name}</span>
                </div>
                <div className="article-title">
                    <h2>{item.title}</h2>
                </div>
                <p className="article-description">
                  {item.description}
                </p>
                <div className="article-details">
                    <small><b>Published At:</b>{formatTime}</small>
                </div>
                 <a
            rel="noreferrer"
            href={item.url}
            target="_blank"
            className="app__btns_primary"
          >
            Read more
          </a>
            </div>
        </a>
    )


}

export default NewsItem
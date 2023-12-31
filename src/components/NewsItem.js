import React, { Component } from 'react'

export class NewsItem extends Component {
   

    render() {
      let  {title , description , imageUrl, newsUrl ,author,date, source}= this.props;
        return (
            <div className="my-3 ">
                <div className="card " >
                    <div style={{display:'flex', justifyContent:'flex-end', position:'absolute',right:'0'}}>
                    <span className=' badge rounded-pill bg-danger' >{source}</span>
                    </div>
                    <img src={imageUrl} className="card-img-top" alt="NO IMAGE "/>
                        <div className="card-body">
                            <h5 className="card-title text-dark">{title}...</h5>
                            <p className="card-text text-danger">{description}...</p>
                            <p className="card-text "><small className="text-body-secondary">By {!author?"Unknown":author} on  {new Date(date).toGMTString()}</small></p>
                            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-danger">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

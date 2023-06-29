import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onDisplayImg, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const activeClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickImg = () => {
    onDisplayImg(id)
  }

  return (
    <li className="thumbnail-item">
      <button type="button" className="thumbnail-button" onClick={onClickImg}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem

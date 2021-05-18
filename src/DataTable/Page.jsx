import React from 'react'

const Page = ({pageNumber = 0, currentPageNumber = 0, onChange = () => {}}) => {

  const isActivePage = currentPageNumber === pageNumber

  const renderedPageNumber = pageNumber + 1

  const click = (event) => {
    event.preventDefault()
    onChange(pageNumber)
  }
  
  return(
    <li className="page-item mr-1">
      <button className={`page-link ${isActivePage && 'button-outline'}`} onClick={click} >{renderedPageNumber}</button>
    </li>
  )
}

export default Page
